import React,{Component,useEffect,useState,useRef} from 'react';
import "../../node_modules/jquery/dist/jquery.min.js";
import "../../node_modules/bootstrap/js/src/collapse";
import "../../node_modules/bootstrap/dist/css/bootstrap.css" ;
import song1 from "../music/hey.mp3";
import song2 from "../music/summer.mp3";
import song3 from "../music/ukulele.mp3";
import "../style/AudioPlayer.css";
export default function AudioPlayer(){

    

    const [statevolum, setStateVolum]=useState(1);
    const [dur,setDur] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const fmtMSS = (s) => { return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + ~~(s) }
    const [PlayPause, setPlayPause] = useState('fas fa-play-circle');
    const [song,setSong] = useState("https://open.spotify.com/track/57jOEZtoLQK4zF2x55bdkp");
    const audioPlayer = useRef()
    const handleVolume =(q)=>{
        setStateVolum(q);
        audioPlayer.current.volume=q;
    } 

    const toggleAudio =()=>{
        audioPlayer.current.paused ? toggleFunction(true) : toggleFunction(false);
    }

    const toggleFunction =(bol)=>{
        if(bol == true){
            setPlayPause('far fa-pause-circle');
            audioPlayer.current.play();
        }
        else{
            setPlayPause('fas fa-play-circle');
            audioPlayer.current.pause();
            
        }
    }

    const prevsong= async()=>{
        
         await setSong(song1);
        toggleFunction(true);


    }

    const nextsong=async ()=>
    {
        setSong(song3);
        if(audioPlayer.current){
            await audioPlayer.current.pause();
            await audioPlayer.current.load();
            await audioPlayer.current.play();
            toggleFunction(true);
        }
        
        
         
    }

    const handleProgress = (e) => {
        let compute = (e.target.value * dur) / 100;
        setCurrentTime(compute);
        audioPlayer.current.currentTime = compute
      }



    return(
        <>
        <div className=" conatiner-fluid  audio-controls">
            
             <audio onTimeUpdate={(e)=>setCurrentTime(e.target.currentTime)}  /* ontimeupdate event occurs when the playing position of an audio/video has changed */
                    onCanPlay={(e)=> setDur(e.target.duration)} /*The oncanplay event occurs when the browser can start playing the specified audio/video (when it has buffered enough to begin)*/
                 /* onEnded={handleEnd}   The onended event occurs when the audio/video has reached the end */
                   preload='true' /* The preload attribute allows the author to provide a hint to the browser about what he/she thinks will lead to the best user experience */
                   src={song}
                   ref={audioPlayer} />
            <div className="title_div change-color">
                <marquee ><b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad repudiandae esse, debitis tempora et enim repellat mollitia accusantium unde voluptate.</b></marquee>
                <p className="text-center">Lorem ipsum </p>
            </div>

            <div className="outer-control change-color">
                <div className="progressb ">
                        <span className="currentT" > {fmtMSS(currentTime)} </span>
                        <input onChange={handleProgress} value={dur ? (currentTime * 100) / dur : 0} type="range" name="progresBar" id="prgbar" style={{width:'100%'}}  />
                        <span className="totalT ">{fmtMSS(dur)}</span>
                        <br/>        
                </div>
                <div className="controls_div change-color">
                    <span className="prev" onClick={prevsong}  style={{fontSize:'30px'}}><i class="fas fa-step-backward"></i></span>
                    <span className="play" onClick={() => { toggleAudio(); }} style={{fontSize:'30px'}} ><i className={PlayPause}></i></span>
                    <span className="next" onClick={()=>{nextsong(); nextsong();}} style={{fontSize:'30px'}} ><i className="fas fa-step-forward"></i></span>
                </div>
            </div>




            
            <div className="vlme ">
                <span className="volum change-color">{Math.round(statevolum*100)==0? <i class="fas fa-volume-mute"></i> :<i class="fas fa-volume-up"></i>} </span>
                <input value={Math.round(statevolum*100)} type="range" name="volBar"  id="volBar" onChange={(e) => handleVolume(e.target.value /100)} />
             </div>
            
        </div>











        
        </>
    );
}