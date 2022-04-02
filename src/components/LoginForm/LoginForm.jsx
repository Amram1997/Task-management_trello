import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import { useStyles } from "./styles";

function LoginForm({ user, setUser }) {
  useEffect(() => {
    localStorage.setItem("trelloUser", JSON.stringify(user));
  }, [user]);
  const styles = useStyles();
  console.log(user);
  function handleLoginName(e) {
    setUser((prevState) => ({
      ...prevState,
      name: e.target.value,
    }));
  }

  function handleLoginPassword(e) {
    setUser((prevState) => ({
      ...prevState,

      password: e.target.value,
    }));
  }
  const navigate = useNavigate();

  function savePassword(event) {
    event.preventDefault();
    localStorage.setItem("trelloUser", JSON.stringify(user));
    console.log(user.name);
    if (user.name) {
      console.log("ptah");
      navigate("/profile");
    }
  }

  return (
    <div className={styles.loginDiv}>
      <div>
        <form>
          <input
            className={styles.formInput}
            type="text"
            placeholder="Name"
            onChange={(e) => {
              handleLoginName(e);
            }}
            value={user.name}
          />
          <input
            className={styles.formInput}
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) => {
              handleLoginPassword(e);
            }}
          />

          <button
            className={styles.formButton}
            onClick={(e) => {
              savePassword(e);
            }}
          >
            Sign IN
          </button>
        </form>
      </div>
    </div>
  );
}

export { LoginForm };
