import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listProfiles } from "../graphql/queries";

class Profiles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [],
      selectedProfile: "",
    };
  }

  componentDidMount = async () => {
    const response = await API.graphql(graphqlOperation(listProfiles));
    console.log(response)
    console.log(response.data.listProfiles.items)
    const profiles = response.data.listProfiles.items
    this.setState({profiles})
    // fetch("/profiles")
    //   .then((response) => response.json())
    //   .then((profiles) => this.setState(profiles))
    //   .then(console.log(this.state));
  };

  render() {
    return (
      <div>
        {this.state.profiles.map((profile) => (
          <div
            key={profile.id}
            value={profile.id}
            onClick={this.props.handleClick}
          >
            {profile.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Profiles;
