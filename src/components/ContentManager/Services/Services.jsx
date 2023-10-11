import React, { Component } from "react";

class Services extends Component {
  render() {

    // const { className,redTitle,blueTitle} = this.props; // Get the className prop
    const { className,redTitle} = this.props;
    return (
      <div ref={this.props.servicesRef}
      className={className}
            >
        <h2 className={redTitle} >VÅRA TJÄNSTER</h2>
        <p>Vi driver ett hundpensionat i form av:</p>
        <ul>
       <li>Hundpensionat med inackordering </li>
       <li>Hunddagis/Nattis</li>
       <li>Tillfällig placering (t.ex. besök till Skara Sommarland eller liknande)</li>
       </ul>


      </div>
    );
  }
}

export default Services;
