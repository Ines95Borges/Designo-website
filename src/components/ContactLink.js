import React from 'react';

const ContactLink = () => {
  return(
    <div className="contact-link">
      <div className="contact-link__bg-image">
        <svg width="876" height="584" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a"><stop stop-color="#5D0202" stop-opacity="0" offset="0%"/><stop stop-color="#5D0202" stop-opacity=".498" offset="100%"/></linearGradient></defs><g transform="matrix(-1 0 0 1 876 0)" fill="url(#a)" fill-rule="evenodd" opacity=".309"><g transform="translate(0 292)"><circle transform="matrix(0 -1 -1 0 292 292)" cx="146" cy="146" r="146"/><circle transform="matrix(-1 0 0 1 876 0)" cx="438" cy="146" r="146"/><circle transform="matrix(0 1 1 0 584 -584)" cx="730" cy="146" r="146"/></g><circle transform="matrix(0 -1 -1 0 292 292)" cx="146" cy="146" r="146"/><circle transform="matrix(-1 0 0 1 876 0)" cx="438" cy="146" r="146"/></g></svg>
      </div>
      <div className="contact-link__content">
        <h2 className="contact-link__title">Let's talk about your project</h2>
        <p className="contact-link__text">Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
      </div>
      <button className="contact-link--contact-btn">Get in touch</button>
    </div>
  )
}

export default ContactLink;