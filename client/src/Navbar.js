import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "fit-content",
    padding: "10px",
    margin: "6px",
    background: '#242929',
    textDecoration: "none",
    color: "#fff",
    borderRadius: "2px",
    textAlign: "center",
    border: "transparent",
    height: "fit-content"
    };

function NavBar(props) {
  const [currentUser, setCurrentUser] = useState(null)

  function logout (){
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setCurrentUser(null);
        window.location.reload();
      }
    })
  }

  useEffect(() => {
    fetch('/me', {
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          res.json().then((user) => {
            setCurrentUser(user)
          })
        }
      })
  }, [])

  return (
    <header id="navbar">
      <NavLink to="/" exact className="app-name"> 
          <h1> forum </h1>
      </NavLink>

    {currentUser !== null && (
      <div className="logged-in-nav">
        <div>
          <p className='user-nav'><strong>{props.currentUser.username} </strong></p>
        </div>
        <a href="/my-profile"><img className="user-icon" src={props.currentUser.image} alt="icon" ></img> </a>
        <button
          className="login-button"
          style={linkStyles}
          onClick={props.show}
        > + post </button>
        <NavLink
          className="login-button"
          onClick={logout}
          to="/"
          exact
          style={linkStyles}
          > logout </NavLink>
      </div>
    )}

    {currentUser === null && (
      <div className="buttons">
        <NavLink
            className="login-button"
            to="/login"
            exact
            style={linkStyles}
        > Login </NavLink>

        <NavLink 
            className="signup-button"
            to="/signup"
            exact
            style={linkStyles}
        > Signup </NavLink> 
      </div>)}
    </header>
);
}

export default NavBar;