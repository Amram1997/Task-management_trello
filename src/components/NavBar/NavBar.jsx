import React from "react";
import { useStyles } from "./style";
import userLogo from "../../assets/user.svg";
import { Link } from "react-router-dom";
function NavBar() {
  const styles = useStyles();
  return (
    <div>
      <div className={styles.navbarDiv}>
        <ul className={styles.navbarUl}>
          <li className={styles.navbarLi}>
            <a href="" className={styles.navbarLia}>
              Trello
            </a>
          </li>
          <li className={styles.navbarLi}>
            <Link to="/" className={styles.navbarLia}>
              Home
            </Link>
          </li>
          <li className={styles.navbarLi}>
            <a href="" className={styles.navbarLia}>
              workspace
            </a>
          </li>
          <li className={styles.navbarLi}>
            <input type="text" placeholder="search" />
          </li>
          <li className={styles.navbarLi}>
            <Link to="/profile">
              <img src={userLogo} />
            </Link>
          </li>{" "}
          <li className={styles.navbarLi}>
            <Link to="/login" className={styles.navbarLia}>
              Log out
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export { NavBar };
