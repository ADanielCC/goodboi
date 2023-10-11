import React, { Component } from "react";
// import { faPaw } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Landing extends Component {
  render() {

    const { className,redTitle,blueTitle} = this.props; // Get the className prop
    return (
      <div 

      className={className}

      >
       
        <h2 className={redTitle}>VÄLKOMMEN TILL HUNDPENSIONATET</h2>
        <h1 className={blueTitle}>PÅ GOD TASS</h1>
        {/* <h1 className={blueTitle}>PÅ GOD T<FontAwesomeIcon icon={faPaw} />SS</h1> */}
        {/* Stylelised icon to match the logo */}
        <h2 className={redTitle}>(f.d Skaraskoges hundpensionat)</h2>
        

      </div>
    );
  }
}

