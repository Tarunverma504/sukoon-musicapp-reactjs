import React,{Component} from 'react';
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/js/src/collapse";
import "../node_modules/bootstrap/dist/css/bootstrap.css" ;


export default function Svg(){

  return(
    <>
       <nav className="navbar  navbar-inverse navbar-expand-sm" style={{backgroundColor:'black'} } >
      <a className="navbar-brand navbarTextColor fixed-link" >Sukoon</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span  > <i className="fas fa-bars"></i> </span>
      </button>
      
      <div className="collapse navbar-collapse " id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto ">
             <li className="nav-item mr-5">
                <a href="#" className="nav-link ">Home</a>
              </li>

              <li className="nav-item mr-5">
                <a href="#" className="nav-link ">About Us</a>
              </li>

              <li className="nav-item mr-5">
                <a href="#" className="nav-link ">Contact US</a>
              </li>
        </ul>
      </div>
      </nav>
    </>
  )
}
