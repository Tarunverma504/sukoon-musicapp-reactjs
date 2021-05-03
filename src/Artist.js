import React,{Component,useState} from 'react';
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/js/src/collapse";
import "../node_modules/bootstrap/dist/css/bootstrap.css" ;
import "./Artist.css";
var arr=[];
export default function Artist(props){
    for (var i=0;i<8;i++)
    {
        arr.push(<div className="col-sm-3 justify-content-between ">
        <img className="rounded-circle resizeimg" src={props.src} width={150} height={150}/>
        <br/>
        <p className="px-2 ml-4" style={{color:'white'}}>Honeypreet</p>
    </div>)
    }



    return(
        <>
        <div className=" .container-fluid">
            <div className="container ">
                <h2 style={{color:'white'}}>Artists</h2>
                <div className="row mt-4  text-align-center ">
                {arr}          
                </div>
            </div>
        </div>
        </>
        )
}