import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate} from "react-router-dom"

function ShowKeycap() {
  const { id } = useParams()  
  const [keycap, setKeycap] = useState();
  const navigate = useNavigate();
    
    useEffect(() => {
      fetch(`http://localhost:8000/keycap/${id}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "origin": "http://localhost:3000"
        }
      })
        .then(response => response.json())
        .then(data => {
          setKeycap(data.data);
        })
        .catch(error => {
          console.error("Error fetching keycap:", error);
        });
    }, [id]);

    const handleDelete = () => {
        fetch(`http://localhost:8000/keycap/${id}`, {
          method: "DELETE",
          mode: "cors",
          headers: {
            "origin": "http://localhost:3000"
          }
        })
          .then(response => {
            navigate("/keycap/index");
  
          })
          .catch(error => {
            console.error("Error deleting keycap:", error);
          });
      };

    if (!keycap) {
      return <div className="loading">Loading . . .</div>;
    }
    return (
        <div className="keycap container">
            <Link to="/keycap/index" className="btn btn-primary">
              Back to All Keycaps
            </Link>
            <br></br><br></br>
            <h1>{keycap.name}</h1>
            <br></br>
            <p>Material: {keycap.material}</p>
            <p>Profile: {keycap.profile}</p>
            <p>Legend: {keycap.legend}</p>
            <br></br>
            <div className="button-group">
              <Link to={`/keycap/${id}/edit`} className="btn btn-primary">
                Edit
              </Link>
              <button className="btn btn-danger delete-button" onClick={handleDelete}>
                Delete
              </button>
            </div>
        </div>
    )
}

export default ShowKeycap