import React from "react";

class CharacterList extends React.Component {
  render() {
    return (
      <div>
        {this.props.characters.map((character) => (
          <div
            key={character.id}
            value={character.id}
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
