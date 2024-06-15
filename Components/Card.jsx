import React from 'react'

const Card = ({data}) => {
  return (
    <div className=' h-44 w-1/5 flex flex-col justify-center items-center rounded-2xl  shadow-xl text-white' style={{background:data?.color}}>
         <p className=' text-xl mb-4'> total number of {data?.name} </p>
         <p className=' text-3xl p-2'>{data?.total}</p>
      
    </div>
  )
}

export default Card
