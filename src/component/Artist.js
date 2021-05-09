import React,{Component,useEffect,useState} from 'react';
import "../../node_modules/jquery/dist/jquery.min.js";
import _ from "lodash";
import "../../node_modules/bootstrap/js/src/collapse";
import "../../node_modules/bootstrap/dist/css/bootstrap.css" ;
import "../style/Artist.css";
import { getParamValues,setAuthHeader} from "../utils/function";
import {get} from "../utils/api";
const db = require('dotenv').config();
// var arr=[];
let a=0;
let brr=[];
export default function Artist(){
    const [arr,setArr]=useState([]);
    useEffect(()=>{
        callingApi();
    })
    async function callingApi() {
        var getdata= await get("https://api.spotify.com/v1/artists/4YRxDV8wJFPHPTeXepOstw/related-artists");   
        for (var i=0;i<12;i++)
        {
            brr.push(<div className=" col  ">
            <img className="rounded-circle resizeimg  " src={getdata.data.artists[i].images[2].url} width={getdata.data.artists[i].images[2].width}  height={getdata.data.artists[i].images[2].height}/>
            <br/>
            <div className="">
            <p className="px-2 ml-4" style={{color:'white'}}>{getdata.data.artists[i].name}</p>
            </div>
            
        </div>)
        }
        console.log("ssmn s");
        console.log(arr);
        setArr(brr);

        } 
    return(
        <>
        <div className=" container-fluid">
            <div className="container ">
                <h2 style={{color:'white'}}>Artists</h2>
                <div className="row row-cols-md-4 mt-4  text-align-center ">
                {arr}  
                </div>
            </div>
        </div>
        </>
        )
}