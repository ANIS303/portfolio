import React from 'react'
import styles from './Skills.module.css'
import { CircularProgressBar } from "react-percentage-bar";
// import { LinearProgressBar } from "react-percentage-bar";
import ts from '../../assest/ts.png'
import jq from '../../assest/jq.png'

export default function Skills() {



  return (
    <>
<div className={styles.boxSkills} id='Skills'>
<div className="container py-5 ">
  <div className="row g-5">
    <h2 className=' coltext text-center'> Skills</h2>
    <div className="col-md-3 ">
    <div class="outer-circle  ">
    <CircularProgressBar 
    backgroundColor={"transparent"}
    percentage={90}
    startPosition={250}
    color={"#e44d26"}
    trackColor={"transparent"}
    radius={"100%"}
  showPercentage={false}>
<div className="circle html"><i class="fa-brands fa-html5 "></i><span className='h4 text-white'>Html</span></div></CircularProgressBar>
</div>

    </div>
    <div className="col-md-3">
    <div class="outer-circle">
    <CircularProgressBar 
        percentage={90}
        startPosition={360}

    color={"#379bd6"}
    trackColor={"transparent"}
    radius={"100%"}
  showPercentage={false}>
<div className="circle css"><i class="fa-brands fa-css3-alt "></i><span className='h4 text-white'>css</span></div></CircularProgressBar></div>

    </div>


    <div className="col-md-3">
    <div class="outer-circle">
    <CircularProgressBar 
    backgroundColor={"transparent"}
    startPosition={300}
    percentage={90}

    color={"#6e439d"}
    trackColor={"transparent"}
    radius={"100%"}
  showPercentage={false}>
<div className="circle bootstrap"><i class="fa-brands fa-bootstrap "></i><span className='h4 text-white'>Bootstrap</span></div></CircularProgressBar></div>

    </div>

    <div className="col-md-3">
    <div class="outer-circle">
    <CircularProgressBar 
    backgroundColor={"transparent"}
    percentage={90}
        startPosition={120}

    color={"#e4a126"}
    trackColor={"transparent"}
    radius={"100%"}
  showPercentage={false}>
<div className="circle js"><i class="fa-brands fa-square-js "></i><span className='h4 text-white'>Javascript</span></div></CircularProgressBar></div>

    </div>
    <div className="col-md-3">
    <div class="outer-circle">
    <CircularProgressBar 
    backgroundColor={"transparent"}
    color={"#cc6698"}
    trackColor={"transparent"}
    percentage={90}

    radius={"100%"}
    // padding={65}
  showPercentage={false}>
<div className="circle sass"><i class="fa-brands fa-sass "></i><span className='h4 text-white'>Sass</span></div></CircularProgressBar></div>

    </div>

    <div className="col-md-3">
    <div class="outer-circle">
    <CircularProgressBar 
    backgroundColor={"transparent"}
    color={"#007acc"}
    trackColor={"transparent"}
    percentage={90}
    startPosition={200}

    radius={"100%"}
    // padding={65}
  showPercentage={false}>
<div className="circle fa-ts"><img className='w-50' src={ts} alt="Typecript" /><span className='h4 text-white'>Typecript</span></div></CircularProgressBar></div>

    </div>

    <div className="col-md-3">
    <div class="outer-circle">
    <CircularProgressBar 
    backgroundColor={"transparent"}
    percentage={90}
    startPosition={300}

    color={"white"}
    trackColor={"transparent"}
    radius={"100%"}
    // padding={65}
  showPercentage={false}>
<div className="circle jq"><img className='w-50' src={jq} alt="jquery" /></div></CircularProgressBar></div>

    </div>

    <div className="col-md-3">
    <div class="outer-circle">
    <CircularProgressBar 
    backgroundColor={"transparent"}
    percentage={90}
    color={"#076677"}
    trackColor={"transparent"}
    radius={"100%"}
    // padding={65}
  showPercentage={false}>
<div className="circle react"><i class="fa-brands fa-react "></i><span className='h4 text-white'>react</span></div></CircularProgressBar></div>

    </div>

  </div>
</div>
</div>
    
    
    </>
  )
}
