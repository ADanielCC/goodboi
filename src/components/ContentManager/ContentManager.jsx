import React, { Component } from "react";
import Services from './Services/Services';
import AboutUs from './AboutUs/AboutUs';
import Contact from './Contact/Contact';
import Pricing from "./Pricing/Pricing";
import Messaging from './Messaging/Messaging';
import Gallery from './Gallery/Gallery';
import Landing from "./Landing/Landing";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";

import LinkButtons from "./LinkButtons/LinkButtons";
import './ContentManager.css';

class ContentManager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSection: "landing",
      currentLanguage: "english", // Set the initial language
    };
  }

  // Function to set the active section
  setActiveSection = (section) => {
    this.setState({ activeSection: section });
  };

  // Function to toggle the language
  toggleLanguage = () => {
    this.setState((prevState) => ({
      currentLanguage: prevState.currentLanguage === "english" ? "swedish" : "english",
    }));
  };

  render() {
    const { activeSection, currentLanguage } = this.state;
    const commonProps = {
      redTitle: "red-title",
      blueTitle: "blue-title",
      currentLanguage, // Pass the current language to child components
      toggleLanguage: this.toggleLanguage, // Pass the language toggle function to child components
    };

    const images = [
      { url: image1, alt: "Image 1" },
      { url: image2, alt: "Image 2" },
      { url: image3, alt: "Image 3" },
      { url: image4, alt: "Image 4" },
    ];

    return (
      <div className="content-manager">
        <div className="sections-wrapper">
          <div className="button-wrapper">


            <button
              onClick={() => this.setActiveSection("landing")}
              className={activeSection === "landing" ? "active" : ""}
            >
              På God Tass
            </button>
            <button
              onClick={() => this.setActiveSection("about")}
              className={activeSection === "about" ? "active" : ""}
            >
              {this.state.currentLanguage === "english" ? "About us" : "Om oss"}
              {/* Om oss */}
            </button>
            <button
              onClick={() => this.setActiveSection("pricing")}
              className={activeSection === "pricing" ? "active" : ""}
            >
              {this.state.currentLanguage === "english" ? "Our Services" : "Våra tjänster"}
            </button>
            <button
              onClick={() => this.setActiveSection("contact")}
              className={activeSection === "contact" ? "active" : ""}
            >
              {this.state.currentLanguage === "english" ? "Contact us" : "Kontakta oss"}
            </button>
            <button
              onClick={() => this.setActiveSection("messaging")}
              className={activeSection === "messaging" ? "active" : ""}
            >
              {this.state.currentLanguage === "english" ? "Message us" : "Meddela oss"}
            </button>
            <button
              onClick={() => this.setActiveSection("gallery")}
              className={activeSection === "gallery" ? "active" : ""}
            >
              {this.state.currentLanguage === "english" ? "Gallery" : "Bilder"}
            </button>


           

          </div>
           {/* Language change button!! */}
           <button onClick={this.toggleLanguage}
                   className="flag-button"
           >
              {this.state.currentLanguage === "english" ? "Svenska" : "English"}
            </button>



          <Services className="content" {...commonProps} />
          <LinkButtons {...commonProps} />
          {activeSection === "landing" && <Landing className="content" {...commonProps} />}
          {activeSection === "about" && <AboutUs className="content" {...commonProps} />}
          {activeSection === "pricing" && <Pricing className="content" {...commonProps} />}
          {activeSection === "contact" && <Contact className="content" {...commonProps} />}
          {activeSection === "messaging" && <Messaging className="content" {...commonProps} />}
          {activeSection === "gallery" && <Gallery className="content" images={images} {...commonProps} />}
        </div>
      </div>
    );
  }
}

export default ContentManager;
