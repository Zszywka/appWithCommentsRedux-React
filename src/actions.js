import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

export const addComment = function addComment(text) {
  return {
    type: ADD_COMMENT,
    id: uuid.v4(),
    text: text,
    votes: 0
  }
}

export const removeComment = function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id: id
  }
}

export const editComment = function editComment(id, text) {
  return {
    type: EDIT_COMMENT,
    text: text,
    id: id
  }
}

export const thumbUpComment = function thumbUpComment(id) {
  return {
    type: THUMB_UP_COMMENT,
    id: id
  }
}

export const thumbDownComment = function thumbDownComment(id) {
  return {
    type: THUMB_DOWN_COMMENT,
    id: id
  }
}
