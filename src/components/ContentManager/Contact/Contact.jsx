import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import mapFullSize from '../../../assets/mapFullSize.png';
import './Contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMapFullSize: false,
    };
  }

  toggleMapSize = () => {
    if (!this.state.isMapFullSize) {
      this.setState({
        isMapFullSize: true,
      });
    }
  };

  closeFullSizeMap = () => {
    this.setState({
      isMapFullSize: false,
    });
  };

  render() {
    const { className, redTitle, currentLanguage } = this.props;

    const googleMapsUrl = `https://www.google.com/maps/place/Skaraskogens+hundpensionat/@58.4647466,13.4834004,17z/data=!3m1!4b1!4m6!3m5!1s0x465b1f469faf35e9:0xf82b54525a99ee73!8m2!3d58.4647466!4d13.4859753!16s%2Fg%2F11fm4w3syk?entry=ttu`;
    const fullSizeMap = mapFullSize;

    const content = currentLanguage === 'english'
      ? {
        title: 'Contact us',
        description: 'Contact info',
        text: 'Telephone',
        text2: 'Address',
        directions: '(From the E20 take the Lundsbrunn/Eggby exit drive towards Eggby approx. 800 meters)',
      }
      : {
        title: 'Kontakta oss',
        description: 'Kontakt info',
        text: 'Telefon',
        text2: 'Besöksdress',
        directions: '(Från E20 tag Lundsbrunn/Eggby avfarten kör mot Eggby ca 800 meter)',
      };

    return (
      <div ref={this.props.contactRef} className={className}>
        <h2 className={redTitle}>{content.title}</h2>
        <p className="contact-links">
          {content.text} <a href="tel:0511/57400">0511/57400</a> alt. <a href="tel:070-565-85-82">070-565 85 82</a>
        </p>
        <p className="contact-links">E-mail: <a href="mailto:michelle.g@bahnhof.se">michelle.g@bahnhof.se</a></p>
        <p className="contact-links">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={this.toggleMapSize}
          >
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            {content.text2} : Ledsjö Elfvik 1, 53392 Lundsbrunn.
          </a>
          <p className="no-hover">{content.directions}</p>
        </p>
        {this.state.isMapFullSize ? (
          <div className="full-size-map-container full-size" onClick={this.closeFullSizeMap}>
            <div className="close-button" onClick={this.closeFullSizeMap}>
              X
            </div>
            <img
              className="full-size-map"
              alt="Full Size Map"
              src={fullSizeMap}
              onClick={(e) => {
                this.toggleMapSize();
                e.stopPropagation();
                // prevents map from closing when clicked in fullsize
              }}
            />
          </div>
        ) : (
          <img
            className="full-size-map"
            alt="Full Size Map"
            src={fullSizeMap}
            onClick={this.toggleMapSize}
            
          />
        )}
      </div>
    );
  }
}

export default Contact;
