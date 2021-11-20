import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { authSelectors } from "../redux/auth";

const styles = {
  link: {
    display: "inline-block",
    textDecoration: "none",
    padding: 12,
    fontWeight: 700,
    color: "#2A363B",
  },
};

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink to="/" style={styles.link}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/phonebook" style={styles.link}>
          Phonebook
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
