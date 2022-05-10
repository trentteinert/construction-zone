import React, {useCallback} from "react";
import './upload.css'
import {useNavigate} from 'react-router-dom'
import img from './images/map1.jpg'
import polycamlogo from './images/polycam.png'
import examplevid from './images/examplevideo.MP4'



function Upload(){

  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate('/', {replace: true}), [navigate]);
  return(
    <div>
      <div class='row'>
        <div class='column'>
          <h3>Construction Sites</h3>
          <h9>Upload and add to the archive...</h9>
          <h10>Cick to download Polycam.</h10>
          <h11>1. find your site</h11>
          <h12>2. record your 360 photographs</h12>
          <h13>walking all around the object.</h13>
          <div className="examplevid"><video width="232" height="500" controls autoplay muted>
           <source src={examplevid} type="video/mp4"/>
          </video></div>
          <h14>3. Upload to Polycam's cloud,</h14>
          <h16>then export as a GLTF file and</h16>
          <h17>save it anywhere on your phone.</h17>
          <h18>4. Click the upload button to the</h18>
          <h19>right, fill out the date and upload your</h19>
          <h20>file. Models will be added to the archive</h20>
          <h21>along with a notification via email.</h21>
          <h22>Thank you for contributing!</h22>
          <h15>*360 photo example*</h15>
          <div className="polylogo">
            <a href="https://apps.apple.com/us/app/polycam-lidar-3d-scanner/id1532482376">
            <img src={polycamlogo} alt=''/></a>
          </div>
          <div><a href="https://formfacade.com/public/105154758715343158930/all/form/1FAIpQLSfBuQ5fCqQjdbfn2VKXIotj2QboKmNpt6evetMcCY1g69VM5Q">
            <button id='Button03'>UPLOAD</button></a>
          </div>
          <div>
            <button id='Button04' onClick={handleOnClick}>Home</button>
          </div>
        </div>
        <div class='column' stlye='background-color:#aaa;'>
          <h4><div className="map1">
          <img src={img} alt=''/>
          </div></h4>
        </div>
      </div>
    </div>
  )
}
// <a href="mainnav.html"><button onclick="enter()" class="button"><span>Enter</span></button></a>
export default Upload;