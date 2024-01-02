import React from 'react';
import './App.css';

const ColorBar = ({num}) => {
  if (num === 5){
    return (
      <div className="flex">
        <div className="sbar mr-3"></div>
        <div className="sbar mr-3"></div>
        <div className="sbar mr-3"></div>
        <div className="sbar mr-3"></div>
        <div className="sbar "></div>
      </div>
    );
  }
  else if (num === 4){
    return (
      <div className="flex">
        <div className="sbar mr-3"></div>
        <div className="sbar mr-3"></div>
        <div className="sbar mr-3"></div>
        <div className="sbar mr-3"></div>
        <div className="swbar "></div>

      </div>
    );
  }
  else if (num === 3){
    return (
      <div className="flex">
        <div className="sbar mr-3"></div>
        <div className="sbar mr-3"></div>
        <div className="sbar mr-3"></div>
        <div className="swbar mr-3"></div>
        <div className="swbar "></div>

      </div>
    );
  }
  else if (num === 2){
    return (
      <div className="flex">
        <div className="sbar mr-3"></div>
        <div className="sbar mr-3"></div>
        <div className="swbar mr-3"></div>
        <div className="swbar mr-3"></div>
        <div className="swbar "></div>

      </div>
    );
  }
  else if (num === 1){
    return (
      <div className="flex">
        <div className="sbar mr-3"></div>
        <div className="swbar mr-3"></div>
        <div className="swbar mr-3"></div>
        <div className="swbar mr-3"></div>
        <div className="swbar "></div>
      </div>
    );
  }

};

export default ColorBar;