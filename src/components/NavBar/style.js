import { createUseStyles } from "react-jss";
const useStyles = createUseStyles(
  {
    navbarDiv: {
      backgroundColor: "transparent",
      width: "100%",
      height: "50px",
      borderBottom: "1px solid #fff",
    },
    navbarUl: {
      display: "flex",
      justifyContent: "space-around",
      marginTop: "0",
    },
    navbarLi: {
      listStyle: "none",
      marginTop: "10px",
    },
    navbarLia: {
      textDecoration: "none",
      color: "#fff",
      fontSize: "18px",
    },
  },
  { name: "navbarDiv", name: "navbarUl", name: "navbarLi", name: "navbarLia" }
);
export { useStyles };
