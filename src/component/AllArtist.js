import React from 'react';
import {get} from "../utils/api";
import Artist from "./Artist";
import Footer from "./footer";
export default class AllArtist extends React.Component{
    constructor(){
        super();
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
                <Footer />
            </>
        )
    }
}