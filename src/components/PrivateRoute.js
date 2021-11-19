import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import { authSelectors } from "../redux/auth";

export default function PrivateRoute() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

// import { useSelector } from 'react-redux';
// import { Outlet, Navigate } from 'react-router-dom';
// import authSelectors from '../../redux/Auth/auth-selectors';

// export default function PrivateRoute({ redirectTo = '/' }) {
//   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

//   return isLoggedIn ? <Outlet /> : <Navigate to={redirectTo} />;
// }
