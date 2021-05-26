import React from "react";
import Player from "./Player";
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button"; //Add this line Here

let arr=[];
let songs=[];

export default class List extends React.Component{
    constructor(props){
        super(props);
        this.state={
            show:false,
            index:"",
        }
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
    handleClick(index){
        this.setState({show:true});
        this.setState({index:index});
    }
    renderList(){
        try{
            arr=[];
            songs=[];
            for(var i=0;i<this.props.tracks.length;i++){
                if(this.props.tracks[i].preview_url!= null){
                    songs.push({url:this.props.tracks[i].preview_url,artist:this.props.artist,track:this.name(this.props.tracks[i].name)});
                    arr.push(
                        <tr onClick={this.handleClick.bind(this,i)}>
                            <td style={{width:"20px"}} ><img src={this.props.tracks[i].album.images[2].url==null ? "http://www.theexplorermag.com/wp-content/uploads/2013/09/cd_music.png":this.props.tracks[i].album.images[2].url}  width={"55px"} height={"50px"} style={{border:'2px solid black',borderRadius:"2px"}} /></td>
                            <td> {this.name(this.props.tracks[i].name)}<br/> <p>{this.des(this.props.tracks[i].name)}</p></td>
                            <td className="hide">{this.props.tracks[i].album.release_date}</td>
                            <td>{this.msToTime(this.props.tracks[i].duration_ms)} </td> 
                        </tr>
                    )
                }
            }
            
        }
        catch(err){
            arr.push(
                <tr onClick={this.handleClick.bind(this,i)}>
                    <td style={{width:"20px"}} ><img src={"http://www.theexplorermag.com/wp-content/uploads/2013/09/cd_music.png"}  width={"55px"} height={"50px"} style={{border:'2px solid black',borderRadius:"2px"}} /></td>
                    <td> {this.name(this.props.tracks[i].name)}<br/> <p>{this.des(this.props.tracks[i].name)}</p></td>
                    <td className="hide">{this.props.tracks[i].album.release_date}</td>
                    <td>{this.msToTime(this.props.tracks[i].duration_ms)} </td> 
                </tr>
            )
        }
        return arr;
    }

    render(){
        return(
                <> 
                    <tbody style={{color:"white"}}>
                        {this.renderList()}
                    </tbody>
                    <ScrollUpButton />

                   {this.state.show==true?<Player index={this.state.index}  tracks={songs}/>:" "}
                </>
        )
    }
}