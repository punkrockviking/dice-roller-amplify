import React from "react";
// import Form from "./Form";

class CharacterInfo extends React.Component {
  calcProficiency = () => {
    if (this.props.character.level <= 4) {
      return 2;
    }
    if (this.props.character.level <= 8) {
      return 3;
    }
    if (this.props.character.level <= 12) {
      return 4;
    }
    if (this.props.character.level <= 16) {
      return 5;
    }
    if (this.props.character.level <= 20) {
      return 6;
    }
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    // console.log(this.props.character);
    fetch(`/session`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(this.props.character),
    });
  };

  render() {
    return (
      <div>
        Info for {this.props.character.name} is displayed here!
        <div>
          <form onSubmit={this.onFormSubmit}>
            <label>
              NAME
              <input
                type="string"
                name="name"
                value={this.props.character.name}
                onChange={this.props.onStatChange}
              />
            </label>
          </form>

          <form onSubmit={this.onFormSubmit}>
            <label>
              LEVEL
              <input
                type="number"
                name="level"
                min="1"
                max="20"
                value={this.props.character.level}
                onChange={this.props.onStatChange}
              />
            </label>
            <label>PROFICIENCY:{this.calcProficiency()}</label>
          </form>

          <form onSubmit={this.onFormSubmit}>
            <label>
              STR
              <input
                type="number"
                name="str"
                min="1"
                max="24"
                value={this.props.character.str}
                onChange={this.props.onStatChange}
              />
            </label>
            <label>Mod:{Math.floor((this.props.character.str - 10) / 2)}</label>
          </form>

          <form onSubmit={this.onFormSubmit}>
            <label>
              DEX
              <input
                type="number"
                name="dex"
                min="1"
                max="24"
                value={this.props.character.dex}
                onChange={this.props.onStatChange}
              />
            </label>
            <label>Mod:{Math.floor((this.props.character.dex - 10) / 2)}</label>
          </form>

          <form onSubmit={this.onFormSubmit}>
            <label>
              CON
              <input
                type="number"
                name="con"
                min="1"
                max="24"
                value={this.props.character.con}
                onChange={this.props.onStatChange}
              />
            </label>
            <label>Mod:{Math.floor((this.props.character.con - 10) / 2)}</label>
          </form>

          <form onSubmit={this.onFormSubmit}>
            <label>
              WIS
              <input
                type="number"
                name="wis"
                min="1"
                max="24"
                value={this.props.character.wis}
                onChange={this.props.onStatChange}
              />
            </label>
            <label>Mod:{Math.floor((this.props.character.wis - 10) / 2)}</label>
          </form>

          <form onSubmit={this.onFormSubmit}>
            <label>
              INT
              <input
                type="number"
                name="int"
                min="1"
                max="24"
                value={this.props.character.int}
                onChange={this.props.onStatChange}
              />
            </label>
            <label>Mod:{Math.floor((this.props.character.int - 10) / 2)}</label>
          </form>

          <form onSubmit={this.onFormSubmit}>
            <label>
              CHR
              <input
                type="number"
                name="chr"
                min="1"
                max="24"
                value={this.props.character.chr}
                onChange={this.props.onStatChange}
              />
            </label>
            <label>Mod:{Math.floor((this.props.character.chr - 10) / 2)}</label>
          </form>
        </div>
      </div>
    );
  }
}

export default CharacterInfo;
