import React from 'react'
import { Link } from 'react-router'

const SlideBar = ({toggler}) => {
  return (
    <div className={`w-[40vw] h-[calc(100vh-8vh)] duration-200 text-white p-2 z-10 bg-gray-200 absolute ${toggler?"right-0":"-right-[40vw]"}`}>
        <Link to="/authlayout" className='px-3 py-1 rounded-lg bg-black text-white'>SignIn/SignUp</Link>
    </div>
  )
}

export default SlideBar