import React from 'react'
import PowerButton from '../subComponents/PowerButton';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import { Facebook, Github, Twitter, YouTube } from "../components/AllSvgs";

import './stylecontact.css'
  const ContactForm = () => {
    const handleSubmit = async (event) => {
      event.preventDefault();
      // You can handle form submission logic here
      const formData = new FormData(event.target);
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      if (response.ok) {
        // Handle success (show success message or redirect)
        alert('Form submitted successfully!');
        event.target.reset()
      } else {
        // Handle error (show error message)
        console.error('Form submission failed.');
        event.target.reset()
      
      }
    };
  
    return (
      <>
      <section id="contact" className="contact">
        <div className="container mt-5 ">
  
          <div className="section-title"><br>
          </br>
            <h2>Contact</h2>
        
          </div>
  
          <div className="row mt-3">
  
            <div className="col-md-6 d-flex align-items-stretch">
              <div className="info-box">
                <i className="bx bx-map"></i>
                <h3>My Address</h3>
                <p>Biharipura, Ghaziabad, Uttar Pradesh</p>
              </div>
            </div>
  
            <div className="col-md-6 mt-3 mt-md-0 d-flex align-items-stretch">
              <div className="info-box">
                <i className="bx bx-share-alt"></i>
                <h3>Social Profiles</h3>
                <div className="social-links">
               <YouTube
                  width={25}
                  height={25}
                 />
               <Facebook
                  width={25}
                  height={25}
                 />
               <Github
                  width={25}
                  height={25}
                
                 />
               <Twitter
                  width={25}
                  height={25}
                 />
                </div>
              </div>
            </div>
  
            <div className="col-md-6 mt-3 d-flex align-items-stretch">
              <div className="info-box">
                <i className="bx bx-envelope"></i>
                <h3>Email Me</h3>
                <p>parwatimaurya9721@gmail.com</p>
              </div>
            </div>
  
            <div className="col-md-6 mt-3 d-flex align-items-stretch">
              <div className="info-box">
                <i className="bx bx-phone-call"></i>
                <h3>Call Me</h3>
                <p>9140400758</p>
              </div>
            </div>
  
          </div>
  
          <form action="https://api.web3forms.com/submit" method="POST" role="form" className="php-email-form mt-4" onSubmit={handleSubmit}>
            <div className="row">
              <input type="hidden" name="access_key" value="eb7d49f0-e422-41cf-be29-1b6994bcb258" />
              <div className="col-md-6 form-group">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
              </div>
              <div className="col-md-6 form-group mt-3 mt-md-0">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
              </div>
            </div>
            <div className="form-group mt-3">
              <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
            </div>
            <div className="form-group mt-3">
              <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
            </div>
      
            <div className="text-center mb-2 mt-2"><button type="submit">Send Message</button></div>
          </form>
  
        </div>
      </section>
      <LogoComponent theme='dark'/>
<SocialIcons theme='dark'/>
<PowerButton />
      </>
      
    );
  };
  
  export default ContactForm;
  