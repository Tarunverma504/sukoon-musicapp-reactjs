import React from 'react';
import {get} from "../utils/api";
import Artist from "./Artist"
export default class AllArtist extends React.Component{
    constructor(){
        super();
        var a=localStorage.getItem('params');
        a=JSON.parse(a);
        this.test();
    }
    async test() {
        var getdata= await get("https://api.spotify.com/v1/artists/4YRxDV8wJFPHPTeXepOstw/related-artists");
        console.log(getdata);        
    }
    render(){
        return(
            <>
                <Artist number={20} align={"center"}/>
            </>
        )
    }
}