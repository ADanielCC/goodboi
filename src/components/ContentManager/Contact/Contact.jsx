import React, { Component } from "react";
// import GoogleMapsEmbed from "../GoogleMapsEmbed/GoogleMapsEmbed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

class Contact extends Component {
  render() {
    const { className,redTitle,blueTitle} = this.props; // Get the className prop

    const address = "Ledsjö Elfvik 1, 533 92 Lundsbrunn.";

    const googleMapsUrl = `https://www.google.com/maps/place/Skaraskogens+hundpensionat/@58.4647466,13.4834004,17z/data=!3m1!4b1!4m6!3m5!1s0x465b1f469faf35e9:0xf82b54525a99ee73!8m2!3d58.4647466!4d13.4859753!16s%2Fg%2F11fm4w3syk?entry=ttu`;

    return (
      <div
        ref={this.props.contactRef}
        className={className}
      >
        <h2 className={redTitle}>Kontakta oss</h2>
        <p>Telefon: <a href="tel:0511/57400">0511/57400 </a> alt. <a href="tel:070-565-85-82">0705658582</a> </p>
        <p>E-mail: <a href="mailto:michelle.g@bahnhof.se">michelle.g@bahnhof.se</a></p>
        <p>
        <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        Besöksadress : Ledsjö Elfvik 1, 53392 Lundsbrunn.</a>
         <p>(Från E20 tag Lundsbrunn/Eggby avfarten  kör mot Eggby  ca 800meter )</p>  </p>

         <div>
     
      {/* <GoogleMapsEmbed></GoogleMapsEmbed> */}
      {/* on hold until googleMaps API key */}

    </div>

      </div>
    );
  }
}

export default Contact;
