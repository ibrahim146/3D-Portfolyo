import React from 'react'
import "./contact.css"
const Contact = () => {
    return (
        <div className='contact_container'>
            
            <div className='contact_area'>
            <div className='contact_form'>
                    <div className="form-container">
                        <div className="form">
                            <span className="heading" id='Contact'>Contact us</span>
                            <input placeholder="Name" type="text" className="input" />
                            <input placeholder="Email" id="mail" type="email" className="input" />
                            <textarea placeholder="Say Hello" rows="10" colsnaclassName="30" id="message" name="message" class="textarea"></textarea>
                            <div className="button-container">
                                <div className="send-button">Send</div>
                                <div className="reset-button-container">
                                    <div id="reset-btn" className="reset-button">Reset</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='contact_3D'>
                   
                   <div className="area_3D">
                       <div className="obj">
                           <div className="objchild">
                               <span className="inn1"></span>
                               <span className="inn2"></span>
                               <span className="inn3"></span>
                               <span className="inn4"></span>
                               <span className="inn5"></span>
                               <span className="inn6"></span>
                           </div>
                       </div>
                   </div>
               
           </div>
               
            </div>
        </div>
    )
}

export default Contact