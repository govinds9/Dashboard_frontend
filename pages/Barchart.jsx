import React, { useEffect, useState } from 'react'

import { VictoryAxis, VictoryBar, VictoryChart, VictoryLine, VictoryTheme } from 'victory'
import LoadingSpinner from '../Components/Loading.jsx';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "./style.css"
const Barchart = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0)
  const length = 4
  const final = data?.final?.map((ele)=>{
    return {
      bardata:ele?.map((item)=>{
        return {
          x:item.field,
          y:item.count
        }
      }).filter((ele)=>ele.y>5)
    }
  }) || []
  

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
        const response = await fetch('http://localhost:8000/api/v1/barchart');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        
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
         
          <div className=' w-auto h-auto flex flex-row items-center '>
          <button className=' text-4xl' onClick={handleLeft}><FaChevronLeft /></button>

          <VictoryChart
    width={1800}
    height={1000}
    
  theme={VictoryTheme.material}
  domainPadding={40}
>
<VictoryAxis
          label={`${data?.field[index]}`}
          style={{
            axisLabel: { padding: 30, fontSize:15, fontWeight:3},
            tickLabels: { fontSize:15, padding: 5, fontWeight:3 }
          }}
        />
        <VictoryAxis
          dependentAxis
          label="Total Number of project started"
          style={{
            axisLabel: { padding: 30, fontSize:15 ,fontWeight:3},
            tickLabels: { fontSize: 15, padding: 5,fontWeight:3 }
          }}
        />

  <VictoryBar
    style={{ data: { fill: "#000000" },labels:{fontSize:40} }
    
  }
    data={item?.bardata}
    labels={({ datum }) =>`${datum.y}`}
    />
</VictoryChart>



          <button className=' text-4xl' onClick={handleRight}><FaChevronRight /></button>
</div>
          </div>
          </div>
      })}
          </div>
          </div>
  )
}

export default Barchart
