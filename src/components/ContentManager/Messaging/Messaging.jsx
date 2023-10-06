import React, { Component } from "react";

class Messaging extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // You can handle the form submission logic here,
    // e.g., sending the message to the server or displaying it.
    console.log(this.state);
  };

  render() {
    const { className, redTitle, blueTitle } = this.props; // Get the className prop
    const inputStyle = {
      textAlign: "left", // Align input fields to the left
      width: "100%", // Make input fields fill their container
      marginBottom: "15px", // Add space between fields
      height: "40px", // Adjust the height of the input fields
    };
    const textareaStyle = {
      textAlign: "left", // Align textarea to the left
      width: "100%", // Make textarea fill its container
      marginBottom: "15px", // Add space between fields
      height: "150px", // Adjust the height of the textarea
    };

    return (
      <div
        ref={this.props.messagingRef}
        className={className}
      >
        <h2 className={redTitle}>HÖR GÄRNA AV DIG!</h2>
        <p>Det enklaste sättet att nå oss är via detta formulär. Vi är alltid glada att höra från dig!

Vi ser fram emot att höra av dig.</p>

        <div className="form-wrapper">
          <form onSubmit={this.handleSubmit}>
            <div className="form-field">
              <label className="form-label" htmlFor="firstName">
                Förnamn *
              </label>
              <input
                style={inputStyle}
                type="text"
                id="firstName"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-field">
              <label className="form-label" htmlFor="lastName">
                Efternamn *
              </label>
              <input
                style={inputStyle}
                type="text"
                id="lastName"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-field">
              <label className="form-label" htmlFor="email">
                E-postadress *
              </label>
              <input
                style={inputStyle}
                type="email"
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-field">
              <label className="form-label" htmlFor="phoneNumber">
                Telefon
              </label>
              <input
                style={inputStyle}
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={this.state.phoneNumber}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-field">
              <label className="form-label" htmlFor="message">
                Meddelande
              </label>
              <textarea
                style={textareaStyle}
                id="message"
                name="message"
                value={this.state.message}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-field">
              <button type="submit" className="form-button">
                Skicka
              </button>
            </div>
          </form>
        </div>


      </div>
    );
  }
}

export default Messaging;
