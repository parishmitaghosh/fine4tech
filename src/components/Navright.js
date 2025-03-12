import React from 'react'
import "../css/home.css"
import { Link } from "react-router-dom";
function Navright() {
  return (
    <div className="right-nav-container">
                <nav>
                    <ul>
                    <Link to="/work">   <li><a href="">works<span>.</span></a></li></Link>
                        <Link to="/about"><li><a href="">about<span>.</span></a></li></Link>
                        <Link to="/contact"><li><a href="">contact<span>.</span></a></li></Link>
                    </ul>
                </nav>
            </div>
  )
}

export default Navright