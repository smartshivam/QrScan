import React from 'react'
import Footer from '../../common/Footer'
import Header from '../../common/Header'
import banner from "../../../src/assets/images/QR_code_for_mobile_English_Wikipedia.svg.png"
import {Link }from "react-router-dom"
import QrScanner from "./QrScanner"


function index() {
  return (
    <>
    <Header/>
    <section className="banner-qr">
  <div className="wrap">
    <div className="box-article">
      <h2>Scan QR Code</h2>
      <h4>No app to download No hardware to install.</h4>
      <Link className="register" to="/sign-up">
        Register
      </Link>
    </div>
    <div className="box">
      {/* <img src={banner} alt="" /> */}
      <QrScanner/>
    </div>
  </div>
</section>

<Footer/>

    </>
  )
}

export default index