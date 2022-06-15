import React from 'react'
import {Link }from "react-router-dom"

function Header() {
  return (
    <>
    <header>
  <ul>
    <li>
      <Link to="/home">HOME</Link>
    </li>
    <li>
      <Link to="/login">LOG IN</Link>
    </li>
    <li>
      <Link to="/sign-up">REGISTER</Link>
    </li>
  </ul>
  <div className="clear" />
</header>

    </>
  )
}

export default Header