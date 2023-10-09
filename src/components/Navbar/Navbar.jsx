import React from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg position-fixed z-3 w-100">
      <div className="container mx-5">
        <button
          className="navbar-toggler text-white mt-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <i className="fa-solid fa-sliders text-white"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className={[styles.navlink, "nav-link active mt-3"].join(" ")}
                aria-current="page"
                href="#Home"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={[styles.navlink, "nav-link mt-3"].join(" ")}
                href="#About"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className={[styles.navlink, "nav-link mt-3"].join(" ")}
                href="#Skills"
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className={[styles.navlink, "nav-link mt-3"].join(" ")}
                href="#Project"
              >
                Project
              </a>
            </li>
            <li className="nav-item">
              <a
                className={[styles.navlink, "nav-link mt-3"].join(" ")}
                href="#Contect"
              >
                Contect
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
