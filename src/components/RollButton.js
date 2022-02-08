import React from "react";
import Button from "./Button"

class RollButton extends React.Component {
  onRoll = (event) => {
    event.preventDefault();
    const rollDice = () => {
      let totalRoll = [];
      for (let i = 1; i <= this.props.qty; i++) {
        totalRoll.push(Math.ceil(Math.random() * this.props.sides));
      }
      console.log(
        `You rolled ${this.props.qty} ${this.props.name}! Your rolls are:`,
        totalRoll
      );
      return this.props.updateRawRoll(totalRoll);
    };
    rollDice();
  };

  render() {
    return (
      <div>
        {`Roll a ${this.props.name} ${this.props.qty} times!`}
        <Button backgroundColor="lightblue" hoverColor="cyan" onClick={this.onRoll}>Roll!</Button>
      </div>
    );
  }
}

export default RollButton;
