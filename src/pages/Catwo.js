import React from "react";
import "../css/work.css";
import { useState } from "react";
import j9 from "../images/j9.jpg"

import j6 from "../images/j6.jpg"
import j1 from "../images/j1.jpg"
import j2 from "../images/j2.jpg"
import j3 from "../images/j3.jpg"
import j4 from "../images/j4.jpg"
import j5 from "../images/j5.jpg"
import j7 from "../images/j7.jpg"
import j8 from "../images/j8.jpg"
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
              <div className="center">Jewelery</div>
              <div className="card">
                <img src={j1} alt="" />
              </div>
              <div className="card">
                <img src={j2} alt="" />
              </div>
              <div className="card">
                <img src={j3} alt="" />
              </div>
              {isModalOpen && (
       <Modal onClose={toggleModal}>
          
       <FontAwesomeIcon icon={faArrowCircleLeft} onClick={toggleModal} className="back-icon"></FontAwesomeIcon>
  
   <div className="pcatalogue">
   <div className="card">
           <img src={j1} alt="" />
     
           <img src={j2} alt="" />
        
       
           <img src={j3} alt="" />
    </div>
         <div className="card">
           <img src={j4} alt="" />
         
        
           <img src={j5} alt="" />
        
         
           <img src={j6} alt="" />
         
        </div>
        <div className="card">
           <img src={j7} alt="" />
        
       
           <img src={j8} alt="" />
       
        
           <img src={j9} alt="" />
         </div>
   </div>
        </Modal>
              )}
            </div>
           
      
   
    </>
  );
}

export default Catone;
