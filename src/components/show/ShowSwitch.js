import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate} from "react-router-dom"

function ShowSwitch() {
  const { id } = useParams()  
  const [kSwitch, setSwitch] = useState();
  const navigate = useNavigate();
    
    useEffect(() => {
      fetch(`http://localhost:8000/switch/${id}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "origin": "http://localhost:3000"
        }
      })
        .then(response => response.json())
        .then(data => {
          setSwitch(data.data);
        })
        .catch(error => {
          console.error("Error fetching kSwitch:", error);
        });
    }, [id]);

    const handleDelete = () => {
        fetch(`http://localhost:8000/switch/${id}`, {
          method: "DELETE",
          mode: "cors",
          headers: {
            "origin": "http://localhost:3000"
          }
        })
          .then(response => {
            navigate("/switch/index");
  
          })
          .catch(error => {
            console.error("Error deleting switch:", error);
          });
      };

    if (!kSwitch) {
      return <div className="loading">Loading . . .</div>;
    }
    return (
        <div className="kSwitch container">
            <Link to="/switch/index" className="btn btn-primary">
              Back to All Switches
            </Link>
            <br></br><br></br>
            <h1>{kSwitch.name}</h1>
            <br></br>
            <p>Type: {kSwitch.type}</p>
            <p>Facing: {kSwitch.facing}</p>
            <p>Pins: {kSwitch.pins}</p>
            <p>Actuation Force: {kSwitch.actuation_force}g</p>
            <br></br>
            <div className="button-group">
              <Link to={`/switch/${id}/edit`} className="btn btn-primary">
                Edit
              </Link>
              <button className="btn btn-danger delete-button" onClick={handleDelete}>
                Delete
              </button>
            </div>
        </div>
    )
}

export default ShowSwitch