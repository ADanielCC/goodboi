import React, { Component } from 'react';
import './LinkButtons.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";


class LinkButtons extends Component {
  render() {
    const { currentLanguage } = this.props;
    const content = currentLanguage === 'english'
    ? {
      emailTitle:'E-mail',
      facebookTitle:'Our facebook page',
      phoneTitle:'Give us a call!'
      
    }
    : {

      emailTitle:'E-post',
      facebookTitle:'Vår Facebook sida',
      phoneTitle:'Ring oss!',
     };



    return (
      <div className='linkButtonsWrapper'>
        <div className="contact-buttons center-align">

          <a href="mailto:michelle.g@bahnhof.se" className="email-button" title={content.emailTitle}>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>

          <a href="https://www.facebook.com" className="facebook-button" title={content.facebookTitle}>
            <FontAwesomeIcon icon={faFacebook} />
          </a>

          <a href="tel:070-565-85-82" className="phone-button" title={content.phoneTitle}>
            <FontAwesomeIcon icon={faPhone} />
          </a>

        </div>
      </div>
    );
  }
}

export default LinkButtons;
