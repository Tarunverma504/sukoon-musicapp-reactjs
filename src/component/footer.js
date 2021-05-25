import { render } from "@testing-library/react";
import React from "react";
import "../style/Aboutus.css";

export default  class Footer extends React.Component{
    render(){
        return(
            <>

                <div style={{background:"transparent",marginTop:"50px",marginBottom:"50px"}}>
                    <div className="container m-auto " style={{width:"400px"}}>
                                <h1 className="text-center text-light">Get in Touch With</h1>
                                <div className="row" style={{fontSize:"30px"}} >
                                    <div className="col" >
                                        <a href="https://twitter.com/"><i className="fab fa-twitter" style={{color:"#0575E6"}}></i></a>
                                    </div>
                                    <div className="col" >
                                        <a href="https://www.instagram.com/"><i className="fab fa-instagram" style={{color:"#0575E6"}}></i></a>
                                    </div>
                                    <div className="col" >
                                        <a href="https://www.linkedin.com"><i className="fab fa-linkedin-in" style={{color:"#0575E6"}}></i></a>
                                    </div>
                                    <div className="col" >
                                        <a href="https://github.com/Tarunverma504/sukoon-musicapp-reactjs"><i className="fab fa-github" style={{color:"#0575E6"}}></i></a>
                                    </div>
                                </div>
                    </div>
                </div>
            </>
        )
    }  
}