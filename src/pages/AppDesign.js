import React from 'react';
import { Link } from 'react-router-dom';
import ContactLink from '../components/ContactLink';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const AppDesign = () => {
  const linksStyle ={
    height: "100%",
    textDecoration: "none"
  }

  return(
    <>
      <Navbar />
      <section className="introduction">
        <div className="introduction__bg-image-app-design">
          <svg width="876" height="584" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a"><stop stop-color="#5D0202" stop-opacity="0" offset="0%"/><stop stop-color="#5D0202" stop-opacity=".498" offset="100%"/></linearGradient></defs><g fill="url(#a)" fill-rule="evenodd" opacity=".309"><circle transform="matrix(0 -1 -1 0 584 584)" cx="146" cy="438" r="146"/><circle transform="matrix(-1 0 0 1 1460 0)" cx="730" cy="438" r="146"/><circle transform="matrix(0 1 1 0 0 0)" cx="438" cy="438" r="146"/><circle transform="matrix(0 -1 -1 0 876 876)" cx="730" cy="146" r="146"/><circle transform="matrix(-1 0 0 1 876 0)" cx="438" cy="146" r="146"/></g></svg>
        </div>
        <div className="introduction__content">
          <h1 className="introduction__title">App Design</h1>
          <p className="introduction__text">Our mobile designs bring intuitive digital solutions
          to your customers right at their fingertips.</p>
        </div>
      </section>

      <div className="bg-rounded-rect">
        <svg width="1006" height="594" xmlns="http://www.w3.org/2000/svg"><path d="M297 0h412c164.029 0 297 132.971 297 297S873.029 594 709 594H0V297C0 132.971 132.971 0 297 0z" fill="#F1F3F5" fill-rule="evenodd" opacity=".502"/></svg>
      </div>

      <section className="content">
        <div className="content__card">
          <img src="/assets/app-design/desktop/image-airfilter.jpg" alt="Airfilter"/>
          <div>
            <h3 className="content__title">Airfilter</h3>
            <p className="content__description">Solving the problem of poor indoor air quality by filtering the air</p>
          </div>
        </div>
        <div className="content__card">
          <img src="/assets/app-design/desktop/image-eyecam.jpg" alt="Eyecam"/>
          <div>
            <h3 className="content__title">Eyecam</h3>
            <p className="content__description">Product that lets you edit your favorite photos and videos at any time</p>
          </div>
        </div>
        <div className="content__card">
          <img src="/assets/app-design/desktop/image-faceit.jpg" alt="Faceit"/>
          <div>
            <h3 className="content__title">Faceit</h3>
            <p className="content__description">Get to meet your favorite internet superstar with the faceit app</p>
          </div>
        </div>
        <div className="content__card">
          <img src="/assets/app-design/desktop/image-todo.jpg" alt="Todo"/>
          <div>
            <h3 className="content__title">Todo</h3>
            <p className="content__description">A todo app that features cloud sync with light and dark mode</p>
          </div>
        </div>
        <div className="content__card">
          <img src="/assets/app-design/desktop/image-loopstudios.jpg" alt="Loopstudios"/>
          <div>
            <h3 className="content__title">Loopstudios</h3>
            <p className="content__description">A VR experience app made for Loopstudios</p>
          </div>
        </div>
      </section>
      
      <section className="pages-web">
        <Link to="/webdesign" style={linksStyle} className="pages-web__app-design">
          <img src="/assets/home/desktop/image-web-design-small.jpg" alt="Web design page"/>
          <div className="pages-web__link">
            <h2>Web design</h2>
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

export default AppDesign;