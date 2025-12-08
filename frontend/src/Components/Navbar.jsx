import React, { useState } from 'react'
import { Menu } from 'lucide-react';
import SlideBar from './SlideBar';

const Navbar = ({settoggler}) => {
    
  return (
    <div className='rounded-lg relative w-full h-[8vh]  p-2 bg-black text-white'>
    <div className={`h-full flex justify-between items-center  `}>
        <h1>Todo App</h1>
        <Menu onClick={()=>settoggler((prev)=>!prev)} />

    </div>

    </div>
  )
}

export default Navbar