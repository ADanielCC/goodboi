import React, { Component } from "react";

class Gallery extends Component {
  render() {
    const { className,redTitle,blueTitle} =this.props; // Get the className prop
    return (
      <div 
      ref={this.props.galleryRef}
      className={className}
      >
        <h2 className={redTitle}>Gallery</h2>
        <p>Display images in a carousel-style format.</p>
      </div>
    );
  }
}

export default Gallery;
