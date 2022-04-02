import { createUseStyles } from "react-jss";
import imageHome from "../../assets/homePage.jpg";
const useStyles = createUseStyles(
  {
    homePage: {
      width: "100%",
      minHeight: "700px",
      backgroundImage: `url(${imageHome})`,
      backgroundSize: "cover",
      backgroundRepeat: "repeat",
    },
    boards: {
      display: "flex",
      gap: "20px",
      justifyContent: "center",
      marginTop: "50px",
      flexWrap: "wrap",
    },
    createBoard: {
      width: "160px",
      height: "80px",
      backgroundColor: "#66284d",
      margin: "auto",
      marginTop: "70px",
      boxShadow: "0px 0px 12px 5px",
      borderRadius: "5px",
      textAlign: "center",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      fontSize: "22px",
    },
  },
  { name: "homePage", name: "boards", name: "createBoard" }
);

export { useStyles };
