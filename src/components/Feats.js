import React from "react";
import Button from "./Button";

class Feats extends React.Component {

  onFeatClick = (event) => {
    const { selectedFeat, reset, update } = this.props;
    console.log(event.target.name);
    if (selectedFeat === event.target.name) {
      reset();
    } else {
      update(event.target.name);
    }
  };

  render() {
    return (
      <div onClick={this.onFeatClick}>
        <Button
          name="GWM"
          backgroundColor={
            this.props.selectedFeat === "GWM" ? "blue" : "cyan"
          }
        >
          Great Weapon Master/Sharpshooter
        </Button>
      </div>
    );
  }
}

export default Feats;
