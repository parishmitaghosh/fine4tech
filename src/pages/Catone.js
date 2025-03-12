import React from "react";
import "../css/work.css";
import { useState } from "react";
import p3 from "../images/p3.jpg"
import p2 from "../images/p2.jpg"
import p6 from "../images/p6.jpg"
import p1 from "../images/p1.jpg"
import p4 from "../images/p4.jpg"
import p5 from "../images/p5.jpg"
import p9 from "../images/p9.jpg"
import p7 from "../images/p7.jpg"
import p8 from "../images/p8.jpg"
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
      <div className="cat1" onClick={toggleModal} >
              <div className="center">Perfume</div>
              <div className="card">
                <img src={p6} alt="" />
              </div>
              <div className="card">
                <img src={p2} alt="" />
              </div>
              <div className="card">
                <img src={p3} alt="" />
              </div>
              {isModalOpen && (
        <Modal onClose={toggleModal}>
          
            <FontAwesomeIcon icon={faArrowCircleLeft} onClick={toggleModal} className="back-icon"></FontAwesomeIcon>
       
        <div className="pcatalogue">
        <div className="card">
                <img src={p6} alt="" />
          
                <img src={p2} alt="" />
             
            
                <img src={p3} alt="" />
         </div>
              <div className="card">
                <img src={p1} alt="" />
              
             
                <img src={p4} alt="" />
             
              
                <img src={p9} alt="" />
              
             </div>
             <div className="card">
                <img src={p5} alt="" />
             
            
                <img src={p8} alt="" />
            
             
                <img src={p7} alt="" />
              </div>
        </div>
        
        </Modal>
      )}
            </div>
           
      
   
    </>
  );
}

export default Catone;
