import React, { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home.jsx'
import Sidebar from '../Components/Sidebar.jsx'
import  {Dashboard,Data,Piechart,Barchart}  from "../pages/index.js"
import Navbar from '../Components/Navbar.jsx'

const App = () => {
   const [issidebar, setissidebar] = useState(true);
  return (
    <BrowserRouter>
    <div className=' flex  flex-row  w-screen  min-h-screen'>
     {issidebar && <Sidebar className=' w-1/4 h-full'/>}
      <div className=' flex flex-col w-full h-full" '>
       <Navbar className="w-full h-16" issidebar={issidebar} setissidebar={setissidebar}/>
       <div className="flex-grow overflow-auto p-4 " style={{backgroundColor:"#F5F7FF"}}>

    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/data' element={<Data/>}/>
      <Route path='/pie' element={<Piechart/>}/>
      
      <Route path='/bar' element={<Barchart/>}/>
      
      

    </Routes>
       </div>
      </div>
    </div>
    </BrowserRouter>
    
  )
}

export default App
