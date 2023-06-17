import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate} from "react-router-dom"

function ShowStabilizer() {
  const { id } = useParams()  
  const [stabilizer, setStabilizer] = useState();
  const navigate = useNavigate();
    
    useEffect(() => {
      fetch(`http://localhost:8000/stabilizer/${id}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "origin": "http://localhost:3000"
        }
      })
        .then(response => response.json())
        .then(data => {
          setStabilizer(data.data);
        })
        .catch(error => {
          console.error("Error fetching stabilizer:", error);
        });
    }, [id]);

    const handleDelete = () => {
        fetch(`http://localhost:8000/stabilizer/${id}`, {
          method: "DELETE",
          mode: "cors",
          headers: {
            "origin": "http://localhost:3000"
          }
        })
          .then(response => {
            navigate("/stabilizer/index");
  
          })
          .catch(error => {
            console.error("Error deleting stabilizer:", error);
          });
      };

    if (!stabilizer) {
      return <div className="loading">Loading . . .</div>;
    }
    return (
        <div className="stabilizer container">
            <Link to="/stabilizer/index" className="btn btn-primary">
              Back to All Stabilizers
            </Link>
            <br></br><br></br>
            <h1>{stabilizer.name}</h1>
            <br></br>
            <p>Type: {stabilizer.type}</p>
            <br></br>
            <div className="button-group">
              <Link to={`/stabilizer/${id}/edit`} className="btn btn-primary">
                Edit
              </Link>
              <button className="btn btn-danger delete-button" onClick={handleDelete}>
                Delete
              </button>
            </div>
        </div>
    )
}

export default ShowStabilizer