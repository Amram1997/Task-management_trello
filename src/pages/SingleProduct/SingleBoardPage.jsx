import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavBar } from "../../components/NavBar";
import { projectFireStore } from "../../firebase";
import { useCleverContext } from "../../hooks/useCleverContext";
import { ACTION_TYPE } from "../../reducer";
import { Context } from "../../state/state";

function SingleBoardPage() {
  const params = useParams();
  const { state, dispatch } = useCleverContext(Context);
  useEffect(() => {
    let tasks = [];
    projectFireStore
      .collection("/task")
      .get()
      .then((res) =>
        res.docs.map((doc) => {
          tasks.push(doc.data());
        })
      );
    dispatch({ type: ACTION_TYPE.SET_SINGLE_TASKS, tasks });
    console.log(tasks);
  }, []);
  let singleProduct = state.boards.map((item) => {
    return { ...item };
  });
  console.log(state.tasks);
  return (
    <div>
      <div>
        {singleProduct
          .filter((item) => {
            return item.id === params.boardId;
          })
          .map((board) => {
            return (
              <div key={Math.random().toString()}>
                <div
                  style={{
                    backgroundColor: `${board.back}`,
                    width: "500px",
                    height: "500px",
                  }}
                >
                  <h1>{board.title}</h1>
                  <p>{board.desc}</p>
                  <div></div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export { SingleBoardPage };
