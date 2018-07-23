import uuid from 'uuid';

// typy akcji:
export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

// kreatory akcji:
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

// export {ADD_COMMENT};
// export {addComment};
// export {REMOVE_COMMENT}:
// export {removeComment}:
// export {EDIT_COMMENT};
// export {editComment};
// export {THUMB_UP_COMMENT};
// export {thumbUpComment};
// export {THUMB_DOWN_COMMENT};
// export {thumbDownComment};
