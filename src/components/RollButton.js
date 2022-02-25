import React from "react";
import Button from "./Button"


class RollButton extends React.Component {
  calcTotalRoll = (rolls, selectedDice, statMod, proficient, feat, advantage) => {
    // need to conditionally config rolls
    let totalRoll = 0
    const isFeatUsed = statMod.stat === 'str' || statMod.stat === 'dex'
    
    // add up the sum of all indexes in rolls and set totalRoll equal to sum
    totalRoll = rolls.reduce((sum, num) => sum + num, 0)
    console.log('total raw roll is', totalRoll)
    switch(selectedDice) {
      case 20 : 
        totalRoll = (totalRoll + statMod.num + proficient.num)
        // roll with adv or disadv
        if (isFeatUsed && feat) {
          // subtract 5 from roll
          totalRoll -= 5
          // create roll log entry
        }
        break
      case 100:
        // no mods add to d100 roll
        break
      default: 
        // stats may or may not help d4-d12 rolls
        totalRoll += (statMod.num)
        if (isFeatUsed && feat) {
          // add 10 to roll
          totalRoll += 10
          // create roll log entry
        }
      }
    return totalRoll
  };



  rollDice = (qty, sides, name) => {
    let rolls = [];
    for (let i = 1; i <= qty; i++) {
      rolls.push(Math.ceil(Math.random() * sides));
    }
    console.log(
      `You rolled ${qty} ${name}! Your rolls are:`,
      rolls
    );
    return rolls
  };
  
  onRoll = (event) => {
    event.preventDefault();
    const { selectedDice, statMod, proficient, feat, advantage, name, qty, sides, update } = this.props
    const firstRolls = this.rollDice(qty, sides, name);
    const firstTotalRoll = this.calcTotalRoll(firstRolls, selectedDice, statMod, proficient, feat)
    let totalRoll, secondRolls, secondTotalRoll
    if (advantage) {
      secondRolls = this.rollDice(qty, sides, name);
      secondTotalRoll = this.calcTotalRoll(secondRolls, selectedDice, statMod, proficient, feat)
    }
    switch(advantage) {
      case 'advantage':
        totalRoll = Math.max(firstTotalRoll, secondTotalRoll)
        break
      case 'disadvantage':
        totalRoll = Math.min(firstTotalRoll, secondTotalRoll)
        break
      default:
        totalRoll = firstTotalRoll
        break
    }
    
    update(totalRoll)
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
