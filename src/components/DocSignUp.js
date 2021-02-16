import { useState } from "react"
import React from 'react';

function DocSignUp() {
  function handleSubmit(){
    console.log("clicked")
  }
  
    return (
      <div className="DocSignUp">
        <form id="doc_sign_up_form">
            <a>Name</a>
            <input type="text" placeholder="Name"></input><br></br>
            <a>Graduation Year</a>
            <input type="text" placeholder="Graduation Year"></input><br></br>
            <a>Speciality</a>
            <input type="text" placeholder="Speciality"></input><br></br>
            <input type="button" onClick={handleSubmit} value="Submit"></input>
        </form>
      </div>
    );
  }
  
  export default DocSignUp;