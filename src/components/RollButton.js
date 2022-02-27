import React from "react";
import Button from "./Button"
import { API, graphqlOperation } from "aws-amplify";
import { createRollLog } from "../graphql/mutations";


class RollButton extends React.Component {

  calcTotalRoll = (rolls, selectedDice, statMod, proficient, feat, advantage) => {
    // need to conditionally config rolls
    let totalRoll = 0
    const isFeatUsed = statMod.stat === 'str' || statMod.stat === 'dex'
    
    // add up the sum of all indexes in rolls and set totalRoll equal to sum
    totalRoll = rolls.reduce((sum, num) => sum + num, 0)
    const advantageMessage = advantage ? `${advantage.toUpperCase()}: ` : ''
    // NEED TO GET ADVANTAGE INTO THE CASE 20
    let message = `${advantageMessage}${rolls.join(' + ')} on the dice `
    console.log('total raw roll is', totalRoll)
    let statModMessage
    switch(selectedDice) {
      case 20 : 
        totalRoll = (totalRoll + statMod.num + proficient.num)
        statModMessage = statMod.stat ? `+ ${statMod.num} for ${statMod.stat} ` : ''
        const proficientMessage = proficient.name ? `+ ${proficient.num} for ${proficient.name} ` : ''
        message += statModMessage + proficientMessage
        // roll with adv or disadv
        if (isFeatUsed && feat) {
          // subtract 5 from roll
          message += '- 5 for GWM/SS '
          totalRoll -= 5
          // create roll log entry
        }
        break
      case 100:
        // no mods add to d100 roll
        break
      default: 
        // stats may or may not help d4-d12 rolls
        statModMessage = statMod.stat ? `+ ${statMod.num} for ${statMod.stat} ` : ''
        message += statModMessage
        totalRoll += (statMod.num)
        if (isFeatUsed && feat) {
          // add 10 to roll
          message += '+ 10 for GWM/SS '
          totalRoll += 10
          // create roll log entry
        }
      }
    message += `for a total score of ${totalRoll}!`
    return [totalRoll, message]
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

  createLogEntry = async (characterId, text) => {
    const rollLog = {
      characterRollLogId: characterId,
      timestamp: new Date(),
      text: text,
    }
    console.log(rollLog)
    try {
      const response = await API.graphql({
        query: createRollLog,
        variables: {input: {...rollLog}}
      });
      console.log('******************', response)
    } catch(err) {
      console.error(err)
    }
    return rollLog
  }
  
  onRoll = (event) => {
    event.preventDefault();
    const { selectedDice, statMod, proficient, feat, advantage, name, qty, sides, update, character } = this.props
    const firstRolls = this.rollDice(qty, sides, name);
    const [firstTotalRoll, firstMessage] = this.calcTotalRoll(firstRolls, selectedDice, statMod, proficient, feat, advantage)
    this.createLogEntry(character, firstMessage)
    let totalRoll, secondRolls, secondTotalRoll, secondMessage
    if (advantage) {
      secondRolls = this.rollDice(qty, sides, name);
      [secondTotalRoll, secondMessage] = this.calcTotalRoll(secondRolls, selectedDice, statMod, proficient, feat, advantage)
      this.createLogEntry(character, secondMessage)
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


// pass down values for rollLog component into this component
// mutate my log entry in my createLogEntry method 
// manipulate the passed down roll log with new entries, pass it back up to parent state
