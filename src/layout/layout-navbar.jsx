import React, { Children } from 'react'
import './style.css';

const LayoutNavbar = ({children}) => {
  return (
    <div className='home-layout bg-gray-100 panel fixedd font-montserrat mx-auto relative'>
        <div className='flex items-end' style={{height:"100%"}}>
            <div className='h-80'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default LayoutNavbar