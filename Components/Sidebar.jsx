import React from 'react'
import { Link, NavLink, useLocation} from 'react-router-dom'
import { RxDashboard } from "react-icons/rx";
import { IoHomeOutline } from "react-icons/io5";
import { CiViewTable } from "react-icons/ci";
import { SiSoundcharts } from "react-icons/si";
import { AiOutlinePieChart } from "react-icons/ai";
import { IoBarChartOutline } from "react-icons/io5";
import { FaChartLine } from "react-icons/fa6";
import { FaMapMarkedAlt } from "react-icons/fa";
const Sidebar = () => {
  const location  = useLocation();
  const Bar = [{
    name: "Dashboard",
    icon:<RxDashboard/>,
    child:[
      {
        name:"Home",
        path:"/",
        icon:<IoHomeOutline />

      },
      {
        name:"Data",
        path:"/data",
        icon:<CiViewTable />

        
      }
    ]
  },
  {
    name: "Charts",
    icon:<SiSoundcharts /> ,
    child:[
      {
        name:"Barchart",
        path:"/bar",
        icon:<IoBarChartOutline />

      },
    
      {
        name:"Piechart",
        path:"/pie",
        icon:<AiOutlinePieChart />

      },
      
    ]
  }
  
]
  return (
<div className="h-screen flex flex-col font-serif text-zinc-900" style={{backgroundColor:"#FFFFFF"}}>
      <div className=" p-10">
        <h1 className="text-xl font-bold">Sidebar</h1>
      </div>

      <div className=' flex flex-col p-4 space-y-2 text-xl'>
        {
          Bar.map((item)=> (
            <div key={item.name} className=''>
            
              <h1 className=' text-black flex flex-row s  px-4 py-2 my-2 gap-4 bg-orange-300'><span >{item.icon}</span>{item.name}</h1>
            
            {
              item.child.map((ele)=>(
              <ul className=' my-1'  key={ele.name}>
                
                <NavLink className= {`py-2 px-4  rounded-lg hover:bg-blue-400  flex flex-row  gap-4 ${location.pathname ===ele.path ?"bg-blue-400":""}`} to={ele.path}><span>{ele.icon}</span><span>{ele.name} </span></NavLink>
              </ul>
              ))
            }
            
              
            </div>
          ))
        }

      </div>
      {/* <nav className="flex flex-col p-4 space-y-2">
        <a href="#" className="py-2 px-4 bg-gray-700 rounded hover:bg-gray-600">Home</a>
        <a href="#" className="py-2 px-4 bg-gray-700 rounded hover:bg-gray-600">About</a>
        <a href="#" className="py-2 px-4 bg-gray-700 rounded hover:bg-gray-600">Services</a>
        <a href="#" className="py-2 px-4 bg-gray-700 rounded hover:bg-gray-600">Contact</a>
      </nav> */}
    </div>
  )
}

export default Sidebar
