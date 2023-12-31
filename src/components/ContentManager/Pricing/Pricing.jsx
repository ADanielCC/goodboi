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
        const { className, redTitle, currentLanguage } = this.props;


        const contentEnglish = {
            title: 'We offer',
            description: 'Explore our pricing and services below:',
            list: 'Small dog 100kr, Big dog 200 kr, Medication 50 kr, Monthly subscription as agreed',
          };
      
          const contentSwedish = {
            title: 'Vi erbjuder',
            description: 'Utforska våra priser och tjänster nedan:',
            list: 'Liten hund 100 kr, Stor hund 200 kr, Medicinering 50 kr, Månadsabonnemang enligt överenskommelse',
          };

          const content = currentLanguage === 'english' ? contentEnglish : contentSwedish;

          // Split the list string into individual list items
        const listItems = content.list.split(', ').map((item, index) => (
        <li key={index}>{item}</li>
        ));





        return (
            <div ref={this.props.pricesRef} className={className}>
        <h2 className={redTitle}>{content.title}</h2>
        <p>{content.description}</p>
        <ul>
          {listItems}
        </ul>
        {/* You can add buttons to toggle language within this component */}
        {/* <button onClick={toggleLanguage}>Toggle Language</button> */}
      </div>
        );
    }
}

