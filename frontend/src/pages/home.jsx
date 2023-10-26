import React from 'react'
import photoHome from '../assets/j-luis-esquivel-ArGvQkA7iOw-unsplash.jpg'
import { Link } from 'react-router-dom'
import Footer from '../components/footer'

function Home() {
    return (
        <>
            <section className="home-container flex items-center justify-center" style={{height:'90vh', background : `url(${photoHome})`, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
                <div className="info-container grid gap-10 w-[600px] ">
                    <h1 className='text-5xl tracking-widest font-bold'>Best Collection For <br /> Home Decoration</h1>
                    <p className='text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum modi blanditiis eligendi perspiciatis vitae! Ipsa recusandae reprehenderit harum velit repudiandae commodi voluptatibus vitae eveniet aperiam, accusantium et quos repellat esse!</p>
                    <button className='w-[200px] bg-black text-white h-[40px] rounded-lg cursor-pointer font-semibold tracking-widest'><Link to={'/products'}>Shop Now</Link></button>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Home