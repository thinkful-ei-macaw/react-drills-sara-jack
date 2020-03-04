import React from 'react';

class RouletteGun extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chamber: null,
      spinningTheChamber: false
    }
  }

  static defaultProps = {
    bulletInChamber: 8
  }

  handleButtonClick() {
    this.setState({
      spinningTheChamber: true,
      chamber: null
    });

    console.log(this.state);

    this.spin = setTimeout(() => {
      let ran = Math.ceil(Math.random() * 8);
      this.setState({
        chamber: ran,
        spinningTheChamber: false
      });
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.spin);
  }

  render () {
    return(
    <div>
      <p>
        {this.state.spinningTheChamber && 'spinning the chamber and pulling the trigger!...'}
        {this.state.chamber === this.props.bulletInChamber && 'BANG!!'}
        {this.props.bulletInChamber !== this.state.chamber && this.state.chamber && 'youre safe'}
      </p>
      <button onClick={() => this.handleButtonClick()}>Pull the trigger!</button>
    </div>
    )
  }
}

export default RouletteGun;