export const ACTION_TYPE = {
  HANDLE_INPUT_CHANGE: " HANDLE_INPUT_CHANGE",
  HANDLE_TEXT_CHANGE: "HANDLE_TEXT_CHANGE",
  TOGGLE_MODAL: "TOGGLE_MODAL",
  SET_TASKS: "SET_TASKS",
  ADD_BOARDS: "ADD_BOARDS",
  DELETE_BOARD: "DELETE_BOARD",
  SET_SINGLE_TASKS: " SET_SINGLE_TASKS",
};

export function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPE.HANDLE_INPUT_CHANGE: {
      let changeTitle = state.boards.map((item) => {
        console.log(action);
        console.log(item);
        if (item.id === action.id) {
          return { ...item, title: action.value };
        } else {
          return { ...item };
        }
      });
      console.log(changeTitle);
      return { ...state, boards: changeTitle };
    }
    case ACTION_TYPE.HANDLE_TEXT_CHANGE: {
      let textArray = state.boards.map((item) => {
        if (item.id === action.id) {
          return { ...item, desc: action.value };
        } else {
          return { ...item };
        }
      });
      return { ...state, boards: textArray };
    }
    case ACTION_TYPE.SET_TASKS: {
      return { ...state, boards: action.boards };
    }
    case ACTION_TYPE.ADD_BOARDS: {
      let newBoard = [...state.boards, action.newItem];
      return { ...state, boards: newBoard };
    }
    case ACTION_TYPE.DELETE_BOARD: {
      let deleteBoard = state.boards
        .map((item) => {
          return { ...item };
        })
        .filter((item) => {
          if (item.id !== action.id) {
            return { ...item };
          }
        });
      console.log(deleteBoard);
      return { ...state, boards: deleteBoard };
    }
    case ACTION_TYPE.SET_SINGLE_TASKS: {
      return { ...state, tasks: action.tasks };
    }
  }
}
