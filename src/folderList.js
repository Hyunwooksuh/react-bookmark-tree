export const folderList = [
  {
    "_id": "a",
    "title": "초보자용 리액트 링크모음",
    "publisher": "흥민",
    "likes": 10,
    "bookmark": ["wwww.react-basic.com"],
    "parent_folder": "root"
  },
  {
    "_id": "b",
    "title": "중급자용 리액트 링크모음",
    "publisher": "희찬",
    "likes": 9, 
    "bookmark": ["wwww.react-intermediate.com"],
    "parent_folder": "root"
  },
  {
    "_id": "c",
    "title": "고급자용 리액트 링크모음",
    "publisher": "진수",
    "likes": 134,
    "bookmark": ["wwww.react-advanced.com"],
    "parent_folder": "a"
  },
  {
    "_id": "d",
    "title": "초보자용 노드 링크모음",
    "publisher": "의조",
    "likes": 33,
    "bookmark": ["wwww.nodejs-basic.com"],
    "parent_folder": "a"
  },
  {
    "_id": "e",
    "title": "중급자용 노드 링크모음",
    "publisher": "규성",
    "likes": 77,
    "bookmark": ["wwww.nodejs-intermediate.com"],
    "parent_folder": "d"
  },
  {
    "_id": "f",
    "title": "고급자용 노드 링크모음",
    "publisher": "재성",
    "bookmark": ["wwww.nodejs-advanced.com"],
    "likes": 156,
    "parent_folder": "b"
  },
  {
    "_id": "g",
    "title": "자바스크립트 기초부터(링크모음)",
    "publisher": "인범",
    "likes": 658,
    "bookmark": ["wwww.javascript-promise.com"],
    "parent_folder": "f"
  }
]
