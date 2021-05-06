import React,{Component,useState} from 'react';
import "../../node_modules/jquery/dist/jquery.min.js";
import "../../node_modules/bootstrap/js/src/collapse";
import "../../node_modules/bootstrap/dist/css/bootstrap.css" ;
import "../style/Player.css";
import AudioPlayer from "./AudioPlayer";
export default function Player(props){
    return(
        <>
            <div className="fixed-bottom   player_div">
            <div className="container-fluid audio_conatiner">
             <AudioPlayer /> 
            </div>
            </div>
        </>
    )
}