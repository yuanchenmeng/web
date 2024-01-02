import React from "react";
import "./App.css"
import {Link, useNavigate} from 'react-router-dom';

function Header() {

  const navigate = useNavigate();

  return (
    <div className="bg-black pt-2 w-full flex" style={{height: '76px',}}>
      <div className="text-white headersig"> Yuanchen dev Website </div>

      <nav className="ml-auto right-2">
        <ul className="text-white flex header-l-dis">
          <li className="text-xl header-padding py-5 px-10"> <Link to="/home">Home</Link></li>
          <li className="text-xl header-padding py-5 px-10"> <Link to="/projects">Projects</Link></li>
          <li className="text-xl header-padding py-5 px-10 text-black"> <Link to="/film">Film</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;