import React, {useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from "./header"
import Home from "./home"
import Homef from "./homef"
import Footer from "./footer"
import Film from "./film"
import Projects from "./projects"
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="">
          <div>
            <Header />
            <div style={{ minHeight: 'calc(100vh - 156px)', width: '100%' }}>
              {/* Subtracting the navbar height from 100vh ensures the content takes remaining space */}
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/phome" element={<Home />} />
                <Route path="/web" element={<Homef />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/film" element={<Film />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
