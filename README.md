<h1 align="center">React bookmark tree</h1>
<p>
  <a href="https://www.npmjs.com/package/react-bookmark-tree" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/react-bookmark-tree.svg">
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> A simple react folder tree component

## Install

```sh
npm i react-bookmark-tree
```

## Usage

<img width="532" alt="image" src="https://user-images.githubusercontent.com/65224203/159202637-c3244f69-d784-4115-ad7f-08e4c733c208.png">


```Javascript
import { Tree } from "react-boomark-tree"

...

<Tree folderList={folderList} />

...

Tree.propTypes = {
  folderList: PropTypes.array.isRequired
};.
```

Injection of plain array consist of objects is required for usage. The listed component turns the prop structure into a nested array with hierarchical structures. folderlist json example is as below:

```javascript
export const folderList = [
  {
    "_id": "a",
    "title": "초보자용 리액트 링크모음",
    "parent_folder": "root"
  },
  {
    "_id": "b",
    "title": "중급자용 리액트 링크모음",
    "parent_folder": "root"
  },
  {
    "_id": "c",
    "title": "고급자용 리액트 링크모음",
    "parent_folder": "a"
  },
  {
    "_id": "d",
    "title": "초보자용 노드 링크모음",
    "parent_folder": "a"
  },
]
```
