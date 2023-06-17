import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/main.css'

import Header from "./components/Header"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./components/Home"

import Keyboards from "./components/models/Keyboards"
// import Components from "./components/Components"
import Switches from "./components/models/Switches"
import Stabilizers from "./components/models/Stabilizers"
import Keycaps from "./components/models/Keycaps"

import ShowKeyboard from "./components/show/ShowKeyboard"
import ShowSwitch from "./components/show/ShowSwitch"
import ShowStabilizer from "./components/show/ShowStabilizer"
import ShowKeycap from "./components/show/ShowKeycap"

import CreateKeyboard from "./components/create/CreateKeyboard"
import CreateSwitch from "./components/create/CreateSwitch"
import CreateStabilizer from "./components/create/CreateStabilizer"
import CreateKeycap from "./components/create/CreateKeycap"

import EditKeyboard from "./components/edit/EditKeyboard"
import EditSwitch from "./components/edit/EditSwitch"
import EditStabilizer from "./components/edit/EditStabilizer"
import EditKeycap from "./components/edit/EditKeycap"

import LogIn from "./components/LogIn"
import Register from "./components/Register"


function App() {
  return (
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/keyboard/index" element={<Keyboards />} />
            <Route path="/keyboard/:id" element={<ShowKeyboard />} />
            <Route path="/keyboard/create" element={<CreateKeyboard />} />
            <Route path="/keyboard/:id/edit" element={<EditKeyboard />} />

            <Route path="/switch/index" element={<Switches />} />
            <Route path="/switch/:id" element={<ShowSwitch />} />
            <Route path="/switch/create" element={<CreateSwitch />} />
            <Route path="/switch/:id/edit" element={<EditSwitch />} />

            <Route path="/stabilizer/index" element={<Stabilizers />} />
            <Route path="/stabilizer/:id" element={<ShowStabilizer />} />
            <Route path="/stabilizer/create" element={<CreateStabilizer />} />
            <Route path="/stabilizer/:id/edit" element={<EditStabilizer />} />

            <Route path="/keycap/index" element={<Keycaps />} />
            <Route path="/keycap/:id" element={<ShowKeycap />} />
            <Route path="/keycap/create" element={<CreateKeycap />} />
            <Route path="/keycap/:id/edit" element={<EditKeycap />} />

            <Route path="/login" element={<LogIn />} />
            <Route path="/register" element={<Register />} />
            {/* <Route path="/components" element={<Components />} /> */}
          </Routes>
          <Footer />
        </div>
      </Router>
  );
}

export default App;

  // const [display, setDisplay] = useState('')
  // useEffect(() => {
  //   fetch('/api/v1/keyboards')
  //   .then(response => response.json())
  //   .then(data => {console.log(data)
  //     setDisplay(data.display)
  //   })
  //   .catch(error => console.log(error))

  // }, [])