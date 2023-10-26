import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../redux/slice'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { motion } from 'framer-motion'

const variantForm = {
    initial : {
        x : -500
    },
    animate : {
        x : 0,
        transition : {
            delay : 0.1,
            type : 'spring',
            stiffness : 350
        }
    }
}

const variantTitle = {
    initial : {
        y : -300
    },
    animate : {
        y : 0,
        transition : {
            delay : 0.3,
            type : 'spring',
            stiffness : 350
        }
    }
}

function Authentification() {
    const { firstName, secondName, email, password, showAlert } = useSelector(state => state.ecommerce)
    const dispatch = useDispatch()
    const [isVisible, setIsVisible] = useState(false)
    const input = useRef(null)
    const [showIconEye, setShowIconEye] = useState(false)

    const handleFirstName = (e) => {
        const inputValue = e.target.value
        dispatch(actions.handleFirstName(inputValue))
    }

    const handleSecondName = (e) => {
        const inputValue = e.target.value
        dispatch(actions.handleSecondName(inputValue))
    }

    const handleEmail = (e) => {
        const inputValue = e.target.value
        dispatch(actions.handleEmail(inputValue))
    }

    const handlePassword = (e) => {
        const inputValue = e.target.value
        dispatch(actions.handlePassword(inputValue))
    }

    // function for submit the data to the database 
    const submitData = async () => {
        const newPerson = { firstName, secondName, email, password }

        const response = await fetch('http://localhost:3000/api/person', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(newPerson)
        })
        if(response.ok){
            console.log('The data is saved.')
        }else{
            console.log('Error')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(actions.handleSubmit())
        submitData()
    }
    
    const showPassword = () => {
        input.current.type = 'text'
        setIsVisible(true)
    }

    const dipearPassword = () => {
        input.current.type = 'password'
        setIsVisible(false)
    }

    const showIcon = () => {
        if(input.current.value.length > 0){
            setShowIconEye(true)
        }else{
            setShowIconEye(false)
        }
    }

    return (
        <section className='h-screen bg-blue-300 grid items-center justify-center'>
            {
                showAlert && 
                <div className="alert text-center flex items-center justify-center bg-red-700 text-white font-bold text-xl p-1 rounded-md">
                    <h1>You have to fill the fields</h1>
                </div>
            }
            <div className="grid gap-14">
                <motion.h1 variants={variantTitle} initial='initial' animate='animate' className='text-center font-bold tracking-widest text-4xl'>Create your account</motion.h1>
                <motion.form action="" variants={variantForm} initial='initial' animate='animate' onSubmit={handleSubmit} method="post" className='bg-blue-500 w-[460px] grid gap-7 p-3 rounded'>
                    <div className="grid items-center gap-4">
                        <label className='text-center' htmlFor="">Your first name : </label>
                        <input onChange={handleFirstName} value={firstName} type="text" name="" className='rounded-md outline-none p-1' id="" />
                    </div>
                    <div className="grid items-center gap-4">
                        <label className='text-center' htmlFor="">Your second name : </label>
                        <input type="text" onChange={handleSecondName} value={secondName} name="" className='rounded-md outline-none p-1' id="" />
                    </div>
                    <div className="grid items-center gap-4">
                        <label className='text-center' htmlFor="">Your email : </label>
                        <input type="email" onChange={handleEmail} value={email} name="" className='rounded-md outline-none p-1' id="" />
                    </div>
                    <div className="grid items-center gap-4 relative">
                        <label className='text-center' htmlFor="">Your password : </label>
                        <div className="input-icon flex items-center">
                            <input type="password" ref={input} onInput={showIcon} onChange={handlePassword} value={password} name="" className='rounded-md outline-none p-1 w-full' id="" />
                            {
                                showIconEye && 
                                <div className="icon flex items-center cursor-pointer">
                                    {
                                        !isVisible ? <AiFillEye className='absolute right-1 text-xl' onClick={showPassword}/> : <AiFillEyeInvisible className='absolute right-1 text-xl' onClick={dipearPassword}/>
                                    }
                                </div>
                            }
                        </div>
                    </div>
                    <input type="submit" className='rounded-md cursor-pointer font-semibold tracking-widest' style={{border:'2px solid #000'}} value={'Submit'} name="" id="" />
                </motion.form>
            </div>
        </section>
    )
}

export default Authentification