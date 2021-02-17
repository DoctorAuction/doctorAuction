import { useState } from "react"
import React from 'react';
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";  
import InputGroup from "react-bootstrap/InputGroup";


function DocSignUp() {
  function handleSubmit(){
    console.log("clicked")
  }
  
    return (
      <div className="DocSignUp">
        <InputGroup id="doc_sign_up_InputGroup">
          <InputGroup.prepend>
            <InputGroup.Text >Name</InputGroup.Text>
          </InputGroup.prepend>
          <FormControl placeholder="Name" />
  
            {/* <a>Name</a>
            <input type="text" placeholder="Name"></input><br></br>
            <a>Graduation Year</a>
            <input type="text" placeholder="Graduation Year"></input><br></br>
            <a>Speciality</a>
            <input type="text" placeholder="Speciality"></input><br></br>
            <input type="button" onClick={handleSubmit} value="Submit"></input> */}
        </InputGroup>

        <InputGroup>
          <InputGroup.prepend>
              <InputGroup.Text >Graduation Year</InputGroup.Text>
            </InputGroup.prepend>
            <FormControl placeholder="Graduation Year" />
        </InputGroup>

        <InputGroup>
          <InputGroup.prepend>
          <InputGroup.Text >Graduation Year</InputGroup.Text>
          </InputGroup.prepend>
          <FormControl placeholder="Graduation Year" />
        </InputGroup>
      </div>
    );
  }
  
  export default DocSignUp;