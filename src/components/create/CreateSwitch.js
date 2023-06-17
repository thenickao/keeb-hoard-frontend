import React, { useState } from "react";
import { Link } from "react-router-dom";

function CreateSwitch() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [facing, setFacing] = useState("");
  const [pins, setPins] = useState("");
  const [actuationForce, setActuationForce] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch("http://localhost:8000/switch", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "origin": "http://localhost:3000"
      },
      body: JSON.stringify({
        name,
        type,
        facing,
        pins,
        actuationForce
      })
    })
      .then(response => response.json())
      .then(data => {
        // Handle success or display error message
        console.log("Switch created:", data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error creating switch:", error);
        setLoading(false);
      });
  };

  return (
    <div className="switch container">
      <Link to="/switch/index" className="btn btn-primary">
        CANCEL
      </Link>
      <br /><br />

      <h1>Create Switch</h1>
      <br />

      {loading ? (
        <div className="loading">Creating switch...</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Gateron KS-3 Milky Yellow Pro"
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
            placeholder="Linear/Tactile/Clicky"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          />
<br></br><br></br>
          <label htmlFor="facing">Facing:</label>
          <input
            type="text"
            id="facing"
            placeholder="North/South"
            value={facing}
            onChange={(e) => setFacing(e.target.value)}
            required
          />
<br></br><br></br>
          <label htmlFor="pins">Pins:</label>
          <input
            type="number"
            id="pins"
            placeholder="3/5"
            value={pins}
            onChange={(e) => setPins(e.target.value)}
            required
          />
<br></br><br></br>
          <label htmlFor="actuationForce">Actuation Force(g):</label>
          <input
            type="number"
            id="actuationForce"
            placeholder="45/55/60/80"
            value={actuationForce}
            onChange={(e) => setActuationForce(e.target.value)}
            required
          />
<br></br><br></br>
          <button type="submit" className="btn btn-primary">
            Send this Switch to the Hoard
          </button>
        </form>
      )}
    </div>
  );
}

export default CreateSwitch;