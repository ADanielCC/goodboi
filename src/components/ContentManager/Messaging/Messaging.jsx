import React, { Component } from "react";

class Messaging extends Component {
  render() {
    const { className } = this.props; // Get the className prop
    return (
      <div 
      ref={this.props.messagingRef}
      className={className}
      >
        <h2>Messaging</h2>
        <p>Short form to send messages with questions.</p>
      </div>
    );
  }
}

export default Messaging;
