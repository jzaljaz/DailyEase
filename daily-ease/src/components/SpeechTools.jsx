// src/components/AddUser.js

import React from "react";
import { collection, addDoc } from "firebase/firestore"; // import firestore functions
import { db } from "../firebase"; // import your Firestore database connection

function AddUser() {
  const handleAdd = async () => {
    try {
      await addDoc(collection(db, "users"), {
        name: "Alice",
        role: "caregiver"
      });
      alert("User added!");
    } catch (err) {
      console.error("Error adding document: ", err);
    }
  };

  return (
    <div>
      <h2>Add User</h2>
      <button onClick={handleAdd}>Add a Test User</button>
    </div>
  );
}

export default AddUser;