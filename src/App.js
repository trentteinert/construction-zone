
import React from 'react';
import './App.css';
import Home from './home';
import Inside from  './inside'
import Model001page from './model001';
import Model002page from './model002';
import Model003page from './model003';
import Model004page from './model004';
import {Route, Routes} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Routes><Route path="/" element={<Home />}/></Routes>
      <Routes><Route path="/inside" element={<Inside />}/></Routes>
      <Routes><Route path='/model001' element={<Model001page />}/></Routes>
      <Routes><Route path='/model002' element={<Model002page />}/></Routes>
      <Routes><Route path='/model003' element={<Model003page />}/></Routes>
      <Routes><Route path='/model004' element={<Model004page />}/></Routes>
    </div>
  );
}

export default App;
