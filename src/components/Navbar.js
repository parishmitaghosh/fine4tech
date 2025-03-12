import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBehance } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../css/navbar.css"
function Navbar() {
  return (
    <>
    <nav className='nav-container'>
       

<ul>
   
    <li  className="nav-links"> <a href="https://www.instagram.com/fine4tech?igsh=MTZnNmN5NHY4N3Q1NA=="> <FontAwesomeIcon icon={faInstagram} style={{ color: "#000" }}/></a>
</li>
<li className="nav-links"> <a href="https://www.behance.net/fine4tech?fbclid=PAAaar0DgLDkLRkgvRt6BwQigDklDqCEJPWCDLG9n9wiRe3M8vi8_Cgepz3Us_aem_AWllMDw2kfDmfNHS1qyMj11s3-_wWCJwlrc-uz8gbWyxvCyWK7hB-DiGshqFHmzk3BQ"> <FontAwesomeIcon icon={faBehance} style={{ color: "#000" }}/></a>
</li>
<li className="nav-links"> <a href="https://www.linkedin.com/in/seemanta-dutta-a83237195?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"> <FontAwesomeIcon icon={faLinkedin} style={{ color: "#000" }}/></a>
</li>
<li className="line"></li>
</ul>
<div className="date">@2024</div>
    </nav>
    </>
  )
}

export default Navbar