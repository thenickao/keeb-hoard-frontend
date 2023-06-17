import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function EditStabilizer() {
  const { id } = useParams();
  const [stabilizer, setStabilizer] = useState({});
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8000/stabilizer/${id}`, {
      method: "GET",
      mode: "cors",
      headers: {
        origin: "http://localhost:3000",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setStabilizer(data.data);
        setFormData(data.data);
      })
      .catch((error) => {
        console.error("Error fetching stabilizer:", error);
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

    fetch(`http://localhost:8000/stabilizer/${id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        origin: "http://localhost:3000",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        navigate(`/stabilizer/${id}`);
      })
      .catch((error) => {
        console.error("Error updating stabilizer:", error);
      });
  };

  if (!stabilizer) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="stabilizer container">
      <Link to="/stabilizer/index" className="btn btn-primary">
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
          <label htmlFor="type">Type:</label>
          <input
            type="text"
            id="type"
            name="type"
            value={formData.type || ""}
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

export default EditStabilizer;