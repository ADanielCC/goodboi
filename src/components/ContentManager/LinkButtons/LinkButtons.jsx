import React, { Component } from 'react';
import './LinkButtons.css';

class LinkButtons extends Component {
  render() {
    return (
      <div className='linkButtonsWrapper'>
        <div className="contact-buttons">
          <a href="mailto:example@example.com" className="email-button">
            <i className="fas fa-envelope"></i> Email Us
          </a>
          <a href="https://www.facebook.com/yourbusiness" className="facebook-button">
            <i className="fab fa-facebook"></i> Visit Us on Facebook
          </a>
        </div>
      </div>
    );
  }
}

export default LinkButtons;
