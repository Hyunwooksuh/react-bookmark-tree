/* 1. build tree method */
export function buildTree(folderList, level, folderTree) {
  // put the fundamental root folder insde target folder tree.
  if (!level) {
    folderTree.push("root", "root", []);
  }

  // In case folder list being empty, return the tree only with root folder
  if (!folderList) {
    return folderTree;
  }

  const parentId = folderTree[0]; // Inital parentId is set as "root"
  const temp = folderTree; // Setting the reference in temp variable

  for (let i = 0; i < folderList.length; i++) {
    if (folderList[i]["parent_folder"] === parentId) {
      temp.push([folderList[i]._id, folderList[i].title, folderList[i].bookmark]);
    }
  }

  for (let i = 3; i < temp.length; i++) {
    const subTree = temp[i];
    buildTree(folderList, level + 1, subTree);
  }

  return folderTree;
}

/* 2. relocate folder method */
export function relocateFolder(folderTree, targetId, currentParentId, newParentId) {
  let currentSubtree = folderTree[0] === currentParentId ? folderTree : null;
  let targetSubtree = folderTree[0] === newParentId ? folderTree : null;

  const findFolder = (tree) => {
    if (tree.length === 0) {
      return;
    }

    for (let i = 3; i < tree.length; i++) {
      const subtree = tree[i];
      if (subtree[0] === currentParentId) {
        currentSubtree = tree[i];
      }

      if (subtree[0] === newParentId) {
        targetSubtree = tree[i];
      }

      if (targetSubtree && currentSubtree) {
        break;
      }

      findFolder(subtree);
    }
  };

  findFolder(folderTree);

  for (let i = 3; i < currentSubtree.length; i++) {
    if (currentSubtree[i][0] === targetId) {
      const targetArray = currentSubtree.splice(i, 1);
      targetSubtree.push(targetArray[0]);
      break;
    }
  }

  return folderTree;
}
