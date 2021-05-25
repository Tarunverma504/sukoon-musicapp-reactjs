import React,{Component,useEffect,useState} from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import "../../node_modules/jquery/dist/jquery.min.js";
import _ from "lodash";
import List from "./List";
import "../../node_modules/bootstrap/js/src/collapse";
import "../../node_modules/bootstrap/dist/css/bootstrap.css" ;
import "../style/Artist.css";
import Footer from "./footer";
import "../style/searchpage.css";
import {get} from "../utils/api";
const db = require('dotenv').config();
let arr=[];
export default class Search_page extends React.Component{
    constructor(){
        super();
        this.state={
            music:" ",
            track:[],
            artist:[],
            playlist:[]
        }
    }



    async search(){
     const API_URL = `https://api.spotify.com/v1/search?query=${encodeURIComponent(this.state.music)}&type=track,album,playlist,artist`;
    const result = await get(API_URL);
       this.setState({track:[]});
       this.setState({artist:[]});


       //tracks
       arr=[];
       for(let i=0;i<result.data.tracks.items.length;i++){
           if((result.data.tracks.items[i].preview_url)!= null){
               arr.push(
                    result.data.tracks.items[i]
               )

           }
           if(i==6){
               break;
           }
       }
       this.setState({track:arr});

       //Artist
       arr=[];
       try{
        for(let i=0;i<result.data.artists.items.length;i++){
            if(i==6){
                break;
            }
             var img_id=result.data.artists.items[i].images[0].url;
             img_id=img_id.split("/");
             arr.push(
                 <Link to={`/ArtistPlaylist/${result.data.artists.items[i].id}/${img_id[4]}/${result.data.artists.items[i].name}`} className=" col  ">
                 <div  key={result.data.artists.items[i].id}>
                     <img className="rounded-circle resizeimg  " src={result.data.artists.items[i].images[0].url} width={150} height={150}/>
                     <br/>
                     <div >
                         <p className="px-2 ml-4" style={{color:'white'}}>{result.data.artists.items[i].name}</p>
                     </div>
                 </div>
             </Link>     
             )
        }
       }
       catch(err){
        arr=[];
       }
       this.setState({artist:arr});
       

       //playlist
       arr=[];
       try{
           for(let i=0;i<result.data.playlists.items.length;i++){
               if(i==6){break;}
               var img_id=result.data.playlists.items[i].images[0].url;
               img_id=img_id.split("/");
               arr.push(
               <Link to={`/playlistsongs/${result.data.playlists.items[i].id}/${img_id[4]}/${result.data.playlists.items[i].name}`} className=" col  ">
                   <div   key={result.data.playlists.items[i].id}>
                       <img className="rounded resizeimg  " src={result.data.playlists.items[i].images[0].url} width={150} height={150}/>
                       <br/>
                       <div >
                       <p className="px-2 ml-4" style={{color:'white'}}>{result.data.playlists.items[i].name}</p>
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
                <div className="">
                    <div className="searchbox">
                        <div className="search">
                            <input type="text" className="searchtag" placeholder="Search Music" id="find" onChange={event => this.setState({music:event.target.value})} onKeyDown={this._handleKeyDown}/> 
                            <i className="fas fa-search" style={{height:"2vh",cursor:"pointer"}} onClick={this.search.bind(this)}></i>
                            
                        </div>
                    </div>
                    {this.state.track.length>0?
                                        <table className="style_table">
                                            <thead>
                                            </thead>
                                                <List tracks={this.state.track} artist={"abc"} />
                                            </table>:" "
                    }

                </div>
                {this.state.artist.length>0?
                    <div className=" container-fluid">
                            <div className="container ">
                                <h2 style={{color:'white',textAlign:"center"}}>Artists</h2>  
                                <div className="row row-cols-md-4 mt-4  text-align-center ">
                                {this.state.artist}  
                                </div>
                            </div>
                        </div>
                
                :""}
                
                {this.state.playlist.length>0?
                    <>
                    <div className=" container-fluid">
                            <div className="container ">
                                <h2 style={{color:'white',textAlign:"center"}}>Playlists</h2>   
                                <div className="row row-cols-md-4 mt-4  text-align-center ">
                                {this.state.playlist}  
                                </div>
                            </div>
                    </div>
                    </>
                    
                :" "}
                
        </>
        )
    }
}