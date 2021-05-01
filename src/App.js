import React,{Component} from 'react';
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/js/src/collapse";
import "../node_modules/bootstrap/dist/css/bootstrap.css" ;


export default function App(){

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
      <div>
      <svg xmlns="http://www.w3.org/2000/svg " height={450} viewBox="0 0 1440 320"><path fill="#5000ca" fill-opacity="1" d="M0,192L21.8,186.7C43.6,181,87,171,131,154.7C174.5,139,218,117,262,128C305.5,139,349,181,393,208C436.4,235,480,245,524,224C567.3,203,611,149,655,144C698.2,139,742,181,785,197.3C829.1,213,873,203,916,218.7C960,235,1004,277,1047,256C1090.9,235,1135,149,1178,101.3C1221.8,53,1265,43,1309,53.3C1352.7,64,1396,96,1418,112L1440,128L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"></path></svg>
      </div>
    </>
  )
}
