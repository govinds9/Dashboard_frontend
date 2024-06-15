import React, { useEffect, useState } from 'react'
import  './style.css'
import { createData } from './createData.js';
import LoadingSpinner from '../Components/Loading.jsx';
import { VictoryPie } from 'victory';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PieChart = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0)
  const length = 4
  
  const final = data?.final?.map((ele)=>createData(ele)) || []
  const handleLeft =()=>{
    setCurrentIndex((currentIndex+length-1)%length)
  }
  const handleRight =()=>{
    setCurrentIndex((currentIndex+1)%length)
  }






  



  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:8000/api/v1/piechart');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
         console.log(result)
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
   

    fetchData();
  }, []); 

  
  if (loading) return <div className=' h-full w-full  flex flex-row  justify-center items-center '> <LoadingSpinner/> </div>;
  if (error) return <div className=' h-full w-full  flex flex-row  justify-center items-center '>Error: {error}</div>;
  return (
    
<div className='   w-full py-20 px-10'>

  <div className='carousel-container  '>
  { final.map((item, index) => {
  return <div className='carousel-item'
  style={{transform: `translate(-${currentIndex * 100}%)`}} key={index}>
    
    <div className=' w-full h-full p-2   bg-white rounded-2xl shadow-xl'>
    <h1 className=' text-center text-2xl font-extrabold m-3'> {`${data?.field[index]} and Project Number `}</h1>
      <div className=' flex flex-wrap '>{item?.pieChartColors.map((ele,index)=>(<div key={index} className='  flex flex-row gap-1 m-2 text-2xl'> <div className=' rounded-full w-6  h-6' style={{backgroundColor:`${ele}`}}></div>{item.legend[index].name}</div>))}</div>
   <div className=' w-auto h-auto flex flex-row items-center '>
   <button className=' text-4xl' onClick={handleLeft}><FaChevronLeft /></button>
   
    <VictoryPie
    colorScale={item?.pieChartColors}
  data={item?.piedata}
  width={600}
  height={600}
  innerRadius={40}
  radius={200}
  origin={{ y: 300}}
  
  labelPlacement={({ index }) => index
    ? "parallel"
    : "vertical"
  }
  style={{
    data: {
      fillOpacity: 0.9
    },
    labels: {
      fontSize: 8,  padding: -40
    },
    
  }}
  animate={{
    duration: 500
  }} 
/>
<button className=' text-4xl' onClick={handleRight}><FaChevronRight /></button>
</div>

    </div>

    
    
    

   
    
    </div>})
  }

  </div>
  
  </div>
  )
}

export default PieChart


