import React from 'react';
import Navbar from '../components/Navbar';
import ContactLink from '../components/ContactLink';
import Footer from '../components/Footer';

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

      <div className="left-image">
        <img src="/assets/about/desktop/image-world-class-talent.jpg" alt="World class talent"/>
        <div className="left-image__content">
          <h2 className="left-image__title">World-class talent</h2>
          <p className="left-image__text1">We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.</p>
          <p className="left-image__text2">Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.</p>
        </div>
      </div>

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

      <div className="right-image">
        <div className="right-image__content">
          <h2 className="right-image__title">The real deal</h2>
          <p className="right-image__text1">As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.</p>
          <p className="right-image__text2">We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.</p>
        </div>
        <img src="/assets/about/desktop/image-real-deal.jpg" alt="Real deal"/>
      </div>

      <div className="about-bg-image-rounded-rect">
        <svg width="1006" height="594" xmlns="http://www.w3.org/2000/svg"><path d="M297 0h412c164.029 0 297 132.971 297 297S873.029 594 709 594H0V297C0 132.971 132.971 0 297 0z" fill="#F1F3F5" fill-rule="evenodd" opacity=".502"/></svg>
      </div>

      <ContactLink />
      <Footer />
    </>
  )
}

export default About;