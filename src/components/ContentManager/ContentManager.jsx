import React, { Component } from "react";
import Services from './Services/Services';
import AboutUs from './AboutUs/AboutUs';
import Contact from './Contact/Contact';
import Messaging from './Messaging/Messaging';
import Gallery from './Gallery/Gallery';

import LinkButtons from "./LinkButtons/LinkButtons";
import './ContentManager.css';

class ContentManager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSection: "services",
    };
  }

  // Function to set the active section
  setActiveSection = (section) => {
    this.setState({ activeSection: section });
  };

  render() {
    const { activeSection } = this.state;

    return (
      <div className="content-manager">
        {/* Navigation or buttons to switch between sections */}
        {/* <button onClick={() => this.setActiveSection("services")}>Services</button> */}
        <button onClick={() => this.setActiveSection("about")}>About Us</button>
        <button onClick={() => this.setActiveSection("contact")}>Contact</button>
        <button onClick={() => this.setActiveSection("messaging")}>Messaging</button>
        <button onClick={() => this.setActiveSection("gallery")}>Gallery</button>
  
        {/* Render the active section */}
        {/* {activeSection === "services" && <Services />} */}

        <div className="sections-wrapper">


          <Services className="content"></Services>

          <LinkButtons></LinkButtons>


          {activeSection === "about" && <AboutUs className="content"/>}
          {activeSection === "contact" && <Contact className="content"/>}
          {activeSection === "messaging" && <Messaging className="content"/>}
          {activeSection === "gallery" && <Gallery className="content"/>}
        </div>
      </div>
    );
  }
}

export default ContentManager;
