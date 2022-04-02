import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import { useCleverContext } from "../../hooks/useCleverContext";
import { NavBar } from "../../components/NavBar";
import { useStyles } from "./style";
import { BoardItem } from "../../components/Boards";
import { ACTION_TYPE } from "../../reducer";
import plusLogo from "../../assets/plus.svg";
import { Modal } from "../../components/Modal";
import { projectFireStore } from "../../firebase";
import { Context } from "../../state/state";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Home() {
  const styles = useStyles();
  const { state, dispatch } = useCleverContext(Context);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }
  useEffect(() => {
    let results = [];
    projectFireStore
      .collection("/boards")
      .get()
      .then((res) => {
        res.docs.map((doc) => {
          results.push({ id: doc.id, ...doc.data() });
        });

        dispatch({ type: ACTION_TYPE.SET_TASKS, boards: results });
        setIsLoading(!isLoading);
      });
  }, []);
  console.log(isLoading);
  const conditionStyles = {
    popup: {
      backgroundColor: isModalOpen ? "white" : "transparent",
    },
  };

  return (
    <div className={styles.homePage} style={conditionStyles.popup}>
      <NavBar />
      <div
        className={styles.createBoard}
        onClick={() => {
          toggleModal();
        }}
      >
        Create <img src={plusLogo} /> Board
      </div>
      {isModalOpen && <Modal toggleModal={toggleModal} />}

      <div className={styles.boards}>
        {state.boards.map((item) => {
          return <BoardItem item={item} key={item.id} dispatch={dispatch} />;
        })}
      </div>

      {isLoading && (
        <Skeleton
          count={1}
          width={400}
          height={100}
          style={{
            position: "absolute",
            left: "500px",
            backgroundColor: "#784e5899",
            borderRadius: "20px",
          }}
        />
      )}
    </div>
  );
}

export { Home };
