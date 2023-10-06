import React, { Component } from "react";
import Services from './Services/Services';
import AboutUs from './AboutUs/AboutUs';
import Contact from './Contact/Contact';
import Messaging from './Messaging/Messaging';
import Gallery from './Gallery/Gallery';
import Landing from "./Landing/Landing";

import LinkButtons from "./LinkButtons/LinkButtons";
import './ContentManager.css';

class ContentManager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSection: "landing",
      //Sets the initial loading to landing on load 
    };
  }

  // Function to set the active section
  setActiveSection = (section) => {
    this.setState({ activeSection: section });
  };

  render() {
    const { activeSection } = this.state;
    const commonProps = {
      redTitle: "red-title",
      blueTitle: "blue-title", // You can add more common props here
    };
  
    return (
      <div className="content-manager">
        {/* Navigation or buttons to switch between sections */}
        {/* <button onClick={() => this.setActiveSection("services")}>Services</button> */}
        <button onClick={() => this.setActiveSection("landing")}>Start</button>
        <button onClick={() => this.setActiveSection("about")}>About Us</button>
        <button onClick={() => this.setActiveSection("contact")}>Contact</button>
        <button onClick={() => this.setActiveSection("messaging")}>Messaging</button>
        <button onClick={() => this.setActiveSection("gallery")}>Gallery</button>
  
        {/* Render the active section */}
        {/* {activeSection === "services" && <Services {...commonProps} />} */}
        <div className="sections-wrapper">
          <Services className="content" {...commonProps} />
          <LinkButtons {...commonProps} />
  
          {activeSection === "landing" && <Landing className="content" {...commonProps} />}
          {activeSection === "about" && <AboutUs className="content" {...commonProps} />}
          {activeSection === "contact" && <Contact className="content" {...commonProps} />}
          {activeSection === "messaging" && <Messaging className="content" {...commonProps} />}
          {activeSection === "gallery" && <Gallery className="content" {...commonProps} />}
        </div>
      </div>
    );
  }
}

export default ContentManager;
