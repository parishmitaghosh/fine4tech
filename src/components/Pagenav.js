import React from 'react'
import "../css/navbar.css"
import { Link } from "react-router-dom";
function Pagenav() {
  return (
    <>
    <nav className='nav-container home-link-nav'>
       

<ul >
   
   <Link to="/home"><li  className="nav-links home-link">  Home
</li></Link> 

<li className="line"></li>
</ul>
<div className="date">@2024</div>
    </nav>
    </>
  )
}

export default Pagenav