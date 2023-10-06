import React from "react";

function GoogleMapsEmbed() {
  const latitude = 58.4643641; // Replace with the actual latitude
  const longitude = 13.4781029; // Replace with the actual longitude

  return (
    <div>
      <h2>Google Maps Preview</h2>
      <iframe
        title="Google Maps Preview"
        width="600"
        height="450"
        loading="lazy"
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d${longitude}!3d${latitude}!4m5!3m4!1s0x465b1f469faf35e9:0xf82b54525a99ee73!8m2!3d${latitude}!4d${longitude}&zoom=14`}
        allowFullScreen
      ></iframe>
      <p>
        <a href={`https://www.google.com/maps/place/${latitude},${longitude}`} target="_blank" rel="noopener noreferrer">
          Open in Google Maps
        </a>
      </p>
    </div>
  );
}

export default GoogleMapsEmbed;
