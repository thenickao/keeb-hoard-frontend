import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';

function Footer() {
  return (
    <footer className="navbar navbar-expand-lg bg-body-tertiary footer">
      <div className="container-fluid">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto ">
            <li className="nav-item">
            <Link className="nav-link active" to="https://github.com/thenickao" target="_blank" rel="noopener noreferrer">
                Nick Kao
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;