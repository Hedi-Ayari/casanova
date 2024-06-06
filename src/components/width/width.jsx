import React from "react";


export default function Width({ children, width, className = "",onclick=()=>{} }) {

  
    return (
      <div  style={{width:width,position:"relative"}} className={className} onClick={onclick}>
        {children}
      </div>
    );
  }