import React, {useRef} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  const inputName = useRef(null);
  const emptyName = useRef(null);
  const inputEmail = useRef(null);
  const emptyEmail = useRef(null);
  const inputPhone = useRef(null);
  const emptyPhone = useRef(null);
  const message = useRef(null);
  const emptyMessage = useRef(null);

  const handleEmptyFields = (e) => {
    e.preventDefault();
    if(inputName.current.value === "") emptyName.current.style.display = "flex";
    if(inputEmail.current.value === "") emptyEmail.current.style.display = "flex";
    if(inputPhone.current.value === "") emptyPhone.current.style.display = "flex";
    if(message.current.value === "") emptyMessage.current.style.display = "flex";
  }

  const hideAlert = () => {
    emptyName.current.style.display = "none";
    emptyEmail.current.style.display = "none";
    emptyPhone.current.style.display = "none";
    emptyMessage.current.style.display = "none";
  }

  return(
    <>
      <Navbar />

      <section className="contact">
        <div className="contact__bg-circle">
          <svg width="640" height="640" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a"><stop stop-color="#5D0202" stop-opacity="0" offset="0%"/><stop stop-color="#5D0202" stop-opacity=".498" offset="100%"/></linearGradient></defs><circle fill="url(#a)" transform="matrix(0 1 1 0 0 0)" cx="320" cy="320" r="320" fill-rule="evenodd" opacity=".309"/></svg>
        </div>
        <div className="contact__description">
          <h1 className="contact__description__title">Contact Us</h1>
          <p className="contact__description__text">Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
        </div>

        <form className="contact__form">
          <div className="contact__form__field">
            <input type="text" placeholder="Name" ref={inputName} onFocus={hideAlert}/>
            <div className="contact__form__empty-field-name" ref={emptyName}>
              <p className="contact__form__empty-text">Can't be empty</p>
              <div className="contact__form__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><g fill="none" fill-rule="evenodd"><circle cx="10" cy="10" r="10" fill="#FFF"/><path fill="#E7816B" d="M11 14v2H9v-2h2zm0-9v7H9V5h2z"/></g></svg>
              </div>
            </div>
          </div>
          <div className="contact__form__field">
            <input type="text" placeholder="Email address" ref={inputEmail} onFocus={hideAlert}/>
            <div className="contact__form__empty-field-email"  ref={emptyEmail}>
              <p className="contact__form__empty-text">Can't be empty</p>
              <div className="contact__form__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><g fill="none" fill-rule="evenodd"><circle cx="10" cy="10" r="10" fill="#FFF"/><path fill="#E7816B" d="M11 14v2H9v-2h2zm0-9v7H9V5h2z"/></g></svg>
              </div>
            </div>
          </div>
          <div className="contact__form__field">
            <input type="text" placeholder="Phone" ref={inputPhone} onFocus={hideAlert}/>
            <div className="contact__form__empty-field-phone" ref={emptyPhone}>
              <p className="contact__form__empty-text">Can't be empty</p>
              <div className="contact__form__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><g fill="none" fill-rule="evenodd"><circle cx="10" cy="10" r="10" fill="#FFF"/><path fill="#E7816B" d="M11 14v2H9v-2h2zm0-9v7H9V5h2z"/></g></svg>
              </div>
            </div>
          </div>
          <div className="contact__form__field">
            <textarea name="" id="" cols="30" rows="10" placeholder="Your Message" ref={message} onFocus={hideAlert}></textarea>
            <div className="contact__form__empty-field-text" ref={emptyMessage}>
              <p className="contact__form__empty-text">Can't be empty</p>
              <div className="contact__form__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><g fill="none" fill-rule="evenodd"><circle cx="10" cy="10" r="10" fill="#FFF"/><path fill="#E7816B" d="M11 14v2H9v-2h2zm0-9v7H9V5h2z"/></g></svg>
              </div>
            </div>
          </div>
          <button className="contact__form--btn-submit" onClick={handleEmptyFields}>Submit</button>
        </form>
      </section>
      
      <div className="locations-about">
        <div className="locations-about__canada">
          <div className="locations-about__images">
            <div className="locations-about__images__small-circle1">
              <svg xmlns="http://www.w3.org/2000/svg" width="202" height="202"><defs><linearGradient id="a" x1="0%" x2="100%" y1="50%" y2="50%"><stop offset="0%" stop-color="#5D0202" stop-opacity="0"/><stop offset="100%" stop-color="#5D0202" stop-opacity=".498"/></linearGradient></defs><circle cx="101" cy="101" r="101" fill="url(#a)" fill-rule="evenodd" opacity=".203" transform="matrix(-1 0 0 1 202 0)"/></svg>
            </div>
            <img src="/assets/shared/desktop/illustration-canada.svg" alt="Canada"/>
          </div>
          <h3 className="locations-about__title">Canada</h3>
          <button className="locations-about--btn">See location</button>
        </div>

        <div className="locations-about__australia">
          <div className="locations-about__images">
            <div className="locations-about__images__small-circle2">
              <svg xmlns="http://www.w3.org/2000/svg" width="202" height="202"><defs><linearGradient id="a" x1="0%" x2="100%" y1="50%" y2="50%"><stop offset="0%" stop-color="#5D0202" stop-opacity="0"/><stop offset="100%" stop-color="#5D0202" stop-opacity=".498"/></linearGradient></defs><circle cx="101" cy="101" r="101" fill="url(#a)" fill-rule="evenodd" opacity=".203" transform="matrix(-1 0 0 1 202 0)"/></svg>
            </div>
            <img src="/assets/shared/desktop/illustration-australia.svg" alt="Australia"/>
          </div>
          <h3 className="locations-about__title">Australia</h3>
          <button className="locations-about--btn">See location</button>
        </div>

        <div className="locations-about__uk">
          <div className="locations-about__images">
            <div className="locations-about__images__small-circle3">
              <svg xmlns="http://www.w3.org/2000/svg" width="202" height="202"><defs><linearGradient id="a" x1="0%" x2="100%" y1="50%" y2="50%"><stop offset="0%" stop-color="#5D0202" stop-opacity="0"/><stop offset="100%" stop-color="#5D0202" stop-opacity=".498"/></linearGradient></defs><circle cx="101" cy="101" r="101" fill="url(#a)" fill-rule="evenodd" opacity=".203" transform="matrix(-1 0 0 1 202 0)"/></svg>
            </div>
            <img src="/assets/shared/desktop/illustration-united-kingdom.svg" alt="United kingdom"/>
          </div>
          <h3 className="locations-about__title">United Kingdom</h3>
          <button className="locations-about--btn">See location</button>
        </div>
      </div>

      <div className="bg-rounded-rect-contact">
        <svg width="1006" height="594" xmlns="http://www.w3.org/2000/svg"><path d="M297 0h412c164.029 0 297 132.971 297 297S873.029 594 709 594H0V297C0 132.971 132.971 0 297 0z" fill="#F1F3F5" fill-rule="evenodd" opacity=".502"/></svg>
      </div>

      <Footer />
    </>
  )
}

export default Contact;