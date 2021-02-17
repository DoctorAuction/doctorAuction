import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
// import FormControl from "react-bootstrap/FormControl";  
// import InputGroup from "react-bootstrap/InputGroup";
// import Form from "react-bootstrap/Form";



const DocTop = () => {

    const [dummyData, setDummyData] = useState([
        {id:1, name:"Hiroki", symptoms:"headache", price:5000},
        {id:2, name:"Shota", symptoms:"backache", price:9000}]);
    const [dummyDataTag, setDummyDataTag] = useState([]);

    useEffect(() => {
        const newTag = []
        console.log(dummyData)
        for (const post of dummyData){
            newTag.push(<article id={post.id} key={post.id}>{post.name}</article>)
        }
        setDummyDataTag(newTag);
    }, [])

  return (
    <>
      <h1>Here is Doctor Top page!!!</h1>
      <Link to="/">
        <Button variant="primary">Back to Home</Button>
      </Link>
      {dummyDataTag}
    </>
  );
}
export default DocTop;
