import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'


//vistas
import Home from './views/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
