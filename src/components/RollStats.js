import React from "react";
import Button from "./Button"

class RollStats extends React.Component {

  onStatClick = (event) => {
    const { selectedStatName, resetStatMod, onChooseStat } = this.props
    console.log(event.target.name);
    if (selectedStatName === event.target.name) {
      resetStatMod()
    } else {
      onChooseStat(event.target.name);
    }
  };

  render() {
    const { selectedStatName } = this.props
    return (
      <div onClick={this.onStatClick}>
        <Button name="str" backgroundColor={selectedStatName === "str" ? "blue" : "cyan"} > STR </Button>
        <Button name="dex" backgroundColor={selectedStatName === "dex" ? "blue" : "cyan"} > DEX </Button>
        <Button name="con" backgroundColor={selectedStatName === "con" ? "blue" : "cyan"} > CON </Button>
        <Button name="wis" backgroundColor={selectedStatName === "wis" ? "blue" : "cyan"} > WIS </Button>
        <Button name="int" backgroundColor={selectedStatName === "int" ? "blue" : "cyan"} > INT </Button>
        <Button name="chr" backgroundColor={selectedStatName === "chr" ? "blue" : "cyan"} > CHR </Button>
      </div>
    );
  }
}

export default RollStats;
