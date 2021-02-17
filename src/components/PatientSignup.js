import React, {setState} from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";  
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";


const PatientSignup = () => {

  function handleSubmit(event){
    event.preventDefault();
    const dataObj = {}
    for (let i = 0; i < event.target.length -1; i++){
      // console.log("input",event.target[i])
      dataObj[event.target[i].id] = event.target[i].value
    }
    console.log(dataObj)
  }

  return (
    <>
      <h1>Here is Patient Signup page!!!</h1>
      <Link to="/">
        <Button variant="primary">Back to Home</Button>
      </Link>

      <Form onSubmit={handleSubmit} className="PatientSignUp">
        <InputGroup >
          <InputGroup.Prepend>
            <InputGroup.Text >Name</InputGroup.Text>
          </InputGroup.Prepend>
        <FormControl placeholder="ex) Fred" id="name"/>
  
       </InputGroup>

        <InputGroup>
          <InputGroup.Prepend>
              <InputGroup.Text >Age</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl placeholder="ex) 22" id="age"/>
        </InputGroup>

        <InputGroup>
          <InputGroup.Prepend>  
          <InputGroup.Text >Gender</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control as="select" id="gender">
            <option>Female</option>
            <option>Male</option>
            <option>Other</option>
          </Form.Control>
        </InputGroup>
          <Button variant="primary" type="submit">
            Submit
          </Button>
      </Form>
    </>
  );
};

export default PatientSignup;
