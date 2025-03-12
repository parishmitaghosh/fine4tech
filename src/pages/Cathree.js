import React from "react";
import "../css/work.css";
import { useState } from "react";
import c1 from "../images/c1.jpg"
import c2 from "../images/c2.jpg"
import c3 from "../images/c3.jpg"
import c4 from "../images/c4.jpg"
import c5 from "../images/c5.jpg"
import c6 from "../images/c6.jpg"
import c7 from "../images/c7.jpg"
import c8 from "../images/c8.jpg"
import c9 from "../images/c9.jpg"

import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Modal from "../components/Modal";
const Catone = () => {
  
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };
  return (
    <>
      <div className="cat1" onClick={toggleModal}>
            <div className="center">Candels</div>
            <div className="card">
              <img src={c1} alt="" />
            </div>
            <div className="card">
              <img src={c2} alt="" />
            </div>
            <div className="card">
              <img src={c3} alt="" />
            </div>
          </div>
              {isModalOpen && (
       <Modal onClose={toggleModal}>
          
       <FontAwesomeIcon icon={faArrowCircleLeft} onClick={toggleModal} className="back-icon"></FontAwesomeIcon>
  
   <div className="pcatalogue">
   <div className="card">
           <img src={c1} alt="" />
     
           <img src={c2} alt="" />
        
       
           <img src={c3} alt="" />
    </div>
         <div className="card">
           <img src={c4} alt="" />
         
        
           <img src={c5} alt="" />
        
         
           <img src={c6} alt="" />
         
        </div>
        <div className="card">
           <img src={c7} alt="" />
        
       
           <img src={c8} alt="" />
       
        
           <img src={c9} alt="" />
         </div>
   </div>
        </Modal>
      )}
        
           
      
   
    </>
  );
}

export default Catone;
