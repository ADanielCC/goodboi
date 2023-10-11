import React, { Component } from "react";

class Services extends Component {
  render() {
    const { className, redTitle, currentLanguage } = this.props;

    const content = currentLanguage === 'english'
      ? {
        title: 'Our Services',
        description: 'Explore our pricing and services below:',
        text: 'We run a dog boarding house in the form of:',
        list: 'Dog boarding house with registration, Dog daycare/nightcare, Temporary placement (e.g. visit to Skara Sommarland or similar) ',
      }
      : {
        title: 'Våra Tjänster',
        description: 'Utforska våra priser och tjänster nedan:',
        text: 'Vi driver ett hundpensionat i form av:',
        list: 'Hundpensionat med inackordering, Hunddagis/Nattis, Tillfällig placering (t.ex. besök till Skara Sommarland eller liknande)',
      };

    const listItems = content.list.split(', ').map((item, index) => (
      <li key={index}>{item}</li>
    ));

    return (
      <div ref={this.props.servicesRef} className={className}>
        <h2 className={redTitle}>{content.title}</h2>
        <p>{content.text}</p>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default Services;
