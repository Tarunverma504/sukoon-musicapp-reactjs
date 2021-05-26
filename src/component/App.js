import React,{Component,useState, useEffect} from 'react';
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
import AllArtist from "./AllArtist";
import Playlist from "./Playlist";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Playlistsongs from "./playlistsongs";
import Weather from "./weather";
import Search from "./searchpage";
import "../../node_modules/jquery/dist/jquery.min.js";
import "../../node_modules/bootstrap/js/src/collapse";
import "../../node_modules/bootstrap/dist/css/bootstrap.css" ;
import "../style/App.css";

import _ from "lodash";
import Home from "./home";
const db = require('dotenv').config();
var parse = require('json-parse')
export default class App extends Component{

  

  render(){
    return(
      <BrowserRouter>
         <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/home" component={Home} />
         <Route  exact path="/AllArtist" component={AllArtist} />
         <Route exact path="/ArtistPlaylist/:id/:url/:name"  > <Playlist /> </Route>
         <Route exact path="/playlistsongs/:id/:url/:name"  > <Playlistsongs /> </Route>
         <Route exact path="/AboutUs"> <AboutUs /></Route>
         <Route exact path="/ContactUs"> <ContactUs /></Route>
         <Route exact path="/search" > <Search /></Route>
         <Route exact path="/weather" > <Weather /></Route>
        </Switch>
        

      </BrowserRouter>
      
    )
  }
}
