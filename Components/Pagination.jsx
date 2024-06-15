import React from 'react'
import { MdOutlineSkipPrevious } from "react-icons/md";
import { MdOutlineSkipNext } from "react-icons/md";
import { GrChapterNext } from "react-icons/gr";
import { GrChapterPrevious } from "react-icons/gr";
const Pagination = ({ activePage, count, rowsPerPage, totalPages, setActivePage,setRowsPerPage }) => {
    const handleChange = (event) => {
        const value = parseInt(event.target.value, 10);
        setRowsPerPage(value);
        onRowsPerPageChange(value);
    };


  return (
    
    <div className=" flex flex-row items-center justify-between  rounded-lg p-4 ">
         <div className="flex items-center space-x-2">
            <label htmlFor="rowsPerPage" className="text-gray-700">Rows per page:</label>
            <select
                id="rowsPerPage"
                value={rowsPerPage}
                onChange={handleChange}
                className="block w-24 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
            </select>
        </div>
    <button className=' p-4 text-xl flex flex-row gap-1 items-center justify-center ' disabled={activePage === 1} onClick={() => setActivePage(1)}><GrChapterPrevious /> <span>First</span> </button>
    <button className=' p-4 text-xl flex flex-row gap-1 items-center justify-center ' disabled={activePage === 1} onClick={() => setActivePage(activePage - 1)}><MdOutlineSkipPrevious /> <span>Previous</span> </button>
    <button className=' p-4 text-xl flex flex-row gap-1 items-center justify-center '  disabled={activePage === totalPages} onClick={() => setActivePage(activePage + 1)}> <span>Next</span> <MdOutlineSkipNext /></button>
    <button className=' p-4 text-xl flex flex-row gap-1 items-center justify-center '  disabled={activePage === totalPages} onClick={() => setActivePage(totalPages)}> <span>Last</span> <GrChapterNext /></button>
  </div>
  
  )
}

export default Pagination
