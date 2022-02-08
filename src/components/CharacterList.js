import React from "react";

class CharacterList extends React.Component {
  render() {
    return (
      <div>
        {this.props.characters.map((character) => (
          <div
            key={character._id}
            value={character._id}
            onClick={this.props.handleClick}
          >
            {character.name}
          </div>
        ))}
      </div>
    );
  }
}

export default CharacterList;
