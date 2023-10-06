import React, { Component } from 'react';
import './LinkButtons.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

class LinkButtons extends Component {
  render() {
    return (
      <div className='linkButtonsWrapper'>
        <div className="contact-buttons center-align">
          <a href="mailto:example@example.com" className="email-button">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="https://www.facebook.com" className="facebook-button">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </div>
    );
  }
}

export default LinkButtons;
