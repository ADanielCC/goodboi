import React, { Component } from 'react';
import './LinkButtons.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

class LinkButtons extends Component {
  render() {
    return (
      <div className='linkButtonsWrapper'>
        <div className="contact-buttons center-align">

          <a href="mailto:michelle.g@bahnhof.se" className="email-button">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>

          <a href="https://www.facebook.com" className="facebook-button">
            <FontAwesomeIcon icon={faFacebook} />
          </a>

          <a Href="tel:070-565-85-82" className="phone-button">
          <FontAwesomeIcon icon={faPhone} />
          </a>

        </div>
      </div>
    );
  }
}

export default LinkButtons;
