import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import db from "../server/database";
// import FormControl from "react-bootstrap/FormControl";  
// import InputGroup from "react-bootstrap/InputGroup";
// import Form from "react-bootstrap/Form";



const DocTop = () => {

    const [dummyData, setDummyData] = useState([
        {id:1, name:"Hiroki", symptoms:"headache", price:5000},
        {id:2, name:"Shota", symptoms:"backache", price:9000}]);
    const [dummyDataTag, setDummyDataTag] = useState([]);
    
  const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        // const newTag = []
        // console.log(dummyData)
        // for (const post of dummyData){
        //     newTag.push(
        //     <article id={post.id} key={post.id}>
        //         <p>{post.id}</p>
        //         <h2>{post.symptoms}</h2>
        //         <h3>{post.name}</h3>
        //         </article>);
        // }
        // setDummyDataTag(newTag);
        // get all Consult data, only example
      async function showData() {
        await db
          .ref("Consult")
          .orderByKey()
          .once("value", function (snapshot) {
            const data = [];
            snapshot.forEach((child) => {
              const childKey = child.key;
              const childData = child.val();
              data.push({[childKey]:childData});
            });
            setDoctors(data);
          });
      
      // console.log(doctors);
      }
      showData();

    }, [])

    useEffect(() => {      
      const newTagsArr = [];
      for (const consult of doctors){
        const consultId = Object.keys(consult)[0];
        const consultDiv = []

        consultDiv.push(<p key={consultId}>Id: {consultId}</p>)
        for(const key in consult[consultId]){
          consultDiv.push(
            <p key={consultId + key}>{key}: {consult[consultId][key]}</p>
          )
        }
        newTagsArr.push(<div key={consultId + "div"} className="consultDiv">{consultDiv}</div>)
      }
      setDummyDataTag(newTagsArr);
      
    }, [doctors])

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
