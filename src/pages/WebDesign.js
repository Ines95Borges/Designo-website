import React from 'react';
import Navbar from '../components/Navbar';
import {Link} from 'react-router-dom';
import ContactLink from '../components/ContactLink';
import Footer from '../components/Footer';

const WebDesign = () => {
  const linksStyle ={
    height: "100%",
    textDecoration: "none"
  }

  return(
    <>
      <Navbar />
      <section className="introduction">
        <div className="introduction__bg-image">
          <svg width="876" height="584" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a"><stop stop-color="#5D0202" stop-opacity="0" offset="0%"/><stop stop-color="#5D0202" stop-opacity=".498" offset="100%"/></linearGradient></defs><g transform="matrix(1 0 0 -1 0 584)" fill="url(#a)" fill-rule="evenodd" opacity=".309"><circle transform="matrix(0 -1 -1 0 1168 1168)" cx="730" cy="438" r="146"/><circle transform="matrix(-1 0 0 1 876 0)" cx="438" cy="438" r="146"/><circle transform="matrix(0 1 1 0 -292 292)" cx="146" cy="438" r="146"/><circle transform="matrix(0 -1 -1 0 876 876)" cx="730" cy="146" r="146"/><circle transform="matrix(-1 0 0 1 876 0)" cx="438" cy="146" r="146"/></g></svg>
        </div>
        <div className="introduction__content">
          <h1 className="introduction__title">Web Design</h1>
          <p className="introduction__text">We build websites that serve as powerful marketing tools
          and bring memorable brand experiences.</p>
        </div>
      </section>

      <div className="bg-rounded-rect">
        <svg width="1006" height="594" xmlns="http://www.w3.org/2000/svg"><path d="M297 0h412c164.029 0 297 132.971 297 297S873.029 594 709 594H0V297C0 132.971 132.971 0 297 0z" fill="#F1F3F5" fill-rule="evenodd" opacity=".502"/></svg>
      </div>

      <section className="content">
        <div className="content__card">
          <img src="/assets/web-design/desktop/image-express.jpg" alt="Express"/>
          <div>
            <h3 className="content__title">Express</h3>
            <p className="content__description">A multi-carrier shipping website for ecommerce businesses</p>
          </div>
        </div>
        <div className="content__card">
          <img src="/assets/web-design/desktop/image-transfer.jpg" alt="Express"/>
          <div>
            <h3 className="content__title">Transfer</h3>
            <p className="content__description">Site for low-cost money transfers and sending money within seconds</p>
          </div>
        </div>
        <div className="content__card">
          <img src="/assets/web-design/desktop/image-photon.jpg" alt="Express"/>
          <div>
            <h3 className="content__title">Photon</h3>
            <p className="content__description">A state-of-the-art music player with high-resolution audio and DSP effects</p>
          </div>
        </div>
        <div className="content__card">
          <img src="/assets/web-design/desktop/image-builder.jpg" alt="Express"/>
          <div>
            <h3 className="content__title">Builder</h3>
            <p className="content__description">Connects users with local contractors based on their location</p>
          </div>
        </div>
        <div className="content__card">
          <img src="/assets/web-design/desktop/image-blogr.jpg" alt="Express"/>
          <div>
            <h3 className="content__title">Blogr</h3>
            <p className="content__description">Site for low-cost money transfers and sending money within seconds</p>
          </div>
        </div>
        <div className="content__card">
          <img src="/assets/web-design/desktop/image-camp.jpg" alt="Express"/>
          <div>
            <h3 className="content__title">Camp</h3>
            <p className="content__description">Get expert training in coding, data, design, and digital marketing</p>
          </div>
        </div>
      </section>

      <section className="pages-web">
        <Link to="/appdesign" style={linksStyle} className="pages-web__app-design">
          <img src="/assets/home/desktop/image-app-design.jpg" alt="App design page"/>
          <div className="pages-web__link">
            <h2>App design</h2>
              <p>View projects</p>
          </div>
        </Link>
        <Link to="/graphicsdesign" style={linksStyle} className="pages-web__graphic-design">
          <img src="/assets/home/desktop/image-graphic-design.jpg" alt="Graphic design page"/>
          <div className="pages-web__link">
            <h2>Graphic design</h2>
              <p>View projects</p>
          </div>
        </Link>
      </section>

      <ContactLink />
      <Footer />
    </>
  )
}

export default WebDesign;