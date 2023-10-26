import React from 'react'

function Footer() {
    return (
        <footer className='w-full bg-blue-600 flex items-center justify-between p-5'>
            <div className="title">
                <h1 className='text-3xl font-semibold tracking-widest'><span className='text-green-600'>Subscribe</span> us for get news <br /> events and offers</h1>
            </div> 
            <form action="" className='flex items-center gap-5'>
                <input type="email" className='w-[300px] p-1 rounded-md h-[30px]' placeholder='Enter tour email' name="" id="" />
                <input type="submit" value={'Submit'} name="" className='w-[100px] h-[30px] rounded-md cursor-pointer bg-green-500' id="" />
            </form>
        </footer>
    )
}

export default Footer