import React, { useEffect, useLayoutEffect, useRef } from "react";
import { projectFireStore } from "../../firebase";
import { useCleverContext } from "../../hooks/useCleverContext";
import { useStyles } from "./style";
import { ACTION_TYPE } from "../../reducer";
import { Context } from "../../state/state";

function Todo() {
  const { state, dispatch } = useCleverContext(Context);
  const styles = useStyles();

  useEffect(() => {
    let results = [];
    projectFireStore
      .collection("/task")
      .get()
      .then((res) => {
        res.docs.map((doc) => {
          results.push({ id: doc.id, ...doc.data() });
        });

        dispatch({ type: ACTION_TYPE.SET_SINGLE_TASKS, tasks: results });
      });
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Single Board</h1>
      <div className={styles.todoDiv}>
        {state.tasks.map((task) => {
          return (
            <div key={task.id} className={styles.todoItem}>
              <h3>{task.status}</h3>
              <h2>{task.title}</h2>
              <h4>{task.desc}</h4>
              <h5>{task.category}</h5>
              <h5>{task.priority}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export { Todo };
