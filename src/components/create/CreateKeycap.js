import React, { useState } from "react";
import { Link } from "react-router-dom";

function CreateKeycap() {
  const [name, setName] = useState("");
  const [material, setMaterial] = useState("");
  const [profile, setProfile] = useState("");
  const [legend, setLegend] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch("http://localhost:8000/keycap", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "origin": "http://localhost:3000"
      },
      body: JSON.stringify({
        name,
        material,
        profile,
        legend
      })
    })
      .then(response => response.json())
      .then(data => {
        // Handle success or display error message
        console.log("Keycap created:", data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error creating keycap:", error);
        setLoading(false);
      });
  };

  return (
    <div className="keycap container">
      <Link to="/keycap/index" className="btn btn-primary">
        CANCEL
      </Link>
      <br /><br />

      <h1>Create Keycap</h1>
      <br />

      {loading ? (
        <div className="loading">Creating keycap...</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="YMDK Pudding Keycaps"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: "350px" }}
          />
<br></br><br></br>
          <label htmlFor="material">Material:</label>
          <input
            type="text"
            id="material"
            placeholder="PBT/ABS"
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
            required
          />
<br></br><br></br>
          <label htmlFor="profile">Profile:</label>
          <input
            type="text"
            id="profile"
            placeholder="Cherry/OEM/SA"
            value={profile}
            onChange={(e) => setProfile(e.target.value)}
            required
          />
<br></br><br></br>
          <label htmlFor="legend">Legend:</label>
          <input
            type="text"
            id="legend"
            placeholder="Double-Shot/Dye-Sub"
            value={legend}
            onChange={(e) => setLegend(e.target.value)}
            required
          />
            <br></br><br></br>
          <button type="submit" className="btn btn-primary">
            Send this Keycap to the Hoard
          </button>
        </form>
      )}
    </div>
  );
}

export default CreateKeycap;