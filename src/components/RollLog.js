import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listRollLogs } from "../graphql/queries";

class RollLog extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     rollLog: [],
  //   };
  // }

  //FIGURE OUT A WAY TO FIND THE ARRAY WITH THE LOG ENTRIES THEN MAP THROUGH THE ENTRIES!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  getRollLog = async (characterId) => {
    const filter = {
      characterRollLogId: {
        eq: characterId
        }
      }
    try {
      const response = await API.graphql(graphqlOperation(listRollLogs, {filter}, 10)); //limit 10 entries
      console.log(response)
      const rollLog = response.data.listRollLogs.items
      // set parent state with the 10 roll log entries just listed
      this.props.initialize(rollLog)
    } catch(err) {
      console.error(err)
    }
    // console.log('initializing roll log state', { rollLog })
    // this.setState({ rollLog })
  }
  
  componentDidMount = () => {
    // fetch(`/rollLog?characterId=${this.props.id}`)
    //   .then((response) => response.json())
    //   .then(({rollLog}) => this.props.fetch({ rollLog }));
    
    // Initialize roll log with data from db
    this.getRollLog(this.props.id)
    
    
        // CHECK THE OBJECT THAT IS BEING RETRIEVED FROM MY QUERY. FIND THE PROPERTY WHERE THE ARRAY IS. YOU NEED TO USE THAT PROPERTY TO MAP THE LOG ENTRIES
  };

  // onClick = () => {
  //   this.props.update(this.props.createEntry(this.props.lastRoll))
  // }

  // componentDidUpdate = () => {
  //   // what if instead of updating state and then posting data to backend, we post data to backend, fetch again, and THEN update state
  //   const newLogEntry = this.props.createEntry(this.props.lastRoll)

  //   fetch(`/rollLog?characterId=${this.props.id}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify(newLogEntry),
  //   })


    

    // // endless loop
    // this.props.update(this.props.createEntry(this.props.lastRoll))
    
  //   // post new roll log to backend
  //   fetch(`/session`, {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify(this.props.lastRoll),
  //   });
  // };

  render() {
    return (
      <>
        <div>RollLog:</div>
        {this.props.log.map((entry) => (
          <div key={entry.timestamp}>{entry.text}</div>
        ))}
      </>
    );
  }
}

export default RollLog;
