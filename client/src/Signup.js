import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function Signup({ setCurrentUser }) {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [image, setImage] = useState('')
  const  [error, setError] = useState('')
  
  console.log()

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password,
        image
      })
    })
      .then(res => {
        if (res.ok) {
          res.json().then(user => {
            setCurrentUser(user)
            navigate('/')
          })
        } else {
          res.json().then(errors => {
            setError(errors.errors)
          })
        }
      })
  }
  return (
    <div className="authForm">
      <form onSubmit={handleSubmit} className="login-form">
        <h1>Sign Up</h1>
        <p>
          <label 
            htmlFor="username"
          >
            Username
          </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </p>
        <p>
          <label 
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            name=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <p>
          <label 
            htmlFor="image"
          >
            Image
          </label>
          <input
            type="text"
            name=""
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </p>
        <div style={{color: "red"}}>{error[0]}</div>
        <div style={{color: "red", marginBottom:'-9px'}}>{error[1]}</div>
        <p><button className="post-button" type="submit">Sign Up</button></p>
        <p style={{marginBottom:'2px'}}> already have an account? </p>
        <button href="/login" className="post-button"><Link to="/login">Log In</Link></button>
      </form>
    </div>
  )
}

export default Signup
