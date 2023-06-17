import React, { useEffect, useState } from 'react';
import { Link} from "react-router-dom"

function Stabilizers() {
  const [stabilizers, setStabilizers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/stabilizer/index', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'origin': 'http://localhost:3000'
      }
    })
      .then(response => response.json())
      .then(data => {
        const sortedStabilizers = data.data.sort((a, b) => a.name.localeCompare(b.name));
        setStabilizers(sortedStabilizers);
      })
      .catch(error => {
        console.error('Error fetching stabilizers:', error);
      });
  }, []);

  return (
    <div className="stabilizers container">
      <h1>Stabilizers</h1>
      <br></br>
      <Link to="/stabilizer/create" className="btn btn-primary">
              Add a Stabilizer
      </Link>
      <br></br><br></br>
      {stabilizers.map(stabilizerItem => (
        <div key={stabilizerItem.id} className="stabilizer-item">
          <h3>
            <a href={`/stabilizer/${stabilizerItem.id}`}>{stabilizerItem.name}</a>
          </h3>
        </div>
      ))}
    </div>
  );
}

export default Stabilizers