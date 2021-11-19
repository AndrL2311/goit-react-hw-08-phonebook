import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

import { authSelectors } from "../redux/auth";

export default function PublicRoute({ restricted = false }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  //   console.log(restricted);
  return shouldRedirect ? <Navigate to="/phonebook" /> : <Outlet />;
}
