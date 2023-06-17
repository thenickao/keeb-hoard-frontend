import React, { useState } from "react";
import { Link } from "react-router-dom";

function CreateStabilizer() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch("http://localhost:8000/stabilizer", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "origin": "http://localhost:3000"
      },
      body: JSON.stringify({
        name,
        type
      })
    })
      .then(response => response.json())
      .then(data => {
        // Handle success or display error message
        console.log("Stabilizer created:", data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error creating stabilizer:", error);
        setLoading(false);
      });
  };

  return (
    <div className="stabilizer container">
      <Link to="/stabilizer/index" className="btn btn-primary">
        CANCEL
      </Link>
      <br /><br />

      <h1>Create Stabilizer</h1>
      <br />

      {loading ? (
        <div className="loading">Creating stabilizer...</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Durock V2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: "350px" }}
          />
<br></br><br></br>
          <label htmlFor="type">Type:</label>
          <input
            type="text"
            id="type"
            placeholder="Screw-In/Plate-Mount"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          />
<br></br><br></br>
          <button type="submit" className="btn btn-primary">
            Send this Stabilizer to the Hoard
          </button>
        </form>
      )}
    </div>
  );
}

export default CreateStabilizer;