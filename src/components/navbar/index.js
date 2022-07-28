import React, { useState } from "react";
import { Link, navigate } from "gatsby";

function Navbar() {
  const [value, setValue] = useState('');

  const handleSubmit = event => {
    if (window.location.pathname !== '/search/'){
    event.preventDefault();}

    navigate(`/search/?s=${value}`);
  };

  const isBrowser = typeof window !== "undefined"
  var sitename = ''
  if (isBrowser){
    sitename = window.location.hostname
  }

  return (
    <>




      <div className="container-fluid p-0 justify-content-center align-items-center">
        <div className="d-flex my-2 m-auto single-post align-items-center justify-content-between">
          <div className="col-6">
            <Link to={`/`} className="logo">{sitename}</Link>
          </div>
          <div className="col-md-4 col-6 align-items-center d-flex justify-content-end">
            <form className="input-group search" onSubmit={handleSubmit}>
              <input type="search" name="s" id="search-value" className="rounded-0 form-control" value={value} onChange={(e) => {setValue(e.target.value);}} placeholder="Search" aria-describedby="button-addon2"></input>
              <div className="input-group-append">
                <button className="rounded-0 btn text-white" id="back-color" type="submit">Search</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <div className="navbar mt-1 justify-content-center" id="back-color">
        <div className="nav container-fluid single-post p-0">
          <input type="checkbox" id="nav-check" />

          <div className="nav-btn">
            <label htmlFor="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          <div className="nav-links m-0">
            <ul>
              <li key={'Latest'}>
                <Link to={`/latest/`} className="nav-lino">
                  Latest
                </Link>
              </li>
              <li key={'Featured'}>
                <Link to={`/featured/`} className="nav-lino">
                  Featured
                </Link>
              </li>
              <li key={'Popular'}>
                <Link to={`/popular/`} className="nav-lino">
                  Popular
                </Link>
              </li>

              <li key={'Trending'}>
                <Link to={`/trending/`} className="nav-lino">
                  Trending
                </Link>
              </li>
              <li key={'Recent'}>
                <Link to={`/recent/`} className="nav-lino">
                  Recent
                </Link>
              </li>
              <li key={'Tips'}>
                <Link to={`/tips/`} className="nav-lino">
                  Tips
                </Link>
              </li>
              <li key={'Recommended'}>
                <Link to={`/recommended/`} className="nav-lino">
                  Recommended
                </Link>
              </li>
              <li key={'FAQs'}>
                <Link to={`/faqs/`} className="nav-lino">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>










    </>
  );
}

export default Navbar;
