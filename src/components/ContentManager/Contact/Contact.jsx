import React, { Component } from "react";

class Contact extends Component {
  render() {
    const { className } = this.props; // Get the className prop
    return (
      <div
        ref={this.props.contactRef}
        className={className}
      >
        <h2>Contact</h2>
        <p>Contact information, email buttons, phone numbers, etc.</p>
      </div>
    );
  }
}

export default Contact;
