import React,{Component,useEffect,useState} from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import "../../node_modules/jquery/dist/jquery.min.js";
import _ from "lodash";
import "../../node_modules/bootstrap/js/src/collapse";
import "../../node_modules/bootstrap/dist/css/bootstrap.css" ;
import "../style/Artist.css";
import {get} from "../utils/api";
const db = require('dotenv').config();
let a=0;
let brr=[];
export default class Playlists extends React.Component{
    constructor(){
        super();
        this.callingApi();
        this.state=({
            arr:[],
        })
    }
    async callingApi() {
        brr=[];
        var getdata= await get("https://api.spotify.com/v1/browse/featured-playlists"); 
        for (var i=0;i<this.props.number;i++)
        {
            var img_id=getdata.data.playlists.items[i].images[0].url;
            img_id=img_id.split("/");
            brr.push(
            <Link to={`/playlistsongs/${getdata.data.playlists.items[i].id}/${img_id[4]}/${getdata.data.playlists.items[i].name}`} className=" col  ">
                <div   key={getdata.data.playlists.items[i].id}>
                    <img className="rounded resizeimg  " src={getdata.data.playlists.items[i].images[0].url} width={150} height={150}/>
                    <br/>
                    <div >
                    <p className="px-2 ml-4" style={{color:'white'}}>{getdata.data.playlists.items[i].name}</p>
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
                                <h2 style={{color:'white',textAlign:this.props.align}}>Playlists</h2>  
                                <div className="row row-cols-md-4 mt-4  text-align-center ">
                                {this.state.arr}  
                                </div>
                            </div>
                        </div>
                    </>
            )
        }
}