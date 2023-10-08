import React from 'react'
import styles from './Home.module.css'
import { Typewriter } from 'react-simple-typewriter'
import resume  from '../../assest/resume/cv.pdf'
export default function Home() {



  
  return (
    <> 
    
    <div className={[styles.boxHome ," flex-column"].join(" ")} id='Home'>
      <div className={[styles.homeedite,"container"].join(" ")}>
<div className="row text-white">
<h1 className={styles.sizing}>Mostafa Anis</h1>
      <h3>I'm FrontEnd <span className={styles.cloText}>  <Typewriter  words={['Devolper', 'React']}
    loop={200}
    cursor
    cursorStyle='|'
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1000} /></span></h3>
    </div>
</div>  
<div className="container d-flex justify-content-center   w-25">

    <button type="button" className={styles.btedite}><a href={resume} download="Anis-resume"  target="_blank"
        rel="noreferrer" className='text-white text-decoration-none'>resume</a></button>


</div>
<div className="container mt-3  ">
  <div className="row d-flex justify-content-center align-items-center flex-column">
  <div className={[styles.edite,"col-md-5 pt-4   text-center"].join(" ")}>
    <a href="https://www.linkedin.com/in/mostafa-anis-301b98258" target='_blank'><i class="fa-brands fa-linkedin-in   pe-2 rounded-circle" ></i></a>
   <a href="https://www.facebook.com/ANIS.MA30/?mibextid=lqqj4d" target='_blank'> <i class="fa-brands fa-facebook   pe-2"  ></i></a>
    <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target='_blank'><i class="fa-brands fa-google  pe-2"></i></a>
        <a href="https://github.com/ANIS303" target='_blank'><i class="fa-brands fa-github" ></i></a>

    </div>

  </div>
</div>
      </div>
    
    </>
  )
}
