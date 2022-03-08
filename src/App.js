import React from "react";
import Profiles from "./components/Profiles";
// import { Button } from './Button'
import Session from "./components/Session";
import Amplify, { Auth, API } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import awsExports from "./aws-exports";
import { withAuthenticator } from '@aws-amplify/ui-react';
import { listProfiles } from "./graphql/queries"
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

  componentDidMount = async () => {
    try {
      const user = await Auth.currentUserInfo()
      const response = await API.graphql({
        query: listProfiles,
        variables: {filter: {email: {eq: user.attributes.email}}}
      });
      console.log('******************', response)
      this.setState(
        { selectedProfile: response.data.listProfiles.items[0].id },
        console.log(this.state)
      )
    } catch(err) {
      console.error(err)
    }

    // const response = await API.graphql(graphqlOperation(getProfile));
    // console.log(response)
    // console.log(response.data.listProfiles.items)
    // const profiles = response.data.listProfiles.items
    // this.setState({profiles})
    // // fetch("/profiles")
    //   .then((response) => response.json())
    //   .then((profiles) => this.setState(profiles))
    //   .then(console.log(this.state));
  };

  // onCharacterClick = (event) => {
  //     event.preventDefault()
  //     this.setState( {selectedCharacter: event.target.attributes.value.nodeValue}, console.log(this.state.selectedCharacter) )
  // }

  // componentDidUpdate = (prevProp, prevState) => {
  //   if (this.state.selectedProfile !== prevState.selectedProfile) {
  //     fetch(`/session?profileId=${this.state.selectedProfile}`)
  //       .then((response) => response.json())
  //       .then((characters) => this.setState({ characters }));
  //   }
  // };

  render() {
    // console.log(this.state)
    Auth.currentUserInfo().then(
      (user) => console.log('!@!@!@!@!@!@!@!', user) 
    )
    console.log(this.props)
    return (
      <div>
        
        <div>
          <div>App Component</div>
          {this.state.selectedProfile ? (
            <Session profile={this.state.selectedProfile} />
          ) : (
            <div>
              Loading...
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
