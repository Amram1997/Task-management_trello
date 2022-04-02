import { createUseStyles } from "react-jss";
const useStyles = createUseStyles(
  {
    todoDiv: {
      display: "flex",
      justifyContent: "space-around",
    },
    todoItem: {
      width: "300px",
      height: "350px",
      backgroundColor: "GrayText",
      borderRadius: "20px",
      cursor: "pointer",
    },
  },
  { name: "todoDiv", name: "todoItem" }
);
export { useStyles };
