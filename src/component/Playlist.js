import React,{Component,useEffect,useState} from 'react';
import {get} from "../utils/api";
import "../../node_modules/jquery/dist/jquery.min.js";
import _, { cond } from "lodash";
import "../../node_modules/bootstrap/js/src/collapse";
import "../../node_modules/bootstrap/dist/css/bootstrap.css" ;
import "../style/Playlist.css";
import List from "../component/List"
let tracks=[];
let arr=[];
export default class Playlist extends Component{
    
    constructor(props){
        super(props);
        
        let  background=[{old: "#0F2027",crome:"-webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027)",firefox:"linear-gradient(to right, #2C5364, #203A43, #0F2027)"},
                         {old: "#0f0c29",crome:"-webkit-linear-gradient(to right, #0f0c29, #302b63, #24243e)",firefox:"linear-gradient(to right, #0f0c29, #302b63, #24243e)"},
                         {old: "#870000",crome:"-webkit-linear-gradient(to right, #870000, #190a05)",firefox:"linear-gradient(to right, #870000, #190a05)"},
                         {old: " #c31432",crome:"-webkit-linear-gradient(to right, #c31432, #240b36)",firefox:"linear-gradient(to right, #c31432, #240b36)"},
                         {old: "#159957",crome:"-webkit-linear-gradient(to right, #159957, #155799)",firefox:"linear-gradient(to right, #159957, #155799)"},
                         {old: "#ff0084",crome:"-webkit-linear-gradient(to right, #ff0084, #33001b)",firefox:"linear-gradient(to right, #ff0084, #33001b)"}];
        let a=Math.floor(Math.random() * background.length);
        let id=window.location.pathname;
        id=id.split("/");
        this.state=({
            id:id[2],
            img:`https://i.scdn.co/image/${id[3]}`,
            name:decodeURI(id[4]),
            background_old:background[a].old,
            background_crome:background[a].crome,
            background_firefox:background[a].firefox,
            track_length:"0"
        })
        this.abc();
    }

    
   async abc(){
        let getdata= await get(`https://api.spotify.com/v1/artists/${this.state.id}/top-tracks?market=IN`);
        tracks=[];
        for(let i=0;i<getdata.data.tracks.length;i++){
            tracks.push(getdata.data.tracks[i]);
        }
        this.setState({track_length:tracks.length})
    }
    msToTime(duration) {
        var milliseconds = parseInt((duration % 1000) / 100),
          seconds = Math.floor((duration / 1000) % 60),
          minutes = Math.floor((duration / (1000 * 60)) % 60),
          hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
      
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
      
        return  minutes + ":" + seconds ;
      }
    name(str){
         if(str.indexOf("(From")== -1){return str}
         else{
             return (str.slice(0,str.indexOf("(From")));
         }
    }
    des(str){
        if(str.indexOf("(From")== -1){return " "}
        else{
            return (str.slice(str.indexOf("(From"),str.length));
        }
   }

   
      renderList(){
       arr=[];
       console.log(tracks[0]); //https://api.spotify.com/v1/artists/${this.state.id}/top-tracks?market=IN;
       let gettrack=  get(`https://api.spotify.com/v1/${this.state.id}/tracks/1MhHomaXgrPMBroXkpWSSa`);
       console.log(gettrack);
       for(var i=0;i<tracks.length;i++){
        let duration= this.msToTime(tracks[i].duration_ms);
        let name=this.name(tracks[i].name);
        let des=this.des(tracks[i].name);
      
           arr.push(
               <List image={tracks[i].album.images[2].url} duration={duration} name={name} des={des}/>
           )
       }
       return arr;
                
    }
    
    render(){
       
        return(
            <div className="Playlist_div" style={{background:this.state.background_crome,background:this.state.background_firefox,background_crome:this.state.background_old}}>
                <div className="header_div">
                    <div className="image_div">
                        <img src={`${this.state.img}`} className="artist_img"/>
                    </div>
                    <div className="name-div">
                        <h1>{this.state.name}</h1>
                        <p className="text-center">Total Tracks:-{this.state.track_length}</p>
                    </div>
                
                </div>
                <hr style={{background:"white",marginTop:"0px"}}/>
                <div className="list_div">
                <table className="style_table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>TITTLE</th>
                            <th className="hide">RELEASE DATE</th>
                            <th><i className="far fa-clock"></i></th>
                        </tr>
                    </thead>
                    {this.renderList()}
                </table>
                </div>
                 
            </div>   
        )
    }
}
















