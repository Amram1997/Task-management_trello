import React from "react";
import { LoginForm } from "../../components/LoginForm";

import { useStyles } from "./styles";

function Login({ ...props }) {
  const styles = useStyles();
  return (
    <div>
      <div className={styles.loginPage}>
        <h1 className={styles.header}>Welcome to Trello</h1>
        <LoginForm {...props} />
      </div>
    </div>
  );
}

export { Login };
