import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft, faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import "./Gallery.css";

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFullscreen: false,
      pauseOnHover: true,
      activeArrow: null, // Track the active arrow (left or right)
    };
  }

  handleImageClick = () => {
    this.setState((prevState) => ({
      isFullscreen: !prevState.isFullscreen,
    }));
  };

  handleArrowClick = (arrow) => {
    this.setState({ activeArrow: arrow });
  };

  render() {
    const { isFullscreen, pauseOnHover, activeArrow } = this.state;
    const { images } = this.props;

    return (
      <div className={`gallery ${isFullscreen ? "fullscreen" : ""}`}>
        <Carousel autoPlay={!isFullscreen} stopOnHover={pauseOnHover} renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={() => {
                onClickHandler();
                this.handleArrowClick("left"); // Set the active arrow to "left" on click
              }}
              title={label}
              className={`arrow arrow-left ${activeArrow === "left" ? "active" : ""}`}
            >
              <FontAwesomeIcon icon={faArrowCircleLeft} />
            </button>
          )
        } renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={() => {
                onClickHandler();
                this.handleArrowClick("right"); // Set the active arrow to "right" on click
              }}
              title={label}
              className={`arrow arrow-right ${activeArrow === "right" ? "active" : ""}`}
            >
              <FontAwesomeIcon icon={faArrowCircleRight} />
            </button>
          )
        }>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image.url}
                alt={image.alt}
                className="gallery-image"
                onClick={this.handleImageClick}
              />
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default Gallery;