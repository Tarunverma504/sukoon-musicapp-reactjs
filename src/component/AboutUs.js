import React from "react";
import "../style/Aboutus.css";
export default class AboutUs extends React.Component{
    render(){
        return(
            <>
                <div className="aboutus" style={{position: "fixed",top: 0, left: 0, bottom: 0, right: 0}}>
                    <div className="container">
                        <h1 className="text-center heading"  > About Us </h1>  
                        <p className="text-light aboutus_text">
                        When you are "on" Sukoon, you are "in" Sukoon. Sad? Tired? Frustrated? Happy? Whatever your mood is, we are here for you! Find millions of songs, (technically from Spotify) and listen to them for free. Just log on to Sukoon.com and leave all your worries behind. We try to give you the best user experience because we know music is important in your life.<br/>
                          So, keep supporting and showing your <i className="fas fa-heart ml-3" ></i>
                        </p>
                        <br/>
                        <h3 className="text-center text-light">Feel free to Contact Us :-   <button   style={{backgroundColor:"#0575E6",marginLeft:"5px",borderRadius:"25px",width:"200px",height:"40px"}}> <a href="/ContactUs" style={{textDecoration:"none",color:"white"}}>Contact Us</a></button></h3>
                        <h1 className="last_heading text-center" style={{color:"#0575E6"}} > Happy Listening!</h1>
                    </div>
                </div>
            </>
        )
    }
}