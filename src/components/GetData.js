import React, { useState, useEffect } from "react";
import db from "../server/database";

const GetData = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
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
            data.push(childData);
          });
          setDoctors(data);
        });
    }
    showData();
  }, []);
  console.log(doctors);
  const newConsult = {
    doctor1: "pending",
    doctor2: "pending",
    doctor3: "pending",
    doctor4: "pending",
    patient_id: 2,
  };

  const consultUpdate = {
    doctor3: "accept",
  };
  return (
    <div>
      <p>test get data</p>
      <p>doctors</p>
      <form>
        <button
          onClick={() => {
            //post new Consult data.
            db.ref("Consult/consult100").set(newConsult);
          }}
        >
          set new Cosultation
        </button>
      </form>
      <form>
        <button
          onClick={() => {
            //update Consult data.
            db.ref("Consult/consult100").update(consultUpdate);
          }}
        >
          update consultation status
        </button>
      </form>
      <form>
        <button
          onClick={() => {
            //delete Consult data.
            db.ref("Consult/consult100").remove();
          }}
        >
          delete consultation
        </button>
      </form>
    </div>
  );
};

export default GetData;
