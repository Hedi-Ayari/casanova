import NavBar from 'components/NavBar'
import React from 'react'

const LayoutHome = ({children}) => {
  return (
    
    <div className="flex items-center" style={{height:"95%" }}>
    <div className={`h-[100%] flex items-center justify-center`} style={{width:"10vw",height:"100%",position:"relative",borderTop: "1px black solid",borderBottom: "1px black solid"}} >
      <p style={{writingMode: "vertical-lr",textAlign:"center"}}>Nous créons. Vous célébrez</p>
    </div>
  
    <div className="w-[92%]" style={{  border: "1px black solid",width:"90vw",height:"100%" }}  >
        {children}
    </div>
    </div>
  )
}

export default LayoutHome