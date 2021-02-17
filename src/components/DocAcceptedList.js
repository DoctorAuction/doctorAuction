import React, {useState, useEffect} from "react";
import db from "../server/database";
import{ Link } from "react-router-dom";
import Button from "react-bootstrap/Button";


const DocAcceptedList = () => {
    const [acceptedList, setAcceptedList] = useState([]);
    const [acceptedListTag, setAcceptedListTag] = useState([]);
    const [doctorId, setDoctorId] = useState(12345);

    async function showData() {
        await db
          .ref("consult")
          .orderByKey()
          .once("value", function (snapshot) {
            const data = [];
            snapshot.forEach((child) => {
                if(child.val().doctor === doctorId){
              const childKey = child.key;
              const childData = child.val();
              data.push({[childKey]:childData});
             }
            });
            setAcceptedList(data);
          });
      }

      useEffect(() => {
          showData()
      },[])

      useEffect(() => {   
        const newTagsArr = [];
        for (const consult of acceptedList){
          const consultId = Object.keys(consult)[0];  
          const consultDiv = []
          consultDiv.push(<p key={consultId}>Id: {consultId}</p>)
          for(const key in consult[consultId]){
              consultDiv.push(
                <p key={consultId + key}>{key}: {consult[consultId][key]}</p>
              )
        }
          
          newTagsArr.push(
          <div key={consultId + "div"} className="consultDiv" id={consultId}>
            {consultDiv}
            </div>
          )
        };

        setAcceptedListTag(newTagsArr);
      },[acceptedList])

    return(
        <>
        <h1>List of all the consults you have accepted</h1>
        <Link to="/DocTop">
            <Button variant="primary">Back to Doctor's Top Page</Button>
        </Link>
        {acceptedListTag}
        </>
    );
};

export default DocAcceptedList;