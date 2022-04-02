import { createUseStyles } from "react-jss";
const useStyles = createUseStyles(
  {
    boardDiv: {
      width: "250px",
      height: "300px",
      borderRadius: "20px",
    },
    inputTitle: {
      height: "50px",
      border: "none",
      background: "transparent",
      width: "70%",
      borderBottom: "1px solid #fff",
    },
    text: {
      width: "70%",
      height: "100px",
      resize: "none",
      boxShadow: "10px 1px 10px ",
      border: "none",
      marginTop: "20px",
    },
  },
  { name: "boardDiv", name: "inputTitle", name: "text" }
);

export { useStyles };
