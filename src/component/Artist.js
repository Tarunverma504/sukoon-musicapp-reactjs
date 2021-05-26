import React,{Component,useEffect,useState} from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import "../../node_modules/jquery/dist/jquery.min.js";
import _ from "lodash";
import "../../node_modules/bootstrap/js/src/collapse";
import "../../node_modules/bootstrap/dist/css/bootstrap.css" ;
import "../style/Artist.css";
import Footer from "./footer";
import {get} from "../utils/api";
const db = require('dotenv').config();
let a=0;
let brr=[];
export default class Artist extends React.Component{
    constructor(props){
        super(props);
        this.callingApi();
        this.state=({
            arr:[],
        })
    }
    async callingApi() {
        brr=[];
        //console.log(this.props.url);
        var getdata= await get("https://api.spotify.com/v1/artists/4YRxDV8wJFPHPTeXepOstw/related-artists");  
        for (var i=0;i<this.props.number;i++)
        {
            var img_id=getdata.data.artists[i].images[2].url;
            img_id=img_id.split("/");
            brr.push(
            <Link to={`/ArtistPlaylist/${getdata.data.artists[i].id}/${img_id[4]}/${getdata.data.artists[i].name}`} className=" col  ">
                <div   key={getdata.data.artists[i].id}>
                    <img className="rounded-circle resizeimg  " src={getdata.data.artists[i].images[2].url} width={getdata.data.artists[i].images[2].width}  height={getdata.data.artists[i].images[2].height} key={getdata.data.artists[i].id}/>
                    <br/>
                    <div >
                    <p className="px-2 ml-4" style={{color:'white'}}>{getdata.data.artists[i].name}</p>
                    </div>
                </div>
            </Link>)
        }
        this.setState({arr:brr});

        } 
        render(){
            return(
                    <>
                        <div className=" container-fluid">
                            <div className="container ">
                                <Link to="/AllArtist"> <h2 style={{color:'white',textAlign:this.props.align}}>Artists</h2> </Link>   
                                <div className="row row-cols-md-4 mt-4  text-align-center ">
                                {this.state.arr}  
                                </div>
                            </div>

                        </div>
                        
                    </>
            )
        }
}