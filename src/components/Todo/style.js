import { createUseStyles } from "react-jss";
const useStyles = createUseStyles(
  {
    todoDiv: {
      display: "flex",
      justifyContent: "space-around",
    },
  },
  { name: "todoDiv" }
);
export { useStyles };
