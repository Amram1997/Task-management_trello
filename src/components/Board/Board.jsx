import React, { useEffect } from "react";
import { projectFireStore } from "../../firebase";
import { useCleverContext } from "../../hooks/useCleverContext";
import { useParams } from "react-router-dom";
import { ACTION_TYPE } from "../../reducer";
import { Context } from "../../state/state";

function Board() {
  const params = useParams();
  console.log(params);
  const { state, dispatch } = useCleverContext(Context);
  console.log(state);
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
                    width: "300px",
                    height: "100px",
                  }}
                >
                  <h1>{board.title}</h1>
                  <p>{board.desc}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export { Board };
