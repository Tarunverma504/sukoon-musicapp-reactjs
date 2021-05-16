import React,{Component,useEffect,useState} from 'react';
import {get} from "../utils/api";
import "../../node_modules/jquery/dist/jquery.min.js";
import _ from "lodash";
import "../../node_modules/bootstrap/js/src/collapse";
import "../../node_modules/bootstrap/dist/css/bootstrap.css" ;
import "../style/Playlist.css";
export default function Playlist(){
    useEffect(()=>{
        abc();
    },[])
    var  background=[{old: "#0F2027",crome:"-webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027)",firefox:"linear-gradient(to right, #2C5364, #203A43, #0F2027)"},
                         {old: "#0f0c29",crome:"-webkit-linear-gradient(to right, #0f0c29, #302b63, #24243e)",firefox:"linear-gradient(to right, #0f0c29, #302b63, #24243e)"},
                         {old: "#870000",crome:"-webkit-linear-gradient(to right, #870000, #190a05)",firefox:"linear-gradient(to right, #870000, #190a05)"},
                         {old: " #c31432",crome:"-webkit-linear-gradient(to right, #c31432, #240b36)",firefox:"linear-gradient(to right, #c31432, #240b36)"},
                         {old: "#159957",crome:"-webkit-linear-gradient(to right, #159957, #155799)",firefox:"linear-gradient(to right, #159957, #155799)"},
                         {old: "#ff0084",crome:"-webkit-linear-gradient(to right, #ff0084, #33001b)",firefox:"linear-gradient(to right, #ff0084, #33001b)"}];
        let a=Math.floor(Math.random() * background.length);
        let id=window.location.pathname;
        id=id.split("/");
        const [Id,setId]=useState(id[2]);
        const [img,setImg]=useState(`https://i.scdn.co/image/${id[3]}`);
        const [name,setName]=useState(id[4]);
        const [background_old,setbackground_old]=useState(background[a].old);
        const [background_crome,setbackground_crome]=useState(background[a].crome);
        const [background_firefox,setbackground_firefox]=useState(background[a].firefox);
        const [data,setData]=useState();
        const abc=async ()=>{
            console.log("mnc xmc");
             let getdata= await get(`https://api.spotify.com/v1/artists/${Id}/top-tracks?market=IN`);
             console.log(getdata.data.tracks[0]);
        }
        return(
            <div className="Playlist_div" style={{background:background_crome,background:background_firefox,background_crome:background_old}}>
             <div className="header_div">
                <div className="image_div">
                    <img src={`${img}`} className="artist_img"/>
                </div>
                <div className="name-div">
                    <h1>Tarun Verma</h1>
                    <p className="text-center">Total Tracks:- 10</p>
                </div>
                
                </div>
             <hr style={{background:"white",marginTop:"0px"}}/>
             <div className="list_div">
                <table className="style_table">
                    <thead>
                        <th></th>
                        <th>TITTLE</th>
                        <th className="hide">RELEASE DATE</th>
                        <th><i class="far fa-clock"></i></th>
                    </thead>
                    <tr>
                        <td style={{width:"20px"}} ><img src={`${img}`} width={"50px"} height={"45px"}  /></td>
                        <td>Tu Hi Yaar Mera</td>
                        <td className="hide">2019-12-02</td>
                        <td>5:00</td>
                    </tr>
                    <tr>
                        <td style={{width:"20px"}} ><img src={`${img}`} width={"50px"} height={"45px"} /></td>
                        <td>Tu Hi Yaar Mera</td>
                        <td className="hide">2019-12-02</td>
                        <td>5:00</td>
                    </tr>
                    <tr>
                        <td style={{width:"20px"}} ><img src={`${img}`} width={"50px"} height={"45px"} /></td>
                        <td>Tu Hi Yaar Mera</td>
                        <td className="hide">2019-12-02</td>
                        <td>5:00</td>
                    </tr>
                    <tr>
                        <td style={{width:"20px"}} ><img src={`${img}`} width={"50px"} height={"45px"} /></td>
                        <td>Tu Hi Yaar Mera</td>
                        <td className="hide">2019-12-02</td>
                        <td>5:00</td>
                    </tr>
                    <tr>
                        <td style={{width:"20px"}} ><img src={`${img}`} width={"50px"} height={"45px"} /></td>
                        <td>Tu Hi Yaar Mera</td>
                        <td className="hide">2019-12-02</td>
                        <td>5:00</td>
                    </tr>
                    <tr>
                        <td style={{width:"20px"}} ><img src={`${img}`} width={"50px"} height={"45px"} /></td>
                        <td>Tu Hi Yaar Mera</td>
                        <td className="hide">2019-12-02</td>
                        <td>5:00</td>
                    </tr>
                    <tr>
                        <td style={{width:"20px"}} ><img src={`${img}`} width={"50px"} height={"45px"} /></td>
                        <td>Tu Hi Yaar Mera</td>
                        <td className="hide">2019-12-02</td>
                        <td>5:00</td>
                    </tr>
                    <tr>
                        <td style={{width:"20px"}} ><img src={`${img}`} width={"50px"} height={"45px"} /></td>
                        <td>Tu Hi Yaar Mera</td>
                        <td className="hide">2019-12-02</td>
                        <td>5:00</td>
                    </tr>
                    <tr>
                        <td style={{width:"20px"}} ><img src={`${img}`} width={"50px"} height={"45px"} /></td>
                        <td>Tu Hi Yaar Mera</td>
                        <td className="hide">2019-12-02</td>
                        <td>5:00</td>
                    </tr>
                    <tr>
                        <td style={{width:"20px"}} ><img src={`${img}`} width={"50px"} height={"45px"} /></td>
                        <td>Tu Hi Yaar Mera</td>
                        <td className="hide">2019-12-02</td>
                        <td>5:00</td>
                    </tr>
                </table>
             </div>
            </div>   
        )
}