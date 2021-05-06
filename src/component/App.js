import React,{Component} from 'react';
import "../../node_modules/jquery/dist/jquery.min.js";
import "../../node_modules/bootstrap/js/src/collapse";
import "../../node_modules/bootstrap/dist/css/bootstrap.css" ;
import "../style/App.css";
import Artist from "./Artist";
import png from "../images/home_page_artist.png";
import Player from "./Player";
export default function App(){

  return(
    <>
       <nav className="navbar  navbar-inverse navbar-expand-md" style={{background: "-webkit-linear-gradient(to right, #021B79, #0575E6)", width:"100%"} } >
      <a className="navbar-brand navbarTextColor fixed-link navcolor nav-link" ><h1>Sukoon</h1></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span  > <i className="fas fa-bars"></i> </span>
      </button>
      
      <div className="collapse navbar-collapse  " id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto ">
             <li className="nav-item mr-5 ">
                <a href="#" className="nav-link navcolor ">Home</a>
              </li>
              <li className="nav-item mr-5">
                <a href="#" className="nav-link navcolor">About Us</a>
              </li>

              <li className="nav-item mr-5">
                <a href="#" className="nav-link navcolor ">Contact US</a>
              </li>
        </ul>
      </div>
      </nav>
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"  >
        <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{stopColor:"rgb(2, 27, 121)",stopOpacity:1}} />
          <stop offset="100%" style={{stopColor:"rgb(5, 117, 230)",stopOpacity:1}} />
        </linearGradient>
      </defs>
      <path fill={"url(#grad1)"} fillOpacity="1" d="M0,64L18.5,58.7C36.9,53,74,43,111,58.7C147.7,75,185,117,222,154.7C258.5,192,295,224,332,197.3C369.2,171,406,85,443,58.7C480,32,517,64,554,74.7C590.8,85,628,75,665,106.7C701.5,139,738,213,775,224C812.3,235,849,181,886,154.7C923.1,128,960,128,997,112C1033.8,96,1071,64,1108,90.7C1144.6,117,1182,203,1218,202.7C1255.4,203,1292,117,1329,96C1366.2,75,1403,117,1422,138.7L1440,160L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"></path></svg>
        </div>
        <div className=" tagline_div">
        <div className=" tagline"> <h1  className="text-light taglineText"> Just Relax <br/> And Unwind.</h1></div>
          <div className="" style={{width:"50%",height:'100%'}}> <img src={png} className="resize image-fluid" style={{marginTop:"-8vh",paddingTop:"3vh"}}/> </div>
      
        </div>
        <Artist src="https://bsmedia.business-standard.com/media-handler.php?mediaPath=https://bsmedia.business-standard.com/_media/bs/img/article/2017-08/27/full/1503854250-7786.jpg&width=1200"/>
        <Player/>
        

    </>
  )
}
