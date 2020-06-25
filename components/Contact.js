import React, {useState} from 'react';
import './Contact.css';
import Email from '../resources/img/envelope.svg';
const Contact = () => {

    return (
        <React.Fragment>
    
    
    <section class="section-form" >
    <div class = "section-container">      </div>
        <div class = "section-title">
               
                    <h2 className="form-title">문의하기</h2>
               
                </div>
                <a href="mailto:apptocontact@gmail.com?subject=&body=" class="mail-loading"><img src={Email} alt="Email Button"/></a>
                    
              
            </section>
    </React.Fragment>
    );
    
    }
    
    export default Contact;