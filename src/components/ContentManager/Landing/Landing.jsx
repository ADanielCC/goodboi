import React, { Component } from "react";

export default class Landing extends Component {
  render() {

    const { className,redTitle,blueTitle} = this.props; // Get the className prop
    return (
      <div 

      className={className}

      >
       
        <h2 className={redTitle}>VÄLKOMMEN TILL HUNDPENSIONATET</h2>
        <h1 className={blueTitle}>PÅ GOD TASS</h1>
        <h2 className={redTitle}>(f.d Skaraskoges hundpensionat)</h2>


      </div>
    );
  }
}

