import React from "react";

class RollLog extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     rollLog: [],
  //   };
  // }

  //FIGURE OUT A WAY TO FIND THE ARRAY WITH THE LOG ENTRIES THEN MAP THROUGH THE ENTRIES!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  // addToLog = () => {
  //   let newLog = this.props.log
  //   newLog.push(this.props.lastRoll);
  //   console.log(newLog)
  //   return newLog;
  // };
  
  componentDidMount = () => {
    fetch(`/rollLog?characterId=${this.props.id}`)
      .then((response) => response.json())
      .then(({rollLog}) => this.props.fetch({ rollLog }));
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
          <div key={Math.random()}>{entry.timestamp}: {entry.text}</div>
        ))}
      </>
    );
  }
}

export default RollLog;
