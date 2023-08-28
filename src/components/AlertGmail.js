import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

 const AlertGmail = ({ message, onClose }) => {
  return (
    
     <div className="popup">
     <div className="popup-content">
       <div className="popup-header">
        <div className="header" >
        <span>
                    {" "}
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
          <h3> lienhe.hrt@gmail.com</h3>
        </div>
         
         <button className="popup-close" onClick={onClose}>
           Close
         </button>
       </div>
     
     </div>
   </div>
  );
};
export default AlertGmail;