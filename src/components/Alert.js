import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
 const Alert = ({ message, onClose }) => {
  return (
    
     <div className="popup">
     <div className="popup-content">
       <div className="popup-header">
        <div className="header" >
        <span>
                    {" "}
                    <FontAwesomeIcon icon={faPhone} />
                  </span>
          <h3> 0338073142</h3>
        </div>
         
         <button className="popup-close" onClick={onClose}>
           Close
         </button>
       </div>
     
     </div>
   </div>
  );
};
export default Alert;