import React, {setState} from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";  
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";



const DocSignup = () => {

  function handleSubmit(event){
    event.preventDefault();
    const dataObj = {};
    for (let i = 0; i < event.target.length - 1; i++){
      // console.log("input",event.target[i])
      dataObj[event.target[i].id] = event.target[i].value
    }
    console.log(dataObj);
  }

  return (
    <>
      <h1>Here is Doctor Signup page!!!</h1>
      <Link to="/">
        <Button variant="primary">Back to Home</Button>
      </Link>

    <Form onSubmit={handleSubmit}>
        <InputGroup id="doc_sign_up_InputGroup">
          <InputGroup.Prepend>
            <InputGroup.Text >Name</InputGroup.Text>
          </InputGroup.Prepend>
        <FormControl placeholder="ex) Yoko" id="name"/>
  
       </InputGroup>

        <InputGroup>
          <InputGroup.Prepend>
              <InputGroup.Text >Speciality</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl placeholder="ex) Dermatology" id="speciality"/>
        </InputGroup>

        <InputGroup>
          <InputGroup.Prepend>  
          <InputGroup.Text >Graduation Year</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl placeholder="2002" id="graduation_year"/>
        </InputGroup>
        <Button variant="primary" type="submit">
            Submit
          </Button>
      </Form>

    </>
  );
  
}
  

export default DocSignup;
