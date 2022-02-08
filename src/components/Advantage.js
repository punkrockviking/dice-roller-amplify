import React from "react";
import Button from "./Button"

class Advantage extends React.Component {

  onAdvClick = (event) => {
    const { selectedAdv, reset, update } = this.props
    const { name } = event.target
    if (name === selectedAdv) {
      console.log('DEACTIVATING!!!!!!!!!!!!')
      reset()
    } else {
      update(name)
    }
    console.log(name);
  };

  render() {
    return (
      <div onClick={this.onAdvClick}>
        <Button name="advantage" backgroundColor={this.props.selectedAdv === "advantage" ? "blue" : "cyan"} >Advantage</Button>
        <Button name="disadvantage" backgroundColor={this.props.selectedAdv === "disadvantage" ? "blue" : "cyan"} >Disadvantage</Button>
      </div>
    );
  }
}

export default Advantage;
