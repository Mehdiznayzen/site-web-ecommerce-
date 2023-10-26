import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../redux/slice'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function ProductCart() {
    const { arrayCart } = useSelector(state => state.ecommerce)
    const dispatch = useDispatch()

    const handleFilter = async (id) => {
        dispatch(actions.handleFilter(id))
        const response = await fetch(`http://localhost:3000/api/product/${id}`, {
            method : "Delete",
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        if(response.ok){
            console.log('The product is deleted')
        }else{
            console.log('error!')
        }

    }

    return (
        <section className=''>
            <Link className="link flex items-center gap-2 m-2 text-xl" to={'/products'}>
                <BsFillArrowLeftCircleFill/>
                <a href="/">Add product</a>
            </Link>
            {
                arrayCart.length !== 0 ? <div className="product-cart m-10" style={{display :'grid', gridTemplateColumns:'repeat(3, 1fr)'}}>
                    {
                        arrayCart.map((item) => (
                            <article key={item.id} className='bg-gray-300 rounded-md w-[300px] grid gap-3'>
                                <div className="img-container">
                                    <img src={item.img} className='w-full h-[200px] rounded-md' alt="" />
                                </div>
                                <div className="stars-icons px-4 flex items-center justify-between">
                                </div>
                                <div className="info-article px-4">
                                    <h2 className='text-2xl font-bold tracking-widest '>{item.title}</h2>
                                    <p className='text-xl font-semibold'>$ {item.price}</p>
                                </div>
                                <button onClick={() => handleFilter(item.id)} className='m-3 cursor-pointer font-semibold bg-green-600 rounded h-[30px]'>Remove</button>
                            </article>
                        ))
                    }
                    </div> : <h1 className='text-5xl font-semibold tracking-widest flex items-center justify-center h-[70vh]'>The cart is empty</h1>
            }
        </section>
    )
}

export default ProductCart