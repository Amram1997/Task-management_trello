import { createUseStyles } from "react-jss";
const useStyles = createUseStyles(
  {
    modalDiv: {
      width: "350px",
      height: "400px",
      backgroundColor: "rgb(141, 148, 132)",
      position: "fixed",
      right: "40%",
      borderRadius: "20px",
      textAlign: "center",
    },
    modalInput: {
      width: "320px",
      height: "50px",
      border: "none",
      background: "transparent",
      borderBottom: "1px solid #fff",
      marginTop: "50px",
      "&::placeholder": {
        fontSize: "24px",
        color: "#fff",
        letterSpacing: "3px",
      },
    },
    modalText: {
      width: "320px",
      height: "100px",
      resize: "none",
      boxShadow: "3px -1px 9px 3px",
      border: "none",
      marginTop: "20px",
      background: "transparent",
      borderRadius: "10px",
      "&::placeholder": {
        fontSize: "24px",
        color: "#fff",
        letterSpacing: "3px",
      },
    },
    modalButton: {
      width: "150px",
      height: "30px",
      marginTop: "20px",
      border: "none",
      cursor: "pointer",
      borderRadius: "8px",
      boxShadow: "3px -1px 9px 3px",
    },
  },
  {
    name: "modalDiv",
    name: "modalInput",
    name: "modalText",
    name: "modalButton",
  }
);
export { useStyles };
