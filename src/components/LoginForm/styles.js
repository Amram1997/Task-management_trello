import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    loginDiv: {
      backgroundColor: "#51777f1c",
      width: "350px",
      height: "400px",
      position: "absolute",
      top: "26%",
      right: "36%",
      boxShadow:
        "0px 4px 28px 8px rgb(0 0 0), 0px 1px 20px 20px rgb(0 0 0 / 22%);",
      borderRadius: "20px",
      paddingTop: "50px",
    },
    formInput: {
      width: "300px",
      height: "50px",
      marginTop: "70px",
      backgroundColor: " #0000009d",
      border: "none",
      borderBottom: "2px solid gray",
      "&::placeholder": {
        fontSize: "24px",
        color: "#fff",
      },
    },
    formButton: {
      width: "100px",
      marginTop: "20px",
      height: "30px",
      fontSize: "18px",
      fontWeight: "bold",
      backgroundColor: "#0000001d",
      boxShadow:
        "0px 4px 28px 8px rgb(0 0 0), 0px 1px 20px 20px rgb(0 0 0 / 22%);",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  },
  { name: "loginDiv", name: "formInput", name: "formButton" }
);

export { useStyles };
