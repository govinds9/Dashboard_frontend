import React, { useEffect, useState } from 'react'
import LoadingSpinner from '../Components/Loading.jsx';
import Card from '../Components/Card.jsx';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryContainer, VictoryLegend, VictoryLine, VictoryPie, VictoryScatter, VictoryTheme } from 'victory';
// import Line from '../Components/Line.Jsx';



const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const cardData = [
    {
      name:"Countries",
      color:"#248AFD",
      total:data?.totalCountries || 0,
    },
    {
      name:"Regions",
      color:"#e89696",
      total:data?.totalRegions || 0,
    },
    {
      name:"Sectors",
      color:"#5E50F9",
      total:data?.totalSectors || 0,
    },
    {
      name:"Topics",
      color:"#4B49AC",
      total:data?.totalTopics || 0,
    }

  ]

  const LineData = [
    {
      id:"Likelihood",
      color:"hsl(166, 70%, 50%)",
      data:data?.likelihood?.map(item => ({
        x: item.field,
        y: item.count
      }))||[]
    },
    {
      id:"Relevance",
      color:"hsl(153, 70%, 50%)",
      data:data?.relevance?.map(item => ({
        x: item.field,
        y: item.count
      }))||[]
    }

  ]

  const piedata = data?.region.map((ele)=>({
    x:ele.field,
    y:ele.count,
    label:ele.count
  })).filter((ele)=>ele.y>20) || []

  const pieChartColors = [
   "tomato", "orange", "gold", "cyan", "navy",
    "#ffc107", // Amber
    "#03a9f4"  // Light Blue
  ];
 const legend= piedata.map((ele)=>({name:ele.x}))
 const bardata = data?.start_year.map((ele)=>({
  x:ele.field,
  y:ele.count,
 }))


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://dashboard-backend-d5x7.onrender.com/api/v1/dashboard');
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
    <div className=' min-h-full w-full  flex flex-col py-20 px-10 '>
      
      <div className=' w-full flex flex-row  items-center gap-8 mb-4'>


      {cardData?.map((ele)=>(
        <Card key={ele.name} data={ele} />
        ))}
    </div>
      {/* <Line LineData ={LineData}/> */}
      <div className=' flex flex-row  gap-20 items-center  h-screen '>
      <div className=' w-2/5 h-3/4 p-3 bg-white rounded-2xl shadow-xl '>
        
 <VictoryChart
  theme={VictoryTheme.material}
  
  animate={{duration:500}}
>
<VictoryAxis
          label="Likelihood , Relevance "
          style={{
            axisLabel: { padding: 30 },
            tickLabels: { fontSize: 8, padding: 5 }
          }}
        />
        <VictoryAxis
          dependentAxis
          label="Total Number"
          style={{
            axisLabel: { padding: 40 },
            tickLabels: { fontSize: 8, padding: 5 }
          }}
        />
<VictoryLegend x={200} y={50}
  orientation="vertical"
  height={125}
  width={200}
  style={{ border: { stroke: "black" } ,data: {fontSize:8 },}}
  data={[
    { name: `${LineData[0].id}`, symbol: { fill: "#c43a31"  }},
    { name: `${LineData[1].id}`, symbol: { fill: "#000000"  }}
   
  ]}
/>
  <VictoryScatter  data={LineData[0].data}
  style={{ data: { fill: "#c43a31" } }}
  />
  <VictoryScatter  data={LineData[1].data}
  style={{ data: { fill: "#000000" } }}
  />
  <VictoryLine
labels={({ datum }) => datum.y}
    style={{
      data: { stroke: "#c43a31" },
      parent: { border: "1px solid #ccc"},
      labels:{fontSize: 7,
        fill:"#c43a31",

        
      }
    }}
    data={LineData[0].data}
  />
    <VictoryLine
labels={({ datum }) => datum.y}
style={{
  data: { stroke: "#000000" },
  parent: { border: "1px solid #ccc"},
  labels:{fontSize: 7,
    fill:"#000000"
  }
}}
data={LineData[1].data}
/>
</VictoryChart>

    </div>

   {/* pie chart  */}


    <div className=' w-2/5  h-3/4 p-2   bg-white rounded-2xl shadow-xl'>
    <h1 className=' text-center text-xl'> Regions and Project Number</h1>
      <div className=' flex flex-wrap '>{pieChartColors.map((ele,index)=>(<div key={index} className='  flex flex-row gap-1 m-2'> <div className=' rounded-full w-4  h-4' style={{backgroundColor:`${ele}`}}></div>{legend[index].name}</div>))}</div>
    <VictoryPie
    colorScale={pieChartColors}
  data={piedata}
  width={400}
  height={400}
  innerRadius={40}
  radius={100}
  origin={{ y: 150 }}
  labelPosition={({ index }) => index
    ? "centroid"
    : "startAngle"
  }
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


    </div>

    </div>
  <div className=' w-full h-screen bg-white  rounded-2xl shadow-xl  p-8'>

    <VictoryChart
    width={1800}
    height={1000}
    
  theme={VictoryTheme.material}
  domainPadding={40}
>
<VictoryAxis
          label=" Starting Year "
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
    data={bardata}
    labels={({ datum }) =>`${datum.y}`}
    />
</VictoryChart>
    </div>
      </div>
  )
}

export default Dashboard
