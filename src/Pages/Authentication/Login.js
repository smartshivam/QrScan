import React from 'react'
import banner from "../../../src/assets/images/banner-right.png"

function Login() {
  return (
    <>
    <section className="log-in">
  <div className="container">
    <div className="wrap-log">
      <div className="banner-left">
        <img src={banner} alt="" />
      </div>
      <div className="form-log-in">
        <form>
          <input type="email" placeholder="Enter your Email Address" />
          <br />
          <input type="password" placeholder="Enter your Password" />
          <br />
          <a className="forgot-password" href="#">
            <h6>Forgotten password?</h6>
          </a>
          <a href="wellcome.html">
            <input className="log-in-btn" type="button" defaultValue="LOG IN" />
          </a>
        </form>
      </div>
    </div>
    <div className="clear" />
  </div>
</section>


    </>
  )
}

export default Login