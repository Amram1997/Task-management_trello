import React from "react";
import { NavBar } from "../../components/NavBar";
import { useStyles } from "./styles";
function Profile() {
  const styles = useStyles();
  return (
    <div className={styles.profilePage}>
      <NavBar />
    </div>
  );
}

export { Profile };
