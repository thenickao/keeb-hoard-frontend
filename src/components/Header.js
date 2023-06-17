import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logoImage from "../styles/khlogo.jpg"
import '../styles/main.css'

function Header() {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false)
	const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  	}
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<Link className="navbar-brand active" to="/">
					<img src={logoImage} alt="Keeb Hoard" className="logo-img"/>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					onClick={toggleDropdown}
					aria-expanded={isDropdownOpen}
					>
					<span className="navbar-toggler-icon"></span>
					</button>
					<div className={`collapse navbar-collapse ${isDropdownOpen ? 'show' : ''}`}>
						<ul className="navbar-nav">
							{/* Navigation options */}
						</ul>
					</div>
					{/* <div
					className={`collapse navbar-collapse ${isDropdownOpen ? 'show' : ''}`}
					></div> */}
				{/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button> */}
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link active" to="/login">Log In</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link active" to="/register">Register</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link active" to="/keyboard/index">Keyboards</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link active" to="/keyboards/<id>"></Link>
						</li>
						<li className="nav-item dropdown">
							<button
								className="nav-link dropdown-toggle active"
								onClick={toggleDropdown}
								aria-expanded={isDropdownOpen}
							>
								Components
							</button>
							<ul
								className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}
							>
							{/* <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Components</a>
							<ul className="dropdown-menu"> */}
								<li><Link className="dropdown-item" to="/switch/index">Switches</Link></li>
								<li><Link className="dropdown-item" to="/stabilizer/index">Stabilizers</Link></li>
								<li><Link className="dropdown-item" to="/keycap/index">Keycaps</Link></li>
							</ul>
						</li>
						<li className="nav-item">
							<Link className="nav-link active" to="/user/logout">Log Out</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Header;