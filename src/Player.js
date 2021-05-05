import React,{Component,useState} from 'react';
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/js/src/collapse";
import "../node_modules/bootstrap/dist/css/bootstrap.css" ;
import "./Player.css";
import AudioPlayer from "react-h5-audio-player";
import 'react-h5-audio-player/lib/styles.css';
import song from "./music/summer.mp3";
export default function Player(props){
    return(
        <>
        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident iste voluptatum soluta, eaque optio cumque natus aut inventore voluptate quo eveniet possimus sit quisquam aliquam assumenda praesentium reprehenderit ex quibusdam corrupti accusantium recusandae minima! Ipsum exercitationem esse vero ipsam, itaque porro reprehenderit doloribus iure dignissimos voluptas dolore 
  blanditiis repudiandae, necessitatibus animi, quos quisquam voluptatum
   provident molestiae perspiciatis dolor odio! Officiis eveniet c
   ommodi ea fugiat blanditiis sapiente, eos deleniti modi nihil, 
   odio ex quam quod voluptatem, vel nam suscipit facilis dolorum non!
    Qui officiis et, assumenda asperiores fuga culpa iste, voluptatib
    us dolore, molestiae aliquam vel blanditiis nostrum. Ex doloribus
     est excepturi quibusdam quisquam! Ex facilis beatae iste mollitia 
     enim? Sequi voluptate obcaecati fugiat error officiis excepturi qua
     e et fugit, aut consequatur architecto esse doloribus eius ducimus i
     psam ipsum, corrupti alias in, iure praesentium quaerat minima. Incid
     unt quam illum repudiandae officiis blanditiis, dignissimos quasi labor
     um nemo, rerum quis tempore minus praesentium nulla maiores ex hic cumqu
     e vitae facere ipsam obcaecati distinctio fuga. Alias dolor quibusdam odit modi earum dolorum numquam velit ipsum necessitatibus quisquam pariatur aut vero saepe nemo voluptate doloremque, quas molestiae veniam optio. Aliquid quidem perspiciatis dolor, earum quibusdam placeat, facere ut ducimus iusto nisi asperiores rem explicabo amet, iure aliquam sunt? Molestias maiores placeat dolorem possimus eum veniam aut doloremque non distinctio, sit necessitatibus voluptate accusamus expedita numquam autem consectetur neque deserunt magni ducimus eveniet vero! Veritatis blanditiis beatae a minus vel, numquam nemo atque est sit, explicabo quaerat eum quae id nisi earum dignissimos eaque? Exercitationem dolore, nam sunt esse voluptates accusantium harum impedit ullam! Magnam, dolore amet qui ipsa, eius iusto doloremque tenetur eos reprehenderit expedita modi consequuntur deserunt sunt consectetur commodi sequi perspiciatis numquam incidunt, nam cum quas? Quos earum excepturi quidem quibusdam molestias optio, numquam obcaecati, cumque sequi accusamus aperiam fugit officia? Dicta ab atque quos dolores corrupti assumenda dolorum consequatur voluptate numquam voluptatibus tenetur laudantium non nesciunt amet velit nulla neque quae distinctio minus debitis, omnis eius doloribus hic ratione? Nam unde quasi dolores impedit repellendus fugiat maxime praesentium recusandae ea, expedita ab consectetur optio laudantium quos nostrum sed architecto facilis tenetur at quia perferendis. In at magni voluptates aliquam quisquam dolorum, sed asperiores tatis accusamus eveniet cupiditate, blanditiis modi officiis! Saepe corporis si</p>
     <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident iste voluptatum soluta, eaque optio cumque natus aut inventore voluptate quo eveniet possimus sit quisquam aliquam assumenda praesentium reprehenderit ex quibusdam corrupti accusantium recusandae minima! Ipsum exercitationem esse vero ipsam, itaque porro reprehenderit doloribus iure dignissimos voluptas dolore 
  blanditiis repudiandae, necessitatibus animi, quos quisquam voluptatum
   provident molestiae perspiciatis dolor odio! Officiis eveniet c
   ommodi ea fugiat blanditiis sapiente, eos deleniti modi nihil, 
   odio ex quam quod voluptatem, vel nam suscipit facilis dolorum non!
    Qui officiis et, assumenda asperiores fuga culpa iste, voluptatib
    us dolore, molestiae aliquam vel blanditiis nostrum. Ex doloribus
     est excepturi quibusdam quisquam! Ex facilis beatae iste mollitia 
     enim? Sequi voluptate obcaecati fugiat error officiis excepturi qua
     e et fugit, aut consequatur architecto esse doloribus eius ducimus i
     psam ipsum, corrupti alias in, iure praesentium quaerat minima. Incid
     unt quam illum repudiandae officiis blanditiis, dignissimos quasi labor
     um nemo, rerum quis tempore minus praesentium nulla maiores ex hic cumqu
     e vitae facere ipsam obcaecati distinctio fuga. Alias dolor quibusdam odit modi earum dolorum numquam velit ipsum necessitatibus quisquam pariatur aut vero saepe nemo voluptate doloremque, quas molestiae veniam optio. Aliquid quidem perspiciatis dolor, earum quibusdam placeat, facere ut ducimus iusto nisi asperiores rem explicabo amet, iure aliquam sunt? Molestias maiores placeat dolorem possimus eum veniam aut doloremque non distinctio, sit necessitatibus voluptate accusamus expedita numquam autem consectetur neque deserunt magni ducimus eveniet vero! Veritatis blanditiis beatae a minus vel, numquam nemo atque est sit, explicabo quaerat eum quae id nisi earum dignissimos eaque? Exercitationem dolore, nam sunt esse voluptates accusantium harum impedit ullam! Magnam, dolore amet qui ipsa, eius iusto doloremque tenetur eos reprehenderit expedita modi consequuntur deserunt sunt consectetur commodi sequi perspiciatis numquam incidunt, nam cum quas? Quos earum excepturi quidem quibusdam molestias optio, numquam obcaecati, cumque sequi accusamus aperiam fugit officia? Dicta ab atque quos dolores corrupti assumenda dolorum consequatur voluptate numquam voluptatibus tenetur laudantium non nesciunt amet velit nulla neque quae distinctio minus debitis, omnis eius doloribus hic ratione? Nam unde quasi dolores impedit repellendus fugiat maxime praesentium recusandae ea, expedita ab consectetur optio laudantium quos nostrum sed architecto facilis tenetur at quia perferendis. In at magni voluptates aliquam quisquam dolorum, sed asperiores tatis accusamus eveniet cupiditate, blanditiis modi officiis! Saepe corporis si</p>
     <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident iste voluptatum soluta, eaque optio cumque natus aut inventore voluptate quo eveniet possimus sit quisquam aliquam assumenda praesentium reprehenderit ex quibusdam corrupti accusantium recusandae minima! Ipsum exercitationem esse vero ipsam, itaque porro reprehenderit doloribus iure dignissimos voluptas dolore 
  blanditiis repudiandae, necessitatibus animi, quos quisquam voluptatum
   provident molestiae perspiciatis dolor odio! Officiis eveniet c
   ommodi ea fugiat blanditiis sapiente, eos deleniti modi nihil, 
   odio ex quam quod voluptatem, vel nam suscipit facilis dolorum non!
    Qui officiis et, assumenda asperiores fuga culpa iste, voluptatib
    us dolore, molestiae aliquam vel blanditiis nostrum. Ex doloribus
     est excepturi quibusdam quisquam! Ex facilis beatae iste mollitia 
     enim? Sequi voluptate obcaecati fugiat error officiis excepturi qua
     e et fugit, aut consequatur architecto esse doloribus eius ducimus i
     psam ipsum, corrupti alias in, iure praesentium quaerat minima. Incid
     unt quam illum repudiandae officiis blanditiis, dignissimos quasi labor
     um nemo, rerum quis tempore minus praesentium nulla maiores ex hic cumqu
     e vitae facere ipsam obcaecati distinctio fuga. Alias dolor quibusdam odit modi earum dolorum numquam velit ipsum necessitatibus quisquam pariatur aut vero saepe nemo voluptate doloremque, quas molestiae veniam optio. Aliquid quidem perspiciatis dolor, earum quibusdam placeat, facere ut ducimus iusto nisi asperiores rem explicabo amet, iure aliquam sunt? Molestias maiores placeat dolorem possimus eum veniam aut doloremque non distinctio, sit necessitatibus voluptate accusamus expedita numquam autem consectetur neque deserunt magni ducimus eveniet vero! Veritatis blanditiis beatae a minus vel, numquam nemo atque est sit, explicabo quaerat eum quae id nisi earum dignissimos eaque? Exercitationem dolore, nam sunt esse voluptates accusantium harum impedit ullam! Magnam, dolore amet qui ipsa, eius iusto doloremque tenetur eos reprehenderit expedita modi consequuntur deserunt sunt consectetur commodi sequi perspiciatis numquam incidunt, nam cum quas? Quos earum excepturi quidem quibusdam molestias optio, numquam obcaecati, cumque sequi accusamus aperiam fugit officia? Dicta ab atque quos dolores corrupti assumenda dolorum consequatur voluptate numquam voluptatibus tenetur laudantium non nesciunt amet velit nulla neque quae distinctio minus debitis, omnis eius doloribus hic ratione? Nam unde quasi dolores impedit repellendus fugiat maxime praesentium recusandae ea, expedita ab consectetur optio laudantium quos nostrum sed architecto facilis tenetur at quia perferendis. In at magni voluptates aliquam quisquam dolorum, sed asperiores tatis accusamus eveniet cupiditate, blanditiis modi officiis! Saepe corporis si</p>
     <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident iste voluptatum soluta, eaque optio cumque natus aut inventore voluptate quo eveniet possimus sit quisquam aliquam assumenda praesentium reprehenderit ex quibusdam corrupti accusantium recusandae minima! Ipsum exercitationem esse vero ipsam, itaque porro reprehenderit doloribus iure dignissimos voluptas dolore 
  blanditiis repudiandae, necessitatibus animi, quos quisquam voluptatum
   provident molestiae perspiciatis dolor odio! Officiis eveniet c
   ommodi ea fugiat blanditiis sapiente, eos deleniti modi nihil, 
   odio ex quam quod voluptatem, vel nam suscipit facilis dolorum non!
    Qui officiis et, assumenda asperiores fuga culpa iste, voluptatib
    us dolore, molestiae aliquam vel blanditiis nostrum. Ex doloribus
     est excepturi quibusdam quisquam! Ex facilis beatae iste mollitia 
     enim? Sequi voluptate obcaecati fugiat error officiis excepturi qua
     e et fugit, aut consequatur architecto esse doloribus eius ducimus i
     psam ipsum, corrupti alias in, iure praesentium quaerat minima. Incid
     unt quam illum repudiandae officiis blanditiis, dignissimos quasi labor
     um nemo, rerum quis tempore minus praesentium nulla maiores ex hic cumqu
     e vitae facere ipsam obcaecati distinctio fuga. Alias dolor quibusdam odit modi earum dolorum numquam velit ipsum necessitatibus quisquam pariatur aut vero saepe nemo voluptate doloremque, quas molestiae veniam optio. Aliquid quidem perspiciatis dolor, earum quibusdam placeat, facere ut ducimus iusto nisi asperiores rem explicabo amet, iure aliquam sunt? Molestias maiores placeat dolorem possimus eum veniam aut doloremque non distinctio, sit necessitatibus voluptate accusamus expedita numquam autem consectetur neque deserunt magni ducimus eveniet vero! Veritatis blanditiis beatae a minus vel, numquam nemo atque est sit, explicabo quaerat eum quae id nisi earum dignissimos eaque? Exercitationem dolore, nam sunt esse voluptates accusantium harum impedit ullam! Magnam, dolore amet qui ipsa, eius iusto doloremque tenetur eos reprehenderit expedita modi consequuntur deserunt sunt consectetur commodi sequi perspiciatis numquam incidunt, nam cum quas? Quos earum excepturi quidem quibusdam molestias optio, numquam obcaecati, cumque sequi accusamus aperiam fugit officia? Dicta ab atque quos dolores corrupti assumenda dolorum consequatur voluptate numquam voluptatibus tenetur laudantium non nesciunt amet velit nulla neque quae distinctio minus debitis, omnis eius doloribus hic ratione? Nam unde quasi dolores impedit repellendus fugiat maxime praesentium recusandae ea, expedita ab consectetur optio laudantium quos nostrum sed architecto facilis tenetur at quia perferendis. In at magni voluptates aliquam quisquam dolorum, sed asperiores tatis accusamus eveniet cupiditate, blanditiis modi officiis! Saepe corporis si</p>
     <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident iste voluptatum soluta, eaque optio cumque natus aut inventore voluptate quo eveniet possimus sit quisquam aliquam assumenda praesentium reprehenderit ex quibusdam corrupti accusantium recusandae minima! Ipsum exercitationem esse vero ipsam, itaque porro reprehenderit doloribus iure dignissimos voluptas dolore 
  blanditiis repudiandae, necessitatibus animi, quos quisquam voluptatum
   provident molestiae perspiciatis dolor odio! Officiis eveniet c
   ommodi ea fugiat blanditiis sapiente, eos deleniti modi nihil, 
   odio ex quam quod voluptatem, vel nam suscipit facilis dolorum non!
    Qui officiis et, assumenda asperiores fuga culpa iste, voluptatib
    us dolore, molestiae aliquam vel blanditiis nostrum. Ex doloribus
     est excepturi quibusdam quisquam! Ex facilis beatae iste mollitia 
     enim? Sequi voluptate obcaecati fugiat error officiis excepturi qua
     e et fugit, aut consequatur architecto esse doloribus eius ducimus i
     psam ipsum, corrupti alias in, iure praesentium quaerat minima. Incid
     unt quam illum repudiandae officiis blanditiis, dignissimos quasi labor
     um nemo, rerum quis tempore minus praesentium nulla maiores ex hic cumqu
     e vitae facere ipsam obcaecati distinctio fuga. Alias dolor quibusdam odit modi earum dolorum numquam velit ipsum necessitatibus quisquam pariatur aut vero saepe nemo voluptate doloremque, quas molestiae veniam optio. Aliquid quidem perspiciatis dolor, earum quibusdam placeat, facere ut ducimus iusto nisi asperiores rem explicabo amet, iure aliquam sunt? Molestias maiores placeat dolorem possimus eum veniam aut doloremque non distinctio, sit necessitatibus voluptate accusamus expedita numquam autem consectetur neque deserunt magni ducimus eveniet vero! Veritatis blanditiis beatae a minus vel, numquam nemo atque est sit, explicabo quaerat eum quae id nisi earum dignissimos eaque? Exercitationem dolore, nam sunt esse voluptates accusantium harum impedit ullam! Magnam, dolore amet qui ipsa, eius iusto doloremque tenetur eos reprehenderit expedita modi consequuntur deserunt sunt consectetur commodi sequi perspiciatis numquam incidunt, nam cum quas? Quos earum excepturi quidem quibusdam molestias optio, numquam obcaecati, cumque sequi accusamus aperiam fugit officia? Dicta ab atque quos dolores corrupti assumenda dolorum consequatur voluptate numquam voluptatibus tenetur laudantium non nesciunt amet velit nulla neque quae distinctio minus debitis, omnis eius doloribus hic ratione? Nam unde quasi dolores impedit repellendus fugiat maxime praesentium recusandae ea, expedita ab consectetur optio laudantium quos nostrum sed architecto facilis tenetur at quia perferendis. In at magni voluptates aliquam quisquam dolorum, sed asperiores tatis accusamus eveniet cupiditate, blanditiis modi officiis! Saepe corporis si</p>

            <div className="fixed-bottom  player_div">
            <div className="container">
            <AudioPlayer
    autoPlay
    src={song}
    onPlay={e => console.log("onPlay")}
    // other props here
  />
            </div>
            </div>
        </>
    )
}