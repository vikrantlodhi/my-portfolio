import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.png'
import gmail from '../../assets/gmail.png'
import placeholder from '../../assets/placeholder.png'
import linkedin from '../../assets/linkedin.png'
import instagram from '../../assets/instagram.png'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "17012a26-3aa0-49cd-948a-8e9f84baedfa");

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
      alert(res.message)
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>If you're looking for a dedicated developer to bring innovative solutions to your team, let’s connect! I’m always open to new career opportunities where I can grow, contribute, and make a meaningful impact.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={gmail} alt="" /><p>vikrantlodhi3782@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={linkedin} alt="" /><p>LinkedIn</p>
                </div>
                <div className="contact-detail">
                    <img src={instagram} alt="" /><p>Instagram</p>
                </div>
                <div className="contact-detail">
                    <img src={placeholder} alt="" /><p>Bhopal - Madhya Pradesh, India</p>
                </div>
            </div>     
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter Your Name' name='name' />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter Your Email' name='email' />
            <label htmlFor="">Write your messege here</label>
            <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
            <button className='contact-submit' type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
