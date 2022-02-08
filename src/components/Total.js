import React from "react";

class Total extends React.Component {
  render() {
    return (
      <div>
        <label>Your Total Roll is: {this.props.total()}</label>
      </div>
    );
  }
}

export default Total;
