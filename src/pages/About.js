import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
  return(
    <>
      <Navbar />
      <section className="hero-about">
        <div className="hero-about__bg-image">
          <svg width="640" height="640" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a"><stop stop-color="#5D0202" stop-opacity="0" offset="0%"/><stop stop-color="#5D0202" stop-opacity=".498" offset="100%"/></linearGradient></defs><circle fill="url(#a)" transform="matrix(1 0 0 -1 0 640)" cx="320" cy="320" r="320" fill-rule="evenodd" opacity=".309"/></svg>
        </div>
        <div className="hero-about__content">
          <div className="hero-about__description">
            <h1 className="hero-about__title">About Us</h1>
            <p className="hero-about__text">Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.</p>
          </div>
          <img src="/assets/about/desktop/image-about-hero.jpg" alt=""/>
        </div>
      </section>

      <div className="bg-rounded-rect-about">
        <svg width="1006" height="594" xmlns="http://www.w3.org/2000/svg"><path d="M297 0h412c164.029 0 297 132.971 297 297S873.029 594 709 594H0V297C0 132.971 132.971 0 297 0z" fill="#F1F3F5" fill-rule="evenodd" opacity=".502"/></svg>
      </div>
    </>
  )
}

export default About;