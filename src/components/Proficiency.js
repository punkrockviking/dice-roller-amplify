import React from "react";
import Button from "./Button"

class Proficiency extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     proficiency: "",
  //   };
  // }

  calc = () => {
    if (this.props.level <= 4) {
      return 2;
    }
    if (this.props.level <= 8) {
      return 3;
    }
    if (this.props.level <= 12) {
      return 4;
    }
    if (this.props.level <= 16) {
      return 5;
    }
    if (this.props.level <= 20) {
      return 6;
    }
  }

  calcProficiency = (name) => {
    const bonus = this.calc()
    return this.props.update(name, bonus)
  };

  calcExpertise = (name) => {
    const bonus = this.calc() * 2
    return this.props.update(name, bonus)
  };

  calcJackOfAllTrades = (name) => {
    const bonus = Math.floor(this.calc() / 2)
    this.props.update(name, bonus);
  };

  onProfClick = (event) => {
    const { name } = event.target
    if (name === this.props.selectedProf.name) {
      this.props.reset()
    } else if (name === "proficient") {
      this.calcProficiency(name);
    } else if (name === "expertise") {
      this.calcExpertise(name);
    } else if (name === "jackOfAllTrades") {
      this.calcJackOfAllTrades(name);
    }
    console.log(name);
  };

  render() {
    return (
      <div onClick={this.onProfClick}>
        <Button name="proficient" backgroundColor={this.props.selectedProf.name === "proficient" ? "blue" : "cyan"} >Proficient</Button>
        <Button name="expertise" backgroundColor={this.props.selectedProf.name === "expertise" ? "blue" : "cyan"} >Expertise</Button>
        <Button name="jackOfAllTrades" backgroundColor={this.props.selectedProf.name === "jackOfAllTrades" ? "blue" : "cyan"} >Jack of All Trades</Button>
      </div>
    );
  }
}

export default Proficiency;
