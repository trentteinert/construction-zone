import React, {useCallback} from "react";
import './inside.css'
import {useNavigate} from 'react-router-dom'

function Inside(){

  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate('/', {replace: true}), [navigate]);
  const handleOnClick2 = useCallback(() => navigate('/model001', {replace: true}), [navigate]);
  const handleOnClick3 = useCallback(() => navigate('/model002', {replace: true}), [navigate]);
  const handleOnClick4 = useCallback(() => navigate('/model003', {replace: true}), [navigate]);
  const handleOnClick5 = useCallback(() => navigate('/model004', {replace: true}), [navigate]);
  return(
    <div>
      <p align="center"> <iframe id='Bigmap' title='map2' src="https://my.atlistmaps.com/map/e4d28ab0-e933-45c4-a670-3fbbba42913b?share=true" 
        allow="geolocation" 
        frameborder="0"
        scrolling="no" 
        allowfullscreen></iframe></p>
      <button id='Button5' onClick={handleOnClick}>
      Back
      </button>
      <button id='Button6' onClick={handleOnClick2}>
      Model View 001
      </button>
      <button id='Button7' onClick={handleOnClick3}>
      Model View 002
      </button>
      <button id='Button8' onClick={handleOnClick4}>
      Model View 003
      </button>
      <button id='Button9' onClick={handleOnClick5}>
      Model View 004
      </button>
    </div>
  )
}

// <a href="mainnav.html"><button onclick="enter()" class="button"><span>Enter</span></button></a>
export default Inside;