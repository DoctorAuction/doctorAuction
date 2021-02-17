import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";  
import InputGroup from "react-bootstrap/InputGroup";



const DocSignup = () => {
  return (
    <>
      <h1>Here is Doctor Signup page!!!</h1>
      <Link to="/">
        <Button variant="primary">Back to Home</Button>
      </Link>

    <div className="DocSignUp">
        <InputGroup id="doc_sign_up_InputGroup">
          <InputGroup.Prepend>
            <InputGroup.Text >Name</InputGroup.Text>
          </InputGroup.Prepend>
        <FormControl placeholder="ex) Yoko" />
  
       </InputGroup>

        <InputGroup>
          <InputGroup.Prepend>
              <InputGroup.Text >Speciality</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl placeholder="ex) Dermatology" />
        </InputGroup>

        <InputGroup>
          <InputGroup.Prepend>  
          <InputGroup.Text >Graduation Year</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl placeholder="2002" />
        </InputGroup>
      </div>

      </>
    );
  }
  

export default DocSignup;
