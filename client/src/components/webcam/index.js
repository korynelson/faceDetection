import React from "react";
import Webcam from "react-webcam";
//import Webcam from "react-webcam";



function WebcamModule() {
    return (
      <div className="card">
        <div className="card-body">
          <p className="card-text">
            Webcam Module Loaded
            <Webcam />
          </p>
        </div>
      </div>

    );
  }
  
  export default WebcamModule;