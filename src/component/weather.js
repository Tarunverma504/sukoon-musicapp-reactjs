import React,{Component,useEffect,useState} from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import "../../node_modules/jquery/dist/jquery.min.js";
import _ from "lodash";
import List from "./List";
import "../../node_modules/bootstrap/js/src/collapse";
import "../../node_modules/bootstrap/dist/css/bootstrap.css" ;
import "../style/Artist.css";
import "../style/searchpage.css";
import {get} from "../utils/api";
const db = require('dotenv').config();
let arr=[];
export default class Search_page extends React.Component{

    constructor(){
        super();
        this.state={
            city:" ",
            weather:" ",
            playlist:[]
        }
    }
    async search(city){
        let a=await fetch(`${process.env.REACT_APP_BASE}weather?q=${this.state.city},&units=metric&APPID=${process.env.REACT_APP_KEY}`).then((data)=>{return data.json()}).then((data)=>{
            let a=" ";
            if(data.weather[0].main=="Clear"){
                a="Sunny";
            }
            else if(data.weather[0].main=="Clouds"){
                a="Monsoon";
            }
            else if(data.weather[0].main=="Rain"){
                a="Rainy";
            }
            else{
                a=data.weather[0].main
            }
            this.setState({weather:a});
            }).catch((err)=>{console.log(err)});
            this.getList();
    }
    
    async getList(){
        const API_URL = `https://api.spotify.com/v1/search?query=${encodeURIComponent(this.state.weather)}&type=playlist`;
        const result = await get(API_URL);
       arr=[];
       try{
           for(let i=0;i<result.data.playlists.items.length;i++){
               var img_id=result.data.playlists.items[i].images[0].url;
               img_id=img_id.split("/");
               arr.push(
               <Link to={`/playlistsongs/${result.data.playlists.items[i].id}/${img_id[4]}/${result.data.playlists.items[i].name}`} className=" col  ">
                   <div   key={result.data.playlists.items[i].id}>
                       <img className="rounded resizeimg  " src={result.data.playlists.items[i].images[0].url} width={150} height={150}/>
                       <br/>
                       <div >
                       <p className="px-2 ml-4" style={{color:'white'}}>{result.data.playlists.items[i].name.length<26?result.data.playlists.items[i].name:(result.data.playlists.items[i].name).substring(0,24)+"...."}</p>
                       </div>
                   </div>
               </Link>)
           }

       }
       catch(err){
           arr=[]
       }
       this.setState({playlist:arr});

    }


    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.search(this);
        }
      }
    render(){
        return(
            <>
                <div className="searchbox">
                    <div className="search">
                        <input type="text" className="searchtag" placeholder="Enter Your City" id="find" onChange={event => this.setState({city:event.target.value})} onKeyDown={this._handleKeyDown}/> 
                        <i className="fas fa-search" style={{height:"2vh",cursor:"pointer"}} onClick={this.search.bind(this)}></i>
                        
                    </div>
                </div>
                {this.state.weather!=" "?<h1 style={{textAlign:"center",color:"white"}}>Weather: {this.state.weather}</h1>:" "}
                 {this.state.playlist.length>0?
                    <div className=" container-fluid">
                            <div className="container ">  
                                <div className="row row-cols-md-4 mt-4  text-align-center ">
                                 {this.state.playlist}   
                                </div>
                            </div>
                    </div>
                    :" "}
            </>
        )
    }
}