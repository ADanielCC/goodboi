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
      blueTitle: "blue-title",
    };

    return (
      <div className="content-manager">
        <div className="sections-wrapper">
        <div className="button-wrapper">
          <button
            onClick={() => this.setActiveSection("landing")}
            className={activeSection === "landing" ? "active" : ""}
          >
            Start
          </button>
          <button
            onClick={() => this.setActiveSection("about")}
            className={activeSection === "about" ? "active" : ""}
          >
            Om oss
          </button>
          <button
            onClick={() => this.setActiveSection("contact")}
            className={activeSection === "contact" ? "active" : ""}
          >
            Info
          </button>
          <button
            onClick={() => this.setActiveSection("messaging")}
            className={activeSection === "messaging" ? "active" : ""}
          >
            Kontakta oss
          </button>
          <button
            onClick={() => this.setActiveSection("gallery")}
            className={activeSection === "gallery" ? "active" : ""}
          >
            Bilder
          </button>
        </div>
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
