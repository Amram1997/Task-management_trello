import React, { useEffect, useRef, useState } from "react";
import { useCleverContext } from "../../hooks/useCleverContext";
import { useClickOutside } from "../../hooks/useClickOutSide";
import { ACTION_TYPE } from "../../reducer";
import { Context } from "../../state/state";
import { useStyles } from "./style";
import { randomColors } from "../../helpers/randomColors";
function Modal({ toggleModal }) {
  const styles = useStyles();
  const { clickOutside } = useClickOutside();
  const { state, dispatch } = useCleverContext(Context);
  const [newItem, setNewItem] = useState({
    id: new Date().toDateString(),
    title: "",
    desc: "",
    back: "red",
  });

  const modalRef = useRef(null);
  useEffect(() => {
    console.log(modalRef);
    clickOutside(modalRef, toggleModal);
  }, []);

  return (
    <div className={styles.modalDiv} ref={modalRef}>
      Modal
      <input
        type="text"
        value={newItem.title}
        onChange={(e) => {
          setNewItem((prevItem) => ({
            ...prevItem,
            title: e.target.value,
          }));
        }}
        className={styles.modalInput}
        placeholder="title"
      />
      <textarea
        value={newItem.desc}
        onChange={(e) => {
          setNewItem((prevItem) => ({
            ...prevItem,
            desc: e.target.value,
          }));
        }}
        className={styles.modalText}
        placeholder="description..."
      ></textarea>
      <div></div>
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPE.ADD_BOARDS, newItem });
          setNewItem((prevItem) => ({
            ...prevItem,
            back: randomColors(),
          }));
        }}
        style={{
          backgroundColor: randomColors(),
        }}
        className={styles.modalButton}
      >
        Add board
      </button>
    </div>
  );
}

export { Modal };
