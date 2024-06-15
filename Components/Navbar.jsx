import React from 'react'
import { IoMenu } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
const Navbar = ({issidebar,setissidebar}) => {

  const handleButton = ()=>{
    setissidebar(!issidebar)
  }
  return (
    <div className='flex flex-row justify-between  bg-white shadow-xl '>
      
        <button className=' text-3xl mx-2' onClick={handleButton}><IoMenu /></button>
        
      
      <div className=' flex flex-row text-2xl justify-center gap-2 items-center p-4 '>
        <CgProfile />
        <p> profile</p>

      </div>
      
    </div>
  )
}

export default Navbar
