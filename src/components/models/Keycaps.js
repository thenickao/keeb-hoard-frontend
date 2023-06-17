import React, { useEffect, useState } from 'react';
import { Link} from "react-router-dom"

function Keycaps() {
  const [keycaps, setKeycaps] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/keycap/index', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'origin': 'http://localhost:3000'
      }
    })
      .then(response => response.json())
      .then(data => {
        const sortedKeycaps = data.data.sort((a, b) => a.name.localeCompare(b.name));
        setKeycaps(sortedKeycaps);
      })
      .catch(error => {
        console.error('Error fetching keycaps:', error);
      });
  }, []);

  return (
    <div className="keycaps container">
      <h1>Keycaps</h1>
      <br></br>
      <Link to="/keycap/create" className="btn btn-primary">
              Add a Keycap Set
      </Link>
      <br></br><br></br>
      {keycaps.map(keycapItem => (
        <div key={keycapItem.id} className="keycap-item">
          <h3>
            <a href={`/keycap/${keycapItem.id}`}>{keycapItem.name}</a>
          </h3>
        </div>
      ))}
    </div>
  );
}

export default Keycaps