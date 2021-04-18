import React from 'react';
import Navbar from '../components/Navbar';
import ContactLink from '../components/ContactLink';
import Footer from '../components/Footer';

const Locations = () => {
  return(
    <>
      <Navbar />
      <section className="locations">
        <div className="locations__canada">
          <div className="locations__description">
            <div className="locations__small-circles">
              <div className="locations__small-circle1">
                <svg xmlns="http://www.w3.org/2000/svg" width="202" height="202"><defs><linearGradient id="a" x1="0%" x2="100%" y1="50%" y2="50%"><stop offset="0%" stop-color="#5D0202" stop-opacity="0"/><stop offset="100%" stop-color="#5D0202" stop-opacity=".498"/></linearGradient></defs><circle cx="101" cy="101" r="101" fill="url(#a)" fill-rule="evenodd" opacity=".203" transform="matrix(-1 0 0 1 202 0)"/></svg>
              </div>
              <div className="locations__small-circle2">
                <svg xmlns="http://www.w3.org/2000/svg" width="202" height="202"><defs><linearGradient id="a" x1="0%" x2="100%" y1="50%" y2="50%"><stop offset="0%" stop-color="#5D0202" stop-opacity="0"/><stop offset="100%" stop-color="#5D0202" stop-opacity=".498"/></linearGradient></defs><circle cx="101" cy="101" r="101" fill="url(#a)" fill-rule="evenodd" opacity=".203" transform="matrix(-1 0 0 1 202 0)"/></svg>
              </div>
            </div>
            <div className="locations__content">
              <h2 className="locations__title">Canada</h2>
              <address>
                <strong>Designo Central Office</strong><br/>
                3886 Wellington Street<br/>
                Toronto, Ontario M9C 3J5
              </address>
              <address>
                <strong>Contact</strong><br/> 
                P : +1 253-863-8967<br/>
                M : contact@designo.co
              </address>
            </div>
          </div>
          <img src="/assets/locations/desktop/image-map-canada.png" alt="Canada location"/>
        </div>

        <div className="locations__australia">
          <img src="/assets/locations/desktop/image-map-australia.png" alt="Australia location"/>
          <div className="locations__description">
            <div className="locations__small-circles">
              <div className="locations__small-circle1">
                <svg xmlns="http://www.w3.org/2000/svg" width="202" height="202"><defs><linearGradient id="a" x1="0%" x2="100%" y1="50%" y2="50%"><stop offset="0%" stop-color="#5D0202" stop-opacity="0"/><stop offset="100%" stop-color="#5D0202" stop-opacity=".498"/></linearGradient></defs><circle cx="101" cy="101" r="101" fill="url(#a)" fill-rule="evenodd" opacity=".203" transform="matrix(-1 0 0 1 202 0)"/></svg>
              </div>
              <div className="locations__small-circle2">
                <svg xmlns="http://www.w3.org/2000/svg" width="202" height="202"><defs><linearGradient id="a" x1="0%" x2="100%" y1="50%" y2="50%"><stop offset="0%" stop-color="#5D0202" stop-opacity="0"/><stop offset="100%" stop-color="#5D0202" stop-opacity=".498"/></linearGradient></defs><circle cx="101" cy="101" r="101" fill="url(#a)" fill-rule="evenodd" opacity=".203" transform="matrix(-1 0 0 1 202 0)"/></svg>
              </div>
            </div>
            <div className="locations__content">
              <h2 className="locations__title">Australia</h2>
              <address>
                <strong>Designo AU Office</strong><br/>
                19 Balonne Street<br/>
                New South Wales 2443
              </address>
              <address>
                <strong>Contact</strong><br/> 
                P : (02) 6720 9092<br/>
                M : contact@designo.au
              </address>
            </div>
          </div>
        </div>

        <div className="locations__uk">
          <div className="locations__description">
            <div className="locations__small-circles">
              <div className="locations__small-circle1">
                <svg xmlns="http://www.w3.org/2000/svg" width="202" height="202"><defs><linearGradient id="a" x1="0%" x2="100%" y1="50%" y2="50%"><stop offset="0%" stop-color="#5D0202" stop-opacity="0"/><stop offset="100%" stop-color="#5D0202" stop-opacity=".498"/></linearGradient></defs><circle cx="101" cy="101" r="101" fill="url(#a)" fill-rule="evenodd" opacity=".203" transform="matrix(-1 0 0 1 202 0)"/></svg>
              </div>
              <div className="locations__small-circle2">
                <svg xmlns="http://www.w3.org/2000/svg" width="202" height="202"><defs><linearGradient id="a" x1="0%" x2="100%" y1="50%" y2="50%"><stop offset="0%" stop-color="#5D0202" stop-opacity="0"/><stop offset="100%" stop-color="#5D0202" stop-opacity=".498"/></linearGradient></defs><circle cx="101" cy="101" r="101" fill="url(#a)" fill-rule="evenodd" opacity=".203" transform="matrix(-1 0 0 1 202 0)"/></svg>
              </div>
            </div>
            <div className="locations__content">
              <h2 className="locations__title">United Kingdom</h2>
              <address>
                <strong>Designo UK Office</strong><br/>
                13  Colorado Way<br/>
                Rhyd-y-fro SA8 9GA
              </address>
              <address>
                <strong>Contact</strong><br/> 
                P : 078 3115 1400<br/>
                M : contact@designo.uk
              </address>
            </div>
          </div>
            <img src="/assets/locations/desktop/image-map-united-kingdom.png" alt="UK location"/>
        </div>
      </section>

      <ContactLink />
      <Footer />
    </>
  )
}

export default Locations;