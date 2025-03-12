import React from 'react'
import Navbar from '../components/Navbar'
import Navright from '../components/Navright'
import { Link } from 'react-router-dom'
import "../css/home.css"
function Home() {
  return (
    <>
   
    <section className="home-container">
    <Navbar/>
        <div className="home-te">
            <div className="part-one">
                <h5>fine4tech <span>.</span></h5>
                <p> Product photos / product videos .</p>
                <p>100+ trusted clients</p>
            </div>
            
        </div>
    <div className="navright">
    <ul>
                    <Link to="/work">   <li><a href="">works<span>.</span></a></li></Link>
                        <Link to="/about"><li><a href="">about<span>.</span></a></li></Link>
                        <Link to="/contact"><li><a href="">contact<span>.</span></a></li></Link>
                    </ul>
    </div>
    </section>

    </>
  )
}

export default Home