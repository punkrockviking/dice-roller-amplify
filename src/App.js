import React from "react";
import Profiles from "./components/Profiles";
// import { Button } from './Button'
import Session from "./components/Session";
import Amplify, { Auth, Hub } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import awsExports from "./aws-exports";
import { withAuthenticator } from '@aws-amplify/ui-react';
// import '@aws-amplify/ui-react/styles.css';
Amplify.configure(awsExports);


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      selectedProfile: "",
      characters: [],
      selectedCharacter: "",
    };
  }

  onProfileClick = (event) => {
    // console.log(this)
    event.preventDefault();
    // console.log(event)
    this.setState(
      { selectedProfile: event.target.attributes.value.value },
      console.log(this.state)
    );
  };

  // onCharacterClick = (event) => {
  //     event.preventDefault()
  //     this.setState( {selectedCharacter: event.target.attributes.value.nodeValue}, console.log(this.state.selectedCharacter) )
  // }

  componentDidUpdate = (prevProp, prevState) => {
    if (this.state.selectedProfile !== prevState.selectedProfile) {
      fetch(`/session?profileId=${this.state.selectedProfile}`)
        .then((response) => response.json())
        .then((characters) => this.setState({ characters }));
    }
  };

  render() {
    // console.log(this.state)
    console.log(this.props)
    return (
      <div>
        
        <div>
          <div>App Component</div>
          {this.state.selectedProfile ? (
            <Session profile={this.state.selectedProfile} />
          ) : (
            <div>
              Select a profile:
              <Profiles handleClick={this.onProfileClick} />
            </div>
          )}
        </div>
        {/* <div>
                    <Button backgroundColor='cyan' >Test Button</Button>
                </div> */}
      </div>
    );
  }
}

export default withAuthenticator(App);
