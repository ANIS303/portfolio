import React from 'react'
import styles from './Project.module.css'
import movies from '../../assest/movies.png'
import market from '../../assest/market.png'
import food from '../../assest/food.png'
import games from '../../assest/games.png'

import crud from '../../assest/crud.png'
import todo from '../../assest/ToDo.png'

export default function Project() {
  return (
    <>
      <div className={styles.boxProject} id='Project'>
        <div className="container pt-5  ">
          <div className="row gap-2 g2 justify-content-center">
            <h2 className=' text-center coltext my-3 pb-2'>Project</h2>
            <div className="col-md-3 ">
              <div className="card bg-transparent">
                <div className={styles.cardImage}>
                <a href="https://movies-anis303.vercel.app/" target='_blank' class="  ">  <img src={movies} alt="" /></a>

                  <div className={styles.imgLayer}>    <a href="https://movies-anis303.vercel.app/" target='_blank' class="  ">visit</a>
                  </div>
                </div>
                <div class="card-body">
                  <h5 class="card-title">MOVIES</h5>
                  <p class="card-text">Use:React Libraries(Framework) ,HTML,CSS, Bootstrap , java-script, Ajax .</p>

                </div>

              </div>
            </div>
            <div className="col-md-3">
  <div className="card bg-transparent">
    <div className={styles.cardImage}>
      <a href="https://anis-e-commerce.vercel.app" target="_blank"><img src={market} alt="" /></a>
      <div className={styles.imgLayer}>
        <a href="https://anis-e-commerce.vercel.app" target="_blank" className="">
          visit
        </a>
      </div>
    </div>
    <div className="card-body">
      <h5 className="card-title">E-Commerce</h5>
      <p className="card-text">
        Use: React Libraries(Framework), HTML, CSS, Bootstrap, JavaScript, Ajax.
      </p>
    </div>
  </div>
</div>


            <div className="col-md-3">
              <div className="card bg-transparent">
                <div className={styles.cardImage}>
                <a href="https://maels-info.vercel.app/" target='_blank' class=""><img src={food} alt="" /></a>
                  <div className={styles.imgLayer}>    <a href="https://maels-info.vercel.app/" target='_blank' class="">visit</a>
                  </div>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Maels-Info</h5>
                  <p class="card-text">Use : HTML,CSS, Bootstrap, java-script,Ajax. </p>

                </div>

              </div>
            </div>

            <div className="col-md-3">
              <div className="card bg-transparent">
                <div className={styles.cardImage}>
                <a href="https://games-red-six.vercel.app" target='_blank' className="">   <img src={games} alt="" /></a>

                  <div className={styles.imgLayer}>    <a href="https://games-red-six.vercel.app" target='_blank' className="mt-3">visit</a>
                  </div>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Games</h5>
                  <p class="card-text">Use : HTML,CSS, Bootstrap, java-script,Ajax. </p>

                </div>

              </div>
            </div>

            <div className="col-md-3">
              <div className="card bg-transparent">
                <div className={styles.cardImage}>
                <a href="https://crud-anis303.vercel.app" target='_blank' class=""> <img src={crud} alt="" /></a>

                  <div className={styles.imgLayer}>    <a href="https://crud-anis303.vercel.app" target='_blank' class="">visit</a>
                  </div>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Crud</h5>
                  <p class="card-text">use:html/css/js </p>

                </div>

              </div>
            </div>

            <div className="col-md-3">
              <div className="card bg-transparent">
                <div className={styles.cardImage}>
                <a href="https://todolist-ts-rho.vercel.app" target='_blank' class="">  <img src={todo} alt="" /></a>

                  <div className={styles.imgLayer}>    <a href="https://todolist-ts-rho.vercel.app" target='_blank' class="">visit</a>
                  </div>
                </div>
                <div class="card-body">
                  <h5 class="card-title">ToDo list</h5>
                  <p class="card-text">use:html/css/js </p>

                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}
