import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './components/Home/Home.jsx'
import Component1 from './components/Component1/Component1.jsx'


import './App.css';

const App = () => (
  <BrowserRouter>
  <nav>
    <h1>Components</h1>
    <Link to="/">Home</Link>
    <Link to="/component1">1</Link>
  </nav>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/component1" element={<Component1 />} />
    {/* <Route path="/:id" element={<div>hey</div>} /> */}
  </Routes>
</BrowserRouter>
);

export default App;
