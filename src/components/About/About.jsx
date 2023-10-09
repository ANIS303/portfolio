import React from 'react'
import styles from './About.module.css'
import imgp from '../../assest/Untitled-2.png'
import { Typewriter } from 'react-simple-typewriter'

export default function About() {
  return (
    <>
      <div className={styles.boxAbout} id='About'>
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center flex-column">
            <div className={[styles.widimg, "col-md-6  text-center "].join(" ")}>
              <h2 className='coltext'>About</h2>
              <img className='w-50 mt-5' src={imgp} alt="" />
            </div>
            <div className="col-md-6 pb-5">
              <p className='pb-5'> <Typewriter words={['I am Frontend web developer, I am passionate about creating engaging user interfaces and implementing interactive elements for websites and web applications. I focus on the presentation layer of web development, where I work with HTML, CSS, JavaScript and react to design and code layouts, styles, and behaviors that enhance the overall user experience.While I may be considered junior, I am dedicated to delivering high-quality work and ensuring that websites are responsive and optimized for various devices']}
                loop={1}
                cursor
                cursorStyle='|'
                typeSpeed={50}
                delaySpeed={9000} /></p>

            </div>

          </div>
        </div>
      </div>







    </>
  )
}
