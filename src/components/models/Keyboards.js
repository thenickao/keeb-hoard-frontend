import React, { useEffect, useState } from 'react';
import { Link} from "react-router-dom"


function Keyboards() {
  const [keyboards, setKeyboards] = useState([]);

  useEffect(() => {
    
    fetch('http://localhost:8000/keyboard/index', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'origin': 'http://localhost:3000'
      }
    })
      .then(response => response.json())
      .then(data => {
        const sortedKeyboards = data.data.sort((a, b) => a.name.localeCompare(b.name));
        setKeyboards(sortedKeyboards);
      })
      .catch(error => {
        console.error('Error fetching keyboards:', error);
      });
  }, []);

  return (
    <div className="keyboards container">
      <h1>Keyboards</h1>
      <br></br>
      <Link to="/keyboard/create" className="btn btn-primary">
              Add a Keyboard
      </Link>
      <br></br><br></br>
      {keyboards.map(keyboard => (
        <div key={keyboard.id} className="keyboard-item">
          <h3>
            <a href={`/keyboard/${keyboard.id}`}>{keyboard.name}</a>
          </h3>
        </div>
      ))}
    </div>
  );
}

export default Keyboards;

        // fetch("/api/v1/keyboards")
        //     .then(res => res.json())
        //     .then(data => {
        //         setKeyboards(data)
        //         console.log(data)
        //     })
        //     .catch(err => console.log(err))

        // { {keyboards.map((keyboard) => (
//               <ShowKeyboards
//                 key={keyboard.id} // Add a unique key prop for each rendered component
//                 name={keyboard.name}
//                 size={keyboard.size}
//                 case_material={keyboard.case_material}
//                 connectivity={keyboard.connectivity}
//                 backlit={keyboard.backlit}
//                 knob={keyboard.knob}
//               />
//             ))} }
//             {keyboards.length > 0 ? (
//               <ShowKeyboards keyboard={keyboards[0]} />
//             ) : (
//               <p>No keyboards found</p>
//             )}