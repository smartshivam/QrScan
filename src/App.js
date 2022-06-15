import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "../src/Pages/Home"
import QrCode from "../src/Pages/QrCode"
import Login from "../src/Pages/Authentication/Login"
import Signup from "../src/Pages/Authentication/Signup"
// import "./assets/css/qr-code.css"
// import "./assets/css/sighup.css"
import "./assets/css/style.css"
// import "./assets/css/welcome.css"
import QrScanner from "../src/Pages/QrCode/QrScanner"



function App() {
  return (
    <React.Fragment>
 <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/qr-code" element={<QrCode />} />
          {/* <Route path='/qr-scan' element={<QrScanner/>}/> */}
         

        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
