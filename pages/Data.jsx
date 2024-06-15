import React, { useEffect, useState } from 'react'
import LoadingSpinner from '../Components/Loading';
import Table from '../Components/Table';

const Data = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const columns = [
    { accessor: 'topic', label: 'Topic', className: 'w-32 truncate' },
    { accessor: 'title', label: 'Title', className: 'w-96 truncate' },
    { accessor: 'country', label: 'Country', className: 'w-32 truncate' },
    { accessor: 'start_year', label: 'Start Year', className: 'w-36 ' },
    { accessor: 'end_year', label: 'End Year', className: 'w-32 ' },
    { accessor: 'sector', label: 'Sector', className: 'w-48 truncate' },
    { accessor: 'region', label: 'Region', className: 'w-32 truncate' },
    { accessor: 'intensity', label: 'Intensity', className: 'w-32 ' },
    { accessor: 'likelihood', label: 'Likelihood', className: 'w-32 ' },
    { accessor: 'pestle', label: 'Pestle', className: 'w-32 truncate' },
    { accessor: 'relevance', label: 'Relevance', className: 'w-32' },
    { accessor: 'source', label: 'Source', className: 'w-48 truncate' },
    { accessor: 'url', label: 'Link', className: 'w-24  truncate' }
];

  



  useEffect(()=>{
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://dashboard-backend-d5x7.onrender.com/api/v1/data');
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
  },[])




  if (loading) return <div className=' h-full w-full  flex flex-row  justify-center items-center '> <LoadingSpinner/> </div>;
  if (error) return <div className=' h-full w-full  flex flex-row  justify-center items-center '>Error: {error}</div>;
  return (
    <div className='min-h-full w-full '>
      <h1 className=' text-center'> </h1>
      <Table columns={columns} rows={data}/>
    </div>
  )
}

export default Data
