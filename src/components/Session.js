import React from "react";
// import ProfileBanner from "./ProfileBanner";
// import InfoBlock from "./InfoBlock";
// import MainRoller from "./MainRoller";
// import QuickOptions from "./QuickOptions";
import CharacterList from "./CharacterList";
import CharacterInfo from "./CharacterInfo";
import Dice from "./Dice";
import Total from "./Total";
import RollStats from "./RollStats";
import Proficiency from "./Proficiency";
import Advantage from "./Advantage";
import Feats from "./Feats"
import RollLog from "./RollLog";
import RollButton from "./RollButton";
import ResetButton from "./ResetButton"
import { API, graphqlOperation } from "aws-amplify";
import { listCharacters, getCharacter } from "../graphql/queries";

class Session extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      selectedCharacter: {
        id: "",
        name: "",
        profile: {},
        class: "",
        level: 0,
        str: 0,
        dex: 0,
        con: 0,
        wis: 0,
        int: 0,
        chr: 0,
      },
      selectedDice: 20,
      selectedDiceQty: 1,
      totalRoll: 0,
      statMod: {
        stat: '',
        num: null,
      },
      advantage: "",
      proficient: {
        name: "",
        num: null,
      },
      feat: "",
      rollLog: [],
      dice:   [
        {
          name: 'D4',
          sides: 4,
          qty: 1
        },
        {
          name: 'D6',
          sides: 6,
          qty: 1
        },
        {
          name: 'D8',
          sides: 8,
          qty: 1
        },
        {
          name: 'D10',
          sides: 10,
          qty: 1
        },
        {
          name: 'D12',
          sides: 12,
          qty: 1
        },
        {
          name: 'D20',
          sides: 20,
          qty: 1
        },
        {
          name: 'D100',
          sides: 100,
          qty: 1
        }
      ]
    };
  }

  // const { selectedCharacter, selectedDice, selectedDiceQty, rawRoll, statMod, advantage, proficient, feat, rollLog} = this.state

  onAttributeChange = (event) => {
    console.log(event);
    this.setState({
      selectedCharacter: {
        ...this.state.selectedCharacter,
        [event.target.name]: event.target.valueAsNumber || event.target.value,
      },
    });
  };

  onChooseStat = (statName) => {
    if (this.state.statMod.stat === statName) {
      this.resetStatMod()
    } else {
    this.setState({
      statMod: {
        stat: statName,
        num: Math.floor((this.state.selectedCharacter[statName] - 10) / 2),
      }}, () => console.log("Your stat mod is ", this.state.statMod.num));
    }
  };

  resetStatMod = () => {
    this.setState({
      statMod: {
        stat: '',
        num: null,
      }
    }, () => console.log(this.state.statMod) )
  }

  resetDiceButtons = () => {
    this.setState({
      selectedDice: 20,
      selectedDiceQty: 1,
    })
    const resetDice = () => {

    }
  }

  resetModButtons = () => {
    this.setState({
      statMod: {
        stat: '',
        num: null,
      },
      advantage: "",
      proficient: {
        name: "",
        num: null,
      },
      feat: "",
    })
  }

  // create object that houses all the modifiers and roll values
  // total component would take sum of all the object values, pass object as prop
  // createRollLogEntry would construct the roll log based on that object

  makeRollObj = () => {
    const rollObj = this.state
    return rollObj
  }

  calcTotalRoll = () => {
    // need to conditionally config rolls
    const { rawRoll, selectedDice, statMod, proficient, feat } = this.state
    let totalRoll = 0
    const isFeatUsed = statMod.stat === 'str' || statMod.stat === 'dex'
    
    // add up the sum of all indexes in rawRoll and set totalRoll equal to sum
    totalRoll = rawRoll.reduce((sum, num) => sum + num, 0)
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

  componentDidMount = async () => {
    console.log(this.props.profile)
    const filter = {
      profileCharacterId: {
        eq: this.props.profile
        }
      }
    try {
      const response = await API.graphql(graphqlOperation(listCharacters, {filter}));
      console.log(response)
      const characters = response.data.listCharacters.items
      this.setState({characters})
    } catch(err) {
      console.error(err)
    }
    // fetch(`/session?profileId=${this.props.profile}`)
    //   .then((response) => response.json())
    //   .then((characters) => this.setState(characters));
    // .then(console.log('characters are', this.state.characters))
  };

  onCharacterClick = async (event) => {
    event.preventDefault();
    console.log(event)
    const targetId = event.target.attributes.value.value;
    console.log(targetId)
    // const selectedCharacter = this.state.characters.find(
    //   (character) => character.id === targetId
    // );
    try {
      const response = await API.graphql(graphqlOperation(getCharacter, {id: targetId}));
      console.log(response)
      const selectedCharacter = response.data.getCharacter
      this.setState(
        { selectedCharacter },
        console.log("selectedCharacter state updated")
      );
    } catch(err) {
      console.log(err)
    }
  };

  updateTotalRoll = (total) => {
    this.setState({ totalRoll: total });
    console.log('UPDATING TOTAL ROLL *********')
  };

  updateSelectedDice = (die) => {
    this.setState({ selectedDice: die });
  };

  updateSelectedDiceQty = (num) => {
    this.setState({ selectedDiceQty: num });
  };

  updateDiceQty = (num, name) => {
    const newDice = this.state.dice
    const updatedDiceIndex = newDice.findIndex(die => die.name === name)
    newDice[updatedDiceIndex].qty = num 
    this.setState({ dice: newDice })
  }

  resetDiceQty = () => {
    const resetDice = this.state.dice.map((die) => {
      return {
        ...die,
        qty: 1
      }
    })
    this.setState({dice: resetDice})
  }

  updateProficient = (profName, profNum) => {
    this.setState({ proficient: {
      name: profName,
      num: profNum,
      } 
    }, console.log(this.state.proficient));
    
  };

  resetProfMod = () => {
    this.setState({
      proficient: {
        name: '',
        num: null,
      }
    }, () => console.log(this.state.proficient))
  }

  updateAdvantage = (val) => {
    this.setState({
      advantage: val,
    }, console.log(this.state.advantage))
  }

  resetAdvantage = () => {
    this.setState({
      advantage: '',
    }, console.log(this.state.advantage))
  }

  updateFeat = (val) => {
    this.setState({
      feat: val,
    }, console.log('Feat is', this.state.feat))
  }

  resetFeat = () => {
    this.setState({
      feat: '',
    }, console.log('Reset Feat', this.state.feat))
  }

  fetchRollLog = ({ rollLog }) => {
    console.log('initializing roll log state', { rollLog })
    this.setState({ rollLog })
  }

  updateRollLog = (roll) => {
    const newEntry = this.createRollLogEntry(roll)
    const updatedLog = this.state.rollLog
    console.log('old log', updatedLog)
    if (updatedLog.length >= 10) {
      updatedLog.pop()
    }
    updatedLog.unshift(newEntry)
    console.log('new log', updatedLog)
    this.setState({rollLog: updatedLog})
    this.postLogEntry(newEntry)
  }

  createRollLogEntry = (roll) => {
    const newEntry = {
      timestamp: Date(), 
      text: `Your roll was ${roll}`,
      _character: this.state.selectedCharacter._id,
    }
    // endless loop
    // this.updateRollLog(newEntry)
    return newEntry
  }

  postLogEntry = (entry) => {
    fetch(`/rollLog?characterId=${this.state.selectedCharacter._id}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(entry),
    })
  }  

  renderDice = () => {
    const displayDice = this.state.dice.map(die => {
      return(<Dice 
        updateSelectedDice={this.updateSelectedDice}
        updateSelectedDiceQty={this.updateSelectedDiceQty}
        updateDiceQty={this.updateDiceQty}
        key={die.name}
        name={die.name}
        sides={die.sides}
        qty={die.qty}
      />)
    } )
    return displayDice
  }
  
  render() {
    
    return (
      <div>
        <div>
          {this.state.selectedCharacter.id ? (
            <div>
              <CharacterInfo
                character={this.state.selectedCharacter}
                onAttributeChange={this.onAttributeChange}
              />
              <RollLog
                id={this.state.selectedCharacter._id}
                fetch={this.fetchRollLog}
                update={this.updateRollLog}
                createEntry={this.createRollLogEntry}
                log={this.state.rollLog}
                lastRoll={this.state.rawRoll}
              />
              <div>
                {this.renderDice()}
              </div>
              <RollButton
                sides={this.state.selectedDice}
                name={`D${this.state.selectedDice}`}
                qty={this.state.selectedDiceQty}
                selectedDice={this.state.selectedDice}
                statMod={this.state.statMod}
                proficient={this.state.proficient}
                feat={this.state.feat}
                advantage={this.state.advantage}
                updateRollLog={this.updateRollLog}
                update={this.updateTotalRoll}
                />
              <Total
                total={this.state.totalRoll}
                // onDiceClick={this.onDiceClick}
              />
              <ResetButton text="Reset Dice" reset={this.resetDiceButtons} resetQty={this.resetDiceQty} />
              <ResetButton text="Reset Mods" reset={this.resetModButtons} />
              CHOOSE YOUR MODIFIERS
              <RollStats onChooseStat={this.onChooseStat} selectedStatName={this.state.statMod.stat} resetStatMod={this.resetStatMod} />
              <Proficiency
                level={this.state.selectedCharacter.level}
                update={this.updateProficient}
                reset={this.resetProfMod}
                selectedProf={this.state.proficient}
              />
              <Advantage selectedAdv={this.state.advantage} update={this.updateAdvantage} reset={this.resetAdvantage} />
              <Feats selectedFeat={this.state.feat} update={this.updateFeat} reset={this.resetFeat} /> 
            </div>
          ) : (
            <CharacterList
              characters={this.state.characters}
              handleClick={this.onCharacterClick}
            />
          )}
        </div>

        {/* <ProfileBanner />
        <InfoBlock />
        <MainRoller />
        <QuickOptions /> */}
      </div>
    );
  }
}

export default Session;
