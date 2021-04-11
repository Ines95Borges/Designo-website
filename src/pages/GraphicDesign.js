import React from 'react';
import { Link } from 'react-router-dom';
import ContactLink from '../components/ContactLink';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const GraphicDesign = () => {
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
      <section className="introduction">
        <div className="introduction__bg-image-graphic">
          <svg width="876" height="584" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a"><stop stop-color="#5D0202" stop-opacity="0" offset="0%"/><stop stop-color="#5D0202" stop-opacity=".498" offset="100%"/></linearGradient></defs><g fill="url(#a)" fill-rule="evenodd" opacity=".309"><circle transform="matrix(0 -1 -1 0 584 584)" cx="146" cy="438" r="146"/><circle transform="matrix(0 1 1 0 0 0)" cx="438" cy="438" r="146"/><circle transform="matrix(0 -1 -1 0 876 876)" cx="730" cy="146" r="146"/><circle transform="matrix(-1 0 0 1 292 0)" cx="146" cy="146" r="146"/></g></svg>
        </div>
        <div className="introduction__content">
          <h1 className="introduction__title">Graphic Design</h1>
          <p className="introduction__text">We deliver eye-catching branding materials that are 
          tailored to meet your business objectives.</p>
        </div>
      </section>

      <div className="bg-rounded-rect">
        <svg width="1006" height="594" xmlns="http://www.w3.org/2000/svg"><path d="M297 0h412c164.029 0 297 132.971 297 297S873.029 594 709 594H0V297C0 132.971 132.971 0 297 0z" fill="#F1F3F5" fill-rule="evenodd" opacity=".502"/></svg>
      </div>

      <section className="content">
        <div className="content__card">
          <img src="/assets/graphic-design/desktop/image-change.jpg" alt="Tim Brown"/>
          <h3 className="content__title">Tim Brown</h3>
          <p className="content__description">A book cover designed for Tim Brown’s new release, ‘Change’</p>
        </div>
        <div className="content__card">
          <img src="/assets/graphic-design/desktop/image-boxed-water.jpg" alt="Boxed Water"/>
          <h3 className="content__title">Boxed Water</h3>
          <p className="content__description">A simple packaging concept made for Boxed Water</p>
        </div>
        <div className="content__card">
          <img src="/assets/graphic-design/desktop/image-science.jpg" alt="Science"/>
          <h3 className="content__title">Science</h3>
          <p className="content__description">A poster made in collaboration with the Federal Art Project</p>
        </div>
      </section>

      <section className="pages-web">
        <div className="pages-web__app-design">
          <img src="/assets/home/desktop/image-app-design.jpg" alt="App design page"/>
          <div className="pages-web__link">
            <h2>App design</h2>
            <Link to="/appdesign" style={linksStyle}>
              <p>View projects</p>
            </Link>
          </div>
        </div>
        <div className="pages-web__graphic-design">
          <img src="/assets/home/desktop/image-web-design-small.jpg" alt="Web design page"/>
          <div className="pages-web__link">
            <h2>Web design</h2>
            <Link to="/webdesign" style={linksStyle}>
              <p>View projects</p>
            </Link>
          </div>
        </div>
      </section>

      <ContactLink />
      <Footer />
    </>
  )
}

export default GraphicDesign;