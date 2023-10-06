import React, { Component } from "react";

class Contact extends Component {
  render() {
    const { className,redTitle,blueTitle} = this.props; // Get the className prop
    return (
      <div
        ref={this.props.contactRef}
        className={className}
      >
        <h2 className={redTitle}>Contact</h2>
        <p>Telefon: 0511/57400 alt. 0705658582 </p>
        <p>E-mail: michelle.g@bahnhof.se</p>
        <p>Besöksadress : Ledsjö Elfvik 1, 53392 Lundsbrunn.
         (Från E20 tag Lundsbrunn/Eggby avfarten  kör mot Eggby  ca 800meter )  </p>

      </div>
    );
  }
}

export default Contact;
