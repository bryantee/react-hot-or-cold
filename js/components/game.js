import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/index'
import GuessList from './guess-list'
import GuessForm from './guess-form'

export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.guess = this.guess.bind(this);
    this.makeGuess = this.makeGuess.bind(this);
    this.state = {};
  }

  guess(guessInput) {
    if (!guessInput) return;
    if (typeof guessInput.value === 'string' ) {
      console.log(`Guess Input: ${guessInput.value}`);
      this.setState({
        guessInput: guessInput.value
      });
    }
  }

  makeGuess(guess) {
    this.props.dispatch(actions.newGuess(guess));
  }

  render() {
    return (
      <div>
        <GuessList guesses={this.props.guesses} />
        <GuessForm guess={this.guess} makeGuess={this.makeGuess} />
      </div>
    );
  }
}

const mapToStateToProps = (state, props) => ({
  guesses: state.guesses
});

const GameContainer = connect(mapToStateToProps)(Game);

export default GameContainer;
