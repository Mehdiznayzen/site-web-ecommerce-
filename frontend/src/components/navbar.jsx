import React, { useState } from 'react'
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai'
import { useSelector , useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { data } from './../data/data';
import { actions } from '../redux/slice';
import { SlLogout } from 'react-icons/sl'

function Navbar() {
    const { numberHeart, numberCart } = useSelector(state => state.ecommerce)
    const dispach = useDispatch()

    const handleSelect = () => {
        dispach(actions.handleSelect())
    }

    const handleLogOut = () => {
        dispach(actions.handleLogOut())
    }

    return (
        <div className="navbar-container w-full bg-blue-500 flex items-center justify-around h-16">
            <div className="bar-options">
                <select onClick={handleSelect} name="" id="" className='w-[200px] text-lg font-semibold tracking-widest p-1 rounded-md'>
                    <option value="all">All Categories</option>
                    <option value="Clothes" className='text-xl'>Clothes</option>
                    <option value="Media">Media</option>
                    <option value="Foods">Foods</option>
                    <option value="Others">others</option>
                </select>
            </div>
            <div className="icons flex items-center gap-6 text-2xl cursor-pointer">
                <div className="relative">
                    <div className="number absolute left-4 top-[-5px] bg-green-500 w-[13px] rounded-full h-[13px] flex items-center justify-center">
                        <p className='text-sm text'>{numberCart}</p>
                    </div>
                    <div className="icon">
                        <Link to={'/product/cart'}><AiOutlineShoppingCart/></Link>
                        
                    </div>
                </div>
                <div className="relative">
                    <div className="number absolute left-4 top-[-5px] bg-green-500 w-[13px] rounded-full h-[13px] flex items-center justify-center">
                        <p className='text-sm text'>{numberHeart}</p>
                    </div>
                    <div className="icon">
                        <AiOutlineHeart/>
                    </div>
                </div>
                <div className="logout cursor-pointer" onClick={handleLogOut}>
                    <SlLogout/>
                </div>
            </div>
        </div>
    )
}

export default Navbar