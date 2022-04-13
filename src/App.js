
import React from 'react';
import './App.css';
import Home from './home';
import Inside from  './inside'
import Model001page from './model001';
import {Route, Routes} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Routes><Route path="/" element={<Home />}/></Routes>
      <Routes><Route path="/inside" element={<Inside />}/></Routes>
      <Routes><Route path='/model001' element={<Model001page />}/></Routes>
    </div>
  );
}

export default App;
