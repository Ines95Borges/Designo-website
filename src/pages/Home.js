import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
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
            <p>View projects</p>
          </div>
        </div>
        <div className="pages__app-design">
          <img src="/assets/home/desktop/image-app-design.jpg" alt="App design page"/>
          <div className="pages__link">
            <h2>App design</h2>
            <p>View projects</p>
          </div>
        </div>
        <div className="pages__graphic-design">
          <img src="/assets/home/desktop/image-graphic-design.jpg" alt="Graphic design page"/>
          <div className="pages__link">
            <h2>Graphic design</h2>
            <p>View projects</p>
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
            <img src="/assets/shared/desktop/bg-pattern-small-circle.svg" alt="" className="qualities__second-circle"/>
            <img src="/assets/home/desktop/illustration-resourceful.svg" alt="Resourceful"/>
          </div>
          <h3 className="qualities__quality">resourceful</h3>
          <p className="qualities__text">Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.</p>
        </div>
        <div className="qualities__friendly">
          <div className="qualities__images">
            <img src="/assets/shared/desktop/bg-pattern-small-circle.svg" alt=""/>
            <img src="/assets/home/desktop/illustration-friendly.svg" alt="Friendly"/>
          </div>
          <h3 className="qualities__quality">friendly</h3>
          <p className="qualities__text"> We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.</p>
        </div>
      </section>
    </>
  )
}

export default Home;