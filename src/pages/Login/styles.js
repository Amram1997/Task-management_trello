import { createUseStyles } from "react-jss";
import image from "../../assets/loginPage.jpg";
import "../../assets/css/fonts.css";
const useStyles = createUseStyles(
  {
    loginPage: {
      backgroundImage: `url(${image})`,
      width: "100%",
      height: "700px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      marginTop: "0",
      textAlign: "center",
      position: "relative",
    },
    header: {
      margin: "0",
      position: "absolute",
      top: "12%",
      right: "30%",
      color: "white",
      fontSize: "62px",
      letterSpacing: "12px",
      fontFamily: "Hurricane, cursive",
    },
  },
  { name: "loginPage", name: "header" }
);
export { useStyles };
