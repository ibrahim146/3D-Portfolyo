import React, { useRef } from 'react';
import "./contack.css";
import emailjs from '@emailjs/browser';
import Contack_bax from './Contack_bax';
function Contack() {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_allypcw', 'template_9i36ub5', form.current, 'aTGXNX5UuWlL1wWGr')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  }

  return (
    <div className='content_container'>
      <div className='iletişim_text'>
        <div className="carddd" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <span className="titlee" id='contack'>CONTACK</span>
          <form ref={form} onSubmit={sendEmail} className="form">
            <div className="group">
              <input placeholder='' type="text" required="zorunlu alan" name='user_name' />
              <label htmlFor="name">NAME</label>
            </div>
            <div className="group">
              <input placeholder='' type="text" required="zorunlu alan" name='user_surname' />
              <label htmlFor="name">SURNAME</label>
            </div>
            <div className="group">
              <input placeholder="" type="email" id="email" name="user_email" required="zorunlu alan" />
              <label htmlFor="">EMAİL</label>
            </div>
            <div className="group">
              <textarea placeholder="" id="comment" name="message" rows="5" required="zorunlu alan"></textarea>
              <label htmlFor="comment">YOUR MESSAGE...</label>
            </div>
            <button type="submit">SEND</button>
          </form>
        </div>
      </div>


      <div className='contack_bax'>
        <Contack_bax />

      </div>

    </div>
  )
}

export default Contack