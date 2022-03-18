import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import FolderTree from "../FolderTree/FolderTree";
import { relocateFolder } from "../../../src/treeUtil";

// use treeMock.js in case you use mock data
// if you use fetched data from API, please replace mockTree.js file with tree.js
import { buildTree } from "../../../src/treeUtil";

const FolderTreeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;

  .input {
    display: flex;
    margin: 50px 0 150px 0;
    width: 100%;
    height: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export default function Tree({ folderList }) {
  /* Toggle to use mock data */
  const USE_MOCK_DATA = true;
  const [builtTree, setBuiltTree] = useState([]);
  const [updatedTree, setUpdatedTree] = useState([]);
  const [inputs, setInputs] = useState({
    target: "",
    current: "",
    relocated: "",
  })

  const currentParentInput = useRef("");
  const relocatedParentInput = useRef("");
  const targetFolder = useRef("");

  // tree structure is reproduced as below
  // tree category is based on the mock category as listed in 'src' directory. you can customize the category as you wish.
  // [ (folder id), (parent folder), (link array), (children), (children) .... ]
  useEffect(() => {
    const tree = USE_MOCK_DATA && buildTree(folderList, 0, []);    
    setBuiltTree(tree);
  }, [])

  const HandleRelocateFolder = () => {
    const updatedTree = relocateFolder(builtTree, targetFolder.current.value, currentParentInput.current.value, relocatedParentInput.current.value);

    setUpdatedTree(updatedTree);
  }

  useEffect(() => {
    if (!updatedTree) {
      setBuiltTree(updatedTree);
    }
  }, [updatedTree])

  const onChange = (e) => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    })
  }

  return (
    <FolderTreeWrapper>
      <div>
        {builtTree.length > 0 && <FolderTree subTree={builtTree}/> }
      </div>
      <div className="input">
        <div>
        📌 옮길 타겟폴더: 
          <input 
            name="target"
            onChange={onChange} 
            value={inputs.target}
            ref={targetFolder}
          />
        </div>
        <div key="current">
          📌 기존 부모폴더: 
          <input 
            name="current"
            onChange={onChange} 
            value={inputs.current}
            ref={currentParentInput}
          />
        </div>
        <div key="relocated">
          📌 옮길 부모폴더: 
          <input 
            name="relocated"
            onChange={onChange}
            value={inputs.relocated}
            ref={relocatedParentInput}
          />
        </div>
        <button onClick={HandleRelocateFolder}>🚀 위치 바꾸기</button>
      </div>
    </FolderTreeWrapper>
  )
}

Tree.propTypes = {
  folderList: PropTypes.array.isRequired,
}

Tree.defaultProps = {
  folderList: null,
}
