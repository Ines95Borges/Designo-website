import React from 'react';
import ContactLink from '../components/ContactLink';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import {Link} from 'react-router-dom';

const Home = () => {
  const linksStyle ={
    fontWeight: 500,
    fontSize: "15px",
    letterSpacing: "5px",
    lineHeight: "21.68px",
    textDecoration: "none"
  }

  return(
    <>
      <Navbar />
      <header>
        <div className="hero">
          <div className="hero__images">
            <img src="/assets/home/desktop/bg-pattern-hero-home.svg" alt="" className="hero__circle-image"/>
            <img src="/assets/home/desktop/image-hero-phone.png" alt="" className="hero__phone-image"/>
          </div>
          <div className="hero__content">
            <h1 className="hero__title">Award-winning custom designs and digital branding solutions</h1>
            <p className="hero__description">With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
            <button className="hero__button">Learn more</button>
          </div>
        </div>
      </header>

      <div className="bg-image-rounded-rect">
        <svg width="1006" height="594" xmlns="http://www.w3.org/2000/svg"><path d="M297 0h412c164.029 0 297 132.971 297 297S873.029 594 709 594H0V297C0 132.971 132.971 0 297 0z" fill="#F1F3F5" fill-rule="evenodd" opacity=".502"/></svg>
      </div>

      <section className="pages">
        <div className="pages__web-design">
          <img src="/assets/home/desktop/image-web-design-large.jpg" alt="Web design page"/>
          <div className="pages__link">
            <h2>Web design</h2>
            <Link to="/webdesign" style={linksStyle}>
              <p>View projects</p>
            </Link>
          </div>
        </div>
        <div className="pages__app-design">
          <img src="/assets/home/desktop/image-app-design.jpg" alt="App design page"/>
          <div className="pages__link">
            <h2>App design</h2>
            <Link to="/appdesign" style={linksStyle}>
              <p>View projects</p>
            </Link>
          </div>
        </div>
        <div className="pages__graphic-design">
          <img src="/assets/home/desktop/image-graphic-design.jpg" alt="Graphic design page"/>
          <div className="pages__link">
            <h2>Graphic design</h2>
            <Link to="/graphicsdesign" style={linksStyle}>
              <p>View projects</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="qualities">
        <div className="qualities__passionate">
          <div className="qualities__images">
            <img src="/assets/shared/desktop/bg-pattern-small-circle.svg" alt=""/>
            <img src="/assets/home/desktop/illustration-passionate.svg" alt="Passionate"/>
          </div>
          <h3 className="qualities__quality">passionate</h3>
          <p className="qualities__text">Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
        </div>
        <div className="qualities__resourceful">
          <div className="qualities__images">
            <div className="qualities__second-circle">
              <svg xmlns="http://www.w3.org/2000/svg" width="202" height="202"><defs><linearGradient id="a" x1="0%" x2="100%" y1="50%" y2="50%"><stop offset="0%" stop-color="#5D0202" stop-opacity="0"/><stop offset="100%" stop-color="#5D0202" stop-opacity=".498"/></linearGradient></defs><circle cx="101" cy="101" r="101" fill="url(#a)" fill-rule="evenodd" opacity=".203" transform="matrix(-1 0 0 1 202 0)" /></svg>
            </div>
            <img src="/assets/home/desktop/illustration-resourceful.svg" alt="Resourceful"/>
          </div>
          <h3 className="qualities__quality">resourceful</h3>
          <p className="qualities__text">Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.</p>
        </div>
        <div className="qualities__friendly">
          <div className="qualities__images">
            <div className="qualities__third-circle">
              <svg xmlns="http://www.w3.org/2000/svg" width="202" height="202"><defs><linearGradient id="a" x1="0%" x2="100%" y1="50%" y2="50%"><stop offset="0%" stop-color="#5D0202" stop-opacity="0"/><stop offset="100%" stop-color="#5D0202" stop-opacity=".498"/></linearGradient></defs><circle cx="101" cy="101" r="101" fill="url(#a)" fill-rule="evenodd" opacity=".203" transform="matrix(-1 0 0 1 202 0)" className=""/></svg>
            </div>
            <img src="/assets/home/desktop/illustration-friendly.svg" alt="Friendly"/>
          </div>
          <h3 className="qualities__quality">friendly</h3>
          <p className="qualities__text"> We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.</p>
        </div>
        <div className="bg-image-rounded-rect2">
          <svg width="1006" height="594" xmlns="http://www.w3.org/2000/svg"><path d="M297 0h412c164.029 0 297 132.971 297 297S873.029 594 709 594H0V297C0 132.971 132.971 0 297 0z" fill="#F1F3F5" fill-rule="evenodd" opacity=".502"/></svg>
        </div>
      </section>

      

      <ContactLink />
      <Footer />
    </>
  )
}

export default Home;