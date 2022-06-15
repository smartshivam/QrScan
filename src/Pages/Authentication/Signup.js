import React from 'react'

function Signup() {
  return (
    <div className='register-body'>

<section className="form-demo">
  {/* <div> */}

  <form>
    <h1>Register</h1>
    <div className="form-group">
      <input type="text" placeholder="Enter your name" />
      <div className="clear" />
    </div>
    <div className="form-group">
      <input type="tel" placeholder="Enter your mobile number" />
      <div className="clear" />
    </div>
    <div className="form-group">
      <input type="email" placeholder="Enter your email id" />
      <div className="clear" />
    </div>
    <div className="form-group">
      <input type="password" placeholder="Enter your password" />
      <div className="clear" />
    </div>
    <div className="form-group">
      <label>Date of birth</label>
      <br />
      <input type="date" placeholder="Enter your date of birth" />
      <div className="clear" />
    </div>
    <div className="form-group">
      <label>Gender</label>
      <br />
      <input type="radio" name="book" />
      Female
      <input type="radio" name="book" />
      Male
      <input type="radio" name="book" />
      Other
      <div className="clear" />
    </div>
    <div className="form-group">
      <a href="#">
        <input className="login-button" type="submit" defaultValue="Register" />
      </a>
      <div className="clear" />
      <div className="clear" />
    </div>
  </form>
  {/* </div> */}

</section>

</div>

  )
}

export default Signup