import React, { useState, useEffect } from "react";
import db from "../server/database";

const GetData = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    async function showData() {
      await db
        .ref("Consult")
        .orderByKey()
        .once("value", function (snapshot) {
          const data = [];
          snapshot.forEach((child) => {
            const childKey = child.key;
            const childData = child.val();
            data.push(childData);
          });
          setDoctors(data);
        });
    }
    showData();
  }, []);
  console.log(doctors);
  const newConsult = {
    doctor_state: {
      doctor1: "pending",
    },
    patient_id: 1,
  };
  return (
    <div>
      <p>test get data</p>
      <p>doctors</p>
      <form>
        <button
          onClick={() => {
            //const newPostKey = db.ref("Consults");
            db.ref("Consult/consult100").set(newConsult);
          }}
        ></button>
      </form>
    </div>
  );
};

export default GetData;
