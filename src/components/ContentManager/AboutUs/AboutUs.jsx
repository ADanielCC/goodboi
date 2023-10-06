import React, { Component } from 'react';

class AboutUs extends Component {


  render() {
    const { className,redTitle,blueTitle} = this.props;
    return (
      <div ref={this.props.contactRef}
          className={className}
          >
        <h2 className={redTitle}>About us</h2>
        <p>Vi (Michéle Gregori samt Karl Henrik Adolfsson) tog över Skaraskogens hundpensionat den 1/4 2022. 
          Fick vårt tillstånd av Länsstyrelsen den 7/4 och fick våra första hundra den 10/4. 
          Sedan dess har vi tagit emot hundar för inackordering, dagis samt från besökare på Skara sommarland, 
          Anläggningen består av 12 boxa av olika storlekar med direktutgång till separata rastgårdar. 
          En inhägnad gräsplan för lek och aktivering.
        </p>

        <h3 className={redTitle}>VÅRT TEAM</h3>
        <ul>
          <li>Michéle Gregori - Utbildad hundinstruktör och godkänd av länsstyrelsen </li>
          <li>Karl Henrik Adolfsson </li>
        </ul>

      </div>
    );
  }
}

export default AboutUs;
