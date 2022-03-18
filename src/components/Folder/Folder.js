import React from "react";
import { FaFolder } from "react-icons/fa";
import styled from "styled-components";

const FolderWrapper = styled.div`
  display: flex;

  .folder {
    display: flex;
    flex-direction: row;
    width: 300px;
    height: 30px;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px;
    box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
    cursor: pointer;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 20px;
  }

  .add,
  .delete {
    color: #5587f5;
    cursor: pointer;
  }
`;

export default function Folder({ folder }) {
  return (
    <FolderWrapper className="folder-wrapper">
      <div className="folder" data-_id={folder[0]} >
        <FaFolder size="1.7rem" />
        {folder[1]}
      </div>
    </FolderWrapper>
  );
}
