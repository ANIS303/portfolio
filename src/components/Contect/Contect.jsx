import React, { useRef } from 'react'
import styles from './Contect.module.css'
import emailjs from '@emailjs/browser';
export default function Contect() {


 
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_2o9h7x6', 'template_k720zdm', form.current, 'oAi5x16DdxNT4WCQO')
        .then((result) => {
          console.log(result.text);
          clearFields();
        }, (error) => {
          console.log(error.text);
        });
    };
  
    const clearFields = () => {
      document.getElementById('email').value = '';
      document.getElementById('textarea').value = '';
    };
  
    return (
      <>
        <div className={styles.boxContcet} id='Contect'>
          <div className="container py-5">
            <div className="row justify-content-between align-items-center ">
              <h2 className='text-center text-white'> Connect me <span className='coltext'>Now !</span></h2>
              <div className="col-md-6 mx-auto mt-5">
                <div className="form-container">
                  <form className="form" ref={form} onSubmit={sendEmail}>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input required name="from_name" id="email" type="email" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="textarea">How Can We Help You?</label>
                      <textarea required cols="50" rows="10" id="textarea" name="message"></textarea>
                    </div>
                    <button type="submit" className="form-submit-btn" value="send">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="end mt-5">
            <h2 className='text-uppercase H3 text-center pt-5 text-white'><span className='coltext'>thank you</span> to visit my portfolio</h2>
          </div>
        </div>
    
    
    
    
    </>
  )
}
