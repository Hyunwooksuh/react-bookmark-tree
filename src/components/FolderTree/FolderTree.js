import React from "react";
import styled from "styled-components";
import Folder from "../Folder/Folder";

const FolderTreeWrapper = styled.ul`
  font-size: 30;
`;

export default function FolderTree({ subTree }) {
  return (
    <FolderTreeWrapper>
      <Folder folder={subTree} />
      {subTree.length >= 3 &&
        subTree.map((child, index) => {
          if (index < 3) {
            return;
          }

          return <FolderTree subTree={child} />;
      })}
    </FolderTreeWrapper>
  )
}
