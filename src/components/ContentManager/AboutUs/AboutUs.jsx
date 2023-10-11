import React, { Component } from 'react';

class AboutUs extends Component {


  render() {

    const { className, redTitle, currentLanguage } = this.props;

    const content = currentLanguage === 'english'
      ? {
        title: 'About us', 
        title2:'OUR TEAM',       
        description: 'About us',
        text: 'We (Michéle Gregori and Karl Henrik Adolfsson) took over the Skaraskogen dog boarding house on 1/4 2022. Got our permit from the County Board on 7/4 and got our first hundred on 10/4. Since then, we have received dogs for registration, daycare and from visitors to Skara sommarland. The facility consists of 12 boxes of different sizes with direct exit to separate rest yards. A fenced grass area for play and activity.',
        list: 'Michéle Gregori - Trained dog instructor and approved by the county board, Karl Henrik Adolfsson',
      }
      : {
        title: 'Om oss',
        title2:'VÅRT TEAM',
        description: 'Om oss',
        text: 'Vi (Michéle Gregori samt Karl Henrik Adolfsson) tog över Skaraskogens hundpensionat den 1/4 2022.Fick vårt tillstånd av Länsstyrelsen den 7/4 och fick våra första hundra den 10/4.Sedan dess har vi tagit emot hundar för inackordering, dagis samt från besökare på Skara sommarland,Anläggningen består av 12 boxa av olika storlekar med direktutgång till separata rastgårdar.En inhägnad gräsplan för lek och aktivering.',
        list: 'Michéle Gregori - Utbildad hundinstruktör och godkänd av länsstyrelsen, Karl Henrik Adolfsson',
      };

    const listItems = content.list.split(', ').map((item, index) => (
      <li key={index}>{item}</li>
    ));
    return (
      <div ref={this.props.contactRef}
        className={className}
      >
        <h2 className={redTitle}>Om oss</h2>
        <p>{content.text}
        </p>

        <h3 className={redTitle}>{content.title2}</h3>
        <ul>
          {listItems}
        </ul>

      </div>
    );
  }
}

export default AboutUs;
