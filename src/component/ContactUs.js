import React from "react";
import "../style/contactus.css";
export default class ContactUs extends React.Component{
    render(){
        return(
            <>
                <section className="contact pt-100 pb-100" id="contact">
                    <div className="container">
                        <div className="row">
                        <div className="col-xl-6 mx-auto text-center">
                            <div className="section-title mb-100">
                                <h4>Contact Us</h4>
                            </div>
                        </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-md-8">
                                <form action="#" className="contact-form">
                                    <div className="row">
                                    <div className="col-xl-6">
                                        <input className="inputborder" type="text" placeholder="name" style={{color:"white"}} />
                                    </div>
                                    <div className="col-xl-6">
                                        <input className="inputborder" type="text" placeholder="email" />
                                    </div>
                                    <div className="col-xl-6">
                                        <input className="inputborder" type="text" placeholder="subject" />
                                    </div>
                                    <div className="col-xl-6">
                                        <input type="text" placeholder="telephone" className="inputborder" />
                                    </div>
                                    <div className="col-xl-12">
                                        <textarea placeholder="message" cols="30" rows="10"></textarea>
                                        <input type="submit" value="send message" className="inputborder" />
                                    </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-4">
                                <div className="single-contact">
                                    <i className="fa fa-map-marker"></i>
                                    <h5>Address</h5>
                                    <p>#661 Sector-35d, Chandigarh, India </p>
                                </div>
                                <div className="single-contact">
                                    <i className="fa fa-phone"></i>
                                    <h5>Phone</h5>
                                    <p>(+1) 517 397 7100</p>
                                </div>
                                <div className="single-contact">
                                    <i className="fa fa-envelope"></i>
                                    <h5>Email</h5>
                                    <p>sukoon@personal.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div className="container m-auto" style={{width:"400px"}}>
                        <h1 className="text-center">Get in Touch With</h1>
                        <div className="row" style={{fontSize:"30px"}} >
                            <div className="col" >
                                <a href="https://twitter.com/"><i className="fab fa-twitter" style={{color:"#FF7200"}}></i></a>
                            </div>
                            <div className="col" >
                                <a href="https://www.instagram.com/"><i className="fab fa-instagram" style={{color:"#FF7200"}}></i></a>
                            </div>
                            <div className="col" >
                                <a href="https://www.linkedin.com"><i className="fab fa-linkedin-in" style={{color:"#FF7200"}}></i></a>
                            </div>
                            <div className="col" >
                                <a href="https://github.com/"><i className="fab fa-github" style={{color:"#FF7200"}}></i></a>
                            </div>
                        </div>
                        
                        
                        
                        


                    </div>
                </section>
                
            </>
        )
    }
}