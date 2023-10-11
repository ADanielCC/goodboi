import React, { Component } from "react";
import './Pricing.css';

export default class Pricing extends Component {


    handleContactClick = (e) => {
        e.preventDefault();
        // Call the setActiveSection function to change the active section to "contact"
        this.props.setActiveSection("contact");
      };
  render() {

    // const { className,redTitle,blueTitle} = this.props; // Get the className prop
    const { className,redTitle} = this.props;
    return (
      <div ref={this.props.pricesRef}
      className={className}
            >
        <h2 className={redTitle} >Vi erbjuder:</h2>
        {/* <h4 className={redTitle}>Priser:</h4> */}
        <p>Fr.o.m 1/11 2022</p>
        <ul>
       <li>Liten hund 250 kr per påbörjad dag, ytterligare liten hund i samma box 150kr </li>
       <li>Stor hund 300 kr per påbörjat dygn , ytterligare hund i samma  box 150kr </li>
       <li>Medicinering av hund , 50kr per dag </li>
       <li>Månads abonnemang enligt överenskommelse</li>
       </ul>
       <p><a 
       className="contact-link underline" 
       onClick={this.handleContactClick}
       href="#contact"
       >
        Kontakta oss</a> gärna för mer information!</p>


      </div>
    );
  }
}

