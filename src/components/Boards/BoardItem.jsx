import React, { useEffect } from "react";
import { useStyles } from "./style";
import plusLogo from "../../assets/plus.svg";
import { ACTION_TYPE } from "../../reducer";
import { Link } from "react-router-dom";

function BoardItem({ item, dispatch, item: { id } }) {
  const styles = useStyles();

  return (
    <div
      className={styles.boardDiv}
      style={{ backgroundColor: `${item.back}` }}
    >
      <input
        value={item.title}
        className={styles.inputTitle}
        onChange={(e) => {
          dispatch({
            type: ACTION_TYPE.HANDLE_INPUT_CHANGE,
            value: e.target.value,
            id,
          });
        }}
      />
      <textarea
        value={item.desc}
        className={styles.text}
        style={{ backgroundColor: `${item.back}` }}
        onChange={(e) => {
          dispatch({
            type: ACTION_TYPE.HANDLE_TEXT_CHANGE,
            value: e.target.value,
            id,
          });
        }}
      />
      <br />
      <Link to={`/board/${id}`}>Read More...</Link>
      <br />
      <button
        onClick={() => {
          console.log("delete");
          dispatch({ type: ACTION_TYPE.DELETE_BOARD, id });
        }}
      >
        delete
      </button>
    </div>
  );
}

export { BoardItem };
