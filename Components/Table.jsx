import React, { useState } from 'react'
import { CiLink } from "react-icons/ci";
import Pagination from './Pagination';

const Table = ({columns ,rows}) => {
    
      const [filters, setFilters] = useState({})
    const [activePage, setActivePage] = useState(1)
  const [rowsPerPage, setRowsPerPage]=useState(10)
  const filteredRows = filterRows(rows, filters)
  const data = filteredRows.slice(
    (activePage - 1) * rowsPerPage,
    activePage * rowsPerPage
  )
  const count = filteredRows.length
  const totalPages = Math.ceil(count / rowsPerPage)
//   const data = rows.slice((activePage - 1) * rowsPerPage, activePage * rowsPerPage)

  const handleSearch = (value, accessor) => {
    setActivePage(1)
  
    if (value) {
      setFilters(prevFilters => ({
        ...prevFilters,
        [accessor]: value,
      }))
    } else {
      setFilters(prevFilters => {
        const updatedFilters = { ...prevFilters }
        delete updatedFilters[accessor]
  
        return updatedFilters
      })
    }
  }


  function filterRows(rows, filters) {
    if (Object.keys(filters).length === 0 && filters.constructor === Object) return rows
  
    return rows.filter(row => {
      return Object.keys(filters).every(accessor => {
        const value = row[accessor]
        const searchValue = filters[accessor]
  
        if (Object.prototype.toString.call(value) === '[object String]') {
          return value.toLowerCase().includes(searchValue.toLowerCase());
        }
  
        if (value === true || value === false) {
          return (searchValue === 'true' && value) || (searchValue === 'false' && !value)
        }
  
        if (typeof value === 'number') {
          return value == searchValue
        }
  
        return false
      })
    })
  }

  return (
    <div>
        <table className=' table-fixed'>
            <thead>
                <tr className=' flex flex-row gap-1 bg-white  rounded-lg mb-3 '>
                    {
                        columns?.map(column=>(
                          
                            <th className={`text-xl text-black py-4 px-4 font-bold text-center  ${column.className}`} key={column.accessor}>{column.label}</th>
                        ))
                    }

                </tr>
                <tr className=' flex flex-row gap-1 bg-white  rounded-lg mb-3 '>
    {columns.map(column => {
      return (
        column.accessor!=='url'? <th  key={`${column.accessor}-search`}>
          <input
            className={` text-sm text-black py-2 px-1 font-bold text-center  ${column.className}`}  
            type="search"
            placeholder={`Search ${column.label}`}
            value={filters[column.accessor]}
            onChange={event => handleSearch(event.target.value, column.accessor)}
          />
        </th>
        :<></>
      )
    })}
  </tr>
            </thead>

            <tbody >
                <div className=' flex flex-col gap-3'>
                {
                    data.map((row)=>(
                <tr key={row._id} className=' flex flex-row gap-1 bg-white  rounded-lg '>
                    
                            {
                                columns?.map((column)=>{

                                    if(column.accessor==='url')return  <td className= {`px-4 py-4  text-center ${column.className}`} key={column.accessor}><a target='_blank' className=' text-xl' href={row[column.accessor]}><CiLink /></a></td>
                                return    <td className={`px-4 py-5 text-center ${column.className}`}  key={column.accessor}>{row[column.accessor]}</td>
})
                            }
                        </tr>
                    ))
                }

</div> 
            </tbody>
        </table>

        <Pagination activePage={activePage} rowsPerPage={rowsPerPage} totalPages={totalPages} setActivePage={setActivePage} setRowsPerPage={setRowsPerPage} count={count} />
        <p className=' text-center text-2xl '>
        Page {activePage} of {totalPages}
      </p>
      
    </div>
  )
}

export default Table
