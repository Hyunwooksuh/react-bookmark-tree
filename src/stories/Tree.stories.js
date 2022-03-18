import React from "react";
import { storiesOf } from "@storybook/react"
import Tree from "../components/Tree/Tree";
import { folderList } from "../folderList";"../folderList"

const stories = storiesOf("App Test", module);

stories.add("App", () => {
  return (<Tree folderList={folderList}/>)
})


