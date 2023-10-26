import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../redux/slice'

function FirstNavbar() {
    const dispatch = useDispatch()

    const handleSearch = (e) => {
        const inputValue = e.target.value
        dispatch(actions.handleSearchBar(inputValue))
    }

    return (
        <div className="firstnavbar w-full bg-gray-300 h-20 flex items-center justify-around">
            <div className="logo">
                <h1 className='text-3xl font-bold tracking-widest text-blue-300'>Shop<span className='text-black'>M</span></h1>
            </div>
            <div className="bar-search flex items-center rounded p-1 gap-4 bg-white">
                <input type="text" placeholder='Search product....' onChange={(e) => handleSearch(e)} className='w-[500px] bg-none outline-none' name="" id="" />
                <FiSearch className='text-xl font-bold cursor-pointer'/>
            </div>
        </div>
    )
}

export default FirstNavbar