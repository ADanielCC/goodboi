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
    // const { className, redTitle, blueTitle } = this.props;
    const { className, redTitle, currentLanguage } = this.props; // Get the className prop

    const content = currentLanguage === 'english'
      ? {
        title: 'Shoot us a message!',
        text: 'The easiest way to reach us is via this form. We are always happy to hear from you! We look forward to hearing from you.',
        form: {
          firstName: 'First name',
          lastName: 'Last name',
          email: 'E-mail',
          phoneNumber: 'Phone number',
          message: 'Message',
          submit:'Submit',
        }
      }
      : {
        title: 'Hör gärna av dig!',
        text: 'Det enklaste sättet att nå oss är via detta formulär. Vi är alltid glada att höra från dig! Vi ser fram emot att höra av dig.',
        form: {
          firstName: 'Förnamn',
          lastName: 'Efternamn',
          email: 'E-postadress',
          phoneNumber: 'Telefon',
          message: 'Meddelande',
          submit:'Skicka in',
        }

      };

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
        <h2 className={redTitle}>{content.title}</h2>
        <p>{content.text}</p>

        <div className="form-wrapper">
          <form onSubmit={this.handleSubmit}>
            <div className="form-field">
              <label className="form-label" htmlFor="firstName">
                {content.form.firstName} *
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
                {content.form.lastName} *
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
                {content.form.email} *
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
                {content.form.phoneNumber}
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
                {content.form.message}
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
              {content.form.submit}
              </button>
            </div>
          </form>
        </div>


      </div>
    );
  }
}

export default Messaging;
