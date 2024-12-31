import React from 'react'
import { Element } from 'react-scroll'
import './ContactContainer.css'
import Swal from 'sweetalert2'

function ContactContainer() {
   const onSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
  
      formData.append("access_key", "5a8fbd72-1d4c-45d3-9768-26f9947dbf17");
  
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());
  
      if (res.success) {
         Swal.fire({
            title: "Success!",
            text: "Message Sent Successfully!",
            icon: "success"
          }).then(() => {
            // Clear the form after the alert is closed
            event.target.reset();
         });
      }
    };
  return (
    <Element id='contact'>
        <section className="Contact">
        <h2 className="title">Contact <span>Me</span> </h2>
          <form onSubmit={onSubmit}>
             <div className="input-box">
                <input type="text" className='field' placeholder='Enter Your Name' name='name' required />
             </div>
             <div className="input-box">
                <input type="email" className='field' placeholder='Enter Your Mail id' name='email' required />
             </div>
             <div className="input-box">
                <textarea className='field message'placeholder='Enter Your Message' name='message' required></textarea>
             </div>
             <button type="submit">Send Message</button>
          </form>
        </section> 
    </Element>
  )
}

export default ContactContainer;
