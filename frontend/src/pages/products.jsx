import React, { useRef, useState } from 'react'
import Navbar from '../components/navbar'
import { AiFillStar, AiOutlineStar, AiOutlineHeart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../redux/slice';
import FirstNavbar from '../components/firstNavbar';

function Products() {
    const { donnes, newData } = useSelector(state => state.ecommerce)
    const dispatch = useDispatch()

    const handleHeart = (id) => {
        dispatch(actions.handleHeart(id))
    }

    const addProduct = async (id, img, title, price, category) => {
        const newProduct = {
            id : id,
            img : img,
            title : title,
            price : price,
            category : category
        }
        dispatch(actions.handleAddCart(newProduct))
        const reponse = await fetch('http://localhost:3000/api/product', {
            method : "POST",
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(newProduct)
        })

        if(reponse.ok){
            console.log('The product is added to database')
        }else{
            console.log('Error')
        }
    }

    return (
        <div className='bg-gray-300'>
            <Navbar />
            <div className="products-container m-5" style={{display:'grid', alignItems:'center', gridTemplateColumns:'repeat(3, 1fr)', gap:'10px'}}>
                {
                    newData.map((item) => (
                        <article key={item.id} className='bg-white w-[300px] rounded grid gap-3'>
                            <div className="img-icon">
                                <img src={item.img} className='w-full rounded h-[260px]' alt="" />
                            </div>
                            <div className="stars-icons px-4 flex items-center justify-between">
                                <div className="flex gap-1 text-xl">
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiOutlineStar/>
                                </div>
                                {
                                    item.showHeart && 
                                    <div className="text-xl cursor-pointer" onClick={() => handleHeart(item.id)}>
                                        <AiOutlineHeart/>
                                    </div>
                                }
                            </div>
                            <div className="info-article px-4">
                                <h2 className='text-2xl font-bold tracking-widest '>{item.title}</h2>
                                <p className='text-xl font-semibold'>$ {item.price}</p>
                            </div>
                            <button onClick={() => addProduct(item.id, item.img, item.title, item.price, item.category)} className='bg-blue-400 m-2 rounded-md h-[30px] cursor-pointer'>Ajouter au panier</button>
                        </article>
                    ))
                }
            </div>
        </div>
    )
}

export default Products