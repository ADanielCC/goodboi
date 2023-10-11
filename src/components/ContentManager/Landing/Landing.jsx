import React, { Component } from "react";
// import { faPaw } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Landing extends Component {
  render() {

    const { className,redTitle,blueTitle,currentLanguage} = this.props; // Get the className prop

    const content = currentLanguage === 'english'
    ? {
      title1: 'Welcome to the dog boarding house',
      title2:'(former Skaraskoge dog boarding house)'
     
      
    }
    : {
      title1: 'Välkommen till hundpensionatet',
      title2:'(f.d Skaraskoges hundpensionat)'
     };




    return (
      <div 

      className={className}

      >
       
        <h2 className={redTitle}>{content.title1}</h2>
        <h1 className={blueTitle}>PÅ GOD TASS</h1>
        {/* <h1 className={blueTitle}>PÅ GOD T<FontAwesomeIcon icon={faPaw} />SS</h1> */}
        {/* Stylelised icon to match the logo */}
        <h2 className={redTitle}>{content.title2}</h2>
        

      </div>
    );
  }
}

