import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function EditKeyboard() {
  const { id } = useParams();
  const [keyboard, setKeyboard] = useState({});
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8000/keyboard/${id}`, {
      method: "GET",
      mode: "cors",
      headers: {
        origin: "http://localhost:3000",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setKeyboard(data.data);
        setFormData(data.data);
      })
      .catch((error) => {
        console.error("Error fetching keyboard:", error);
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

    fetch(`http://localhost:8000/keyboard/${id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        origin: "http://localhost:3000",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        navigate(`/keyboard/${id}`);
      })
      .catch((error) => {
        console.error("Error updating keyboard:", error);
      });
  };

  if (!keyboard) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="keyboard container">
      <Link to="/keyboard/index" className="btn btn-primary">
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
          <label htmlFor="size">Size:</label>
          <input
            type="text"
            id="size"
            name="size"
            value={formData.size || ""}
            onChange={handleInputChange}
            required
          />
        </div>
        <br></br>
        <div className="form-group">
          <label htmlFor="case_material">Case Material:</label>
          <input
            type="text"
            id="case_material"
            name="case_material"
            value={formData.case_material || ""}
            onChange={handleInputChange}
            required
          />
        </div>
        <br></br>
        <div className="form-group">
          <label htmlFor="connectivity">Connectivity:</label>
          <input
            type="text"
            id="connectivity"
            name="connectivity"
            value={formData.connectivity || ""}
            onChange={handleInputChange}
            required
          />
        </div>
        <br></br>
        <div className="form-group">
          <label htmlFor="backlit">Backlit:</label>
          <input
            type="text"
            id="backlit"
            name="backlit"
            value={formData.backlit || ""}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* <br></br>
        <div className="form-group">
          <label htmlFor="knob">Knob:</label>
          <input
            type="checkbox"
            id="knob"
            name="knob"
            value={formData.knob}
            onChange={handleInputChange}
            required
          />
        </div> */}
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

export default EditKeyboard;