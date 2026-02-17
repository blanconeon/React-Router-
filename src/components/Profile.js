import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCurrentUser, selectIsLoggedIn } from "../features/session/sessionSlice";
import { Outlet } from "react-router-dom";
import {Navigate} from "react-router-dom";

export default function Profile () {
  const user = useSelector(selectCurrentUser)
  const loggedIn = useSelector(selectIsLoggedIn);
  
  // use loggedIn to return a Navigate. makes sure the path /profile is only accesible when user is logged in. 
  if (!loggedIn) {
    return (<Navigate to='/sign-up' />)
  }
  return (
    <main>
      <h1>{user.username}</h1>
      <Link to={`edit`}>Edit</Link>
      {/* Tell React Router where to render child routes` */}
      <Outlet/>
    </main>
  )
}
