
import React from 'react';
import './App.css';
import Inside from  './inside'
import Upload from './upload';
import Model001page from './model001';
import Model1home from './model1home';
import Model002page from './model002';
import Model003page from './model003';
import Model004page from './model004';
import Info from './info';
import {Route, Routes} from 'react-router-dom'

function App() {

  return (
    <div className="App">

      <Routes><Route path="/inside" element={<Inside />}/></Routes>
      <Routes><Route path='/model001' element={<Model001page />}/></Routes>
      <Routes><Route path='/' element={<Model1home />}/></Routes>
      <Routes><Route path='/model002' element={<Model002page />}/></Routes>
      <Routes><Route path='/model003' element={<Model003page />}/></Routes>
      <Routes><Route path='/model004' element={<Model004page />}/></Routes>
      <Routes><Route path='/upload' element={<Upload />}/></Routes>
      <Routes><Route path='/information' element={<Info />}/></Routes>
    </div>
  );
}

export default App;
