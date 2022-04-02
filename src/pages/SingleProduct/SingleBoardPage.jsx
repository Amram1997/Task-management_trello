import React, { useEffect } from "react";

import { Board } from "../../components/Board";
import { NavBar } from "../../components/NavBar";
import { Todo } from "../../components/Todo";

function SingleBoardPage() {
  return (
    <div>
      <NavBar />
      <Board />
      <Todo />
    </div>
  );
}

export { SingleBoardPage };
