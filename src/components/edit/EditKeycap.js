import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function EditKeycap() {
  const { id } = useParams();
  const [keycap, setKeycap] = useState({});
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8000/keycap/${id}`, {
      method: "GET",
      mode: "cors",
      headers: {
        origin: "http://localhost:3000",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setKeycap(data.data);
        setFormData(data.data);
      })
      .catch((error) => {
        console.error("Error fetching keycap:", error);
      });
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`http://localhost:8000/keycap/${id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        origin: "http://localhost:3000",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        navigate(`/keycap/${id}`);
      })
      .catch((error) => {
        console.error("Error updating keycap:", error);
      });
  };

  if (!keycap) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="keycap container">
      <Link to="/keycap/index" className="btn btn-primary">
        CANCEL
      </Link>
      <br /><br />
      <br />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name || ""}
            onChange={handleInputChange}
            required
            style={{ width: "350px" }}

          />
        </div>
        <br></br>
        <div className="form-group">
          <label htmlFor="material">Material:</label>
          <input
            type="text"
            id="material"
            name="material"
            value={formData.material || ""}
            onChange={handleInputChange}
            required
          />
        </div>
        <br></br>
        <div className="form-group">
          <label htmlFor="profile">Profile:</label>
          <input
            type="text"
            id="profile"
            name="profile"
            value={formData.profile || ""}
            onChange={handleInputChange}
            required
          />
        </div>
        <br></br>
        <div className="form-group">
          <label htmlFor="legend">Legend:</label>
          <input
            type="text"
            id="legend"
            name="legend"
            value={formData.legend || ""}
            onChange={handleInputChange}
            required
          />
        </div>
        <br></br><br></br>
        <div className="button-group">
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditKeycap;