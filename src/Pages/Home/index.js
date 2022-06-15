import React from 'react'
import Footer from '../../common/Footer'
import Header from '../../common/Header'
import welcome from "../../../src/assets/images/welcome.png"
import {Link} from "react-router-dom"

function Index() {
  return (
    <>
    <Header/>
    <section className="banner">
  <div className="wrap-wel">
    <div className="box-lorem">
      <h1>WELCOME</h1>
      <h2>LOREM IPSUM</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo sint
        molestias non exercitationem voluptate accusantium ducimus quam
        quibusdam perspiciatis.
      </p>
      <Link className="qr-code" to="/qr-code">
        scan Qr code
      </Link>
    </div>
    <div className="box">
      <img src={welcome} alt="" />
    </div>
  </div>
  <div className="clear" />
</section>

<Footer/>

    </>
  )
}

export default Index