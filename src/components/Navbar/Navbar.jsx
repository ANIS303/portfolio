import React from 'react'
import styles from './Navbar.module.css'
export default function Navbar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg position-fixed z-3 w-100">
  <div class="container  mx-5">
    <button class="navbar-toggler text-white " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class=" "><i class="fa-solid fa-sliders text-white" ></i></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ">
        <li class="nav-item  ">
          <a class={[styles.navlink,"nav-link active mt-3"].join(" ")} aria-current="page" href="#Home">Home</a>
        </li>
        <li class="nav-item">
          <a class={[styles.navlink,"nav-link  mt-3"].join(" ")} href="#About">About</a>
        </li>
        <li class="nav-item">
          <a class={[styles.navlink,"nav-link mt-3 "].join(" ")} href="#Skills">Skills</a>
        </li>
        <li class="nav-item">
          <a class={[styles.navlink,"nav-link mt-3 "].join(" ")} href="#Project">Project</a>
        </li>

        <li class="nav-item">
          <a class={[styles.navlink,"nav-link mt-3 "].join(" ")} href="#Contect">Contect</a>
        </li>


      </ul>

    </div>

  </div>
</nav>
    </>
  )
}
