import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser, logOut } from "../features/session/sessionSlice";
import {NavLink } from 'react-router-dom';


// Import the NavLink component.

export default function Header () {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const handleLogout = e => {
    dispatch(logOut())
  }

  // Replace the 4 <a> tags with <NavLink> components

  //NAVlINK CREATES A CLASS IN CSS TAUTOMATICALLY CALLED ACTIVE ADJUSTING BOLDNESS ?????
  return (
    <div className="header">
      <NavLink to="about">About</NavLink>
      <NavLink to="articles">Articles</NavLink>
      <NavLink to="categories">Categories</NavLink>
      {
        currentUser.username
          ? <>
              <NavLink href="/profile">Profile</NavLink>
              <button onClick={handleLogout} className="logout"> Log Out </button>
            </>
          : <NavLink href="/sign-up">Sign Up</NavLink>
        }
    </div>
  )
}
