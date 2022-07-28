import React from "react";
import { Link } from "gatsby";


function Footer() {
  const isBrowser = typeof window !== "undefined"
  var sitename = 'Website'
  if (isBrowser){
    sitename = window.location.hostname
  }
  return (
    <div className="container-fluid p-0" id="back-color">
      <div className="d-md-flex align-items-center justify-content-center single-post">
        <div className="text-left col-md-6 col-12 pt-4 py-md-4 copyright text-white">
          © Copyright 2022 {sitename} | All Rights Reserved.    
        </div>
        <div className="text-md-end text-center py-4 py-md-0 col-md-6 col-12 justify-content-center">
          <Link to={`/privacy/`} className='pe-3 text-white'>
            Privacy Policy
          </Link>
          <Link to={`/disclaimer/`} className='px-3 text-white'>
            Disclaimer
          </Link>
          <Link to={`/tos/`} className='ps-3 text-white text-center'>
            Terms of Service
          </Link>
        </div>
        
      </div>
    </div>
  );
}

export default Footer;
