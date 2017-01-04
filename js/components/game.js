import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/index'
import GuessList from './guess-list'
import GuessForm from './guess-form'
import Message from './message'
import FewestGuesses from './fewest-guesses'

export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.makeGuess = this.makeGuess.bind(this);
    this.saveFewestGuessesToServer = this.saveFewestGuessesToServer.bind(this);
  }

  makeGuess(guess) {
    this.props.dispatch(actions.newGuess(guess));
  }

  getFewestGuessesFromServer() {
    this.props.dispatch(actions.fetchFewestGuesses());
  }

  saveFewestGuessesToServer(numberOfGuesses) {
    this.props.dispatch(actions.saveFewestGuesses(numberOfGuesses));
  }

  render() {
    let content = [];
    if (this.props.correctGuess === true) {
      content.push(<h1>Congratulations, you won!</h1>);
      content.push(<button onClick={() => this.props.dispatch(actions.newGame())}>New Game</button>)
      this.saveFewestGuessesToServer(this.props.guesses.length);
    }
    else {
      content.push(<GuessForm makeGuess={this.makeGuess} />);
      content.push(<Message message={this.props.message} />);
    }


    return (
      <div>
        {content}
        <FewestGuesses fewestGuesses={this.props.fewestGuesses} />
        <GuessList guesses={this.props.guesses} />
      </div>
    );
  }
}

const mapToStateToProps = (state, props) => ({
  guesses: state.guesses,
  correctGuess: state.correctGuess,
  randomNumber: state.randomNumber,
  message: state.message,
  fewestGuesses: state.fewestGuesses
});

const GameContainer = connect(mapToStateToProps)(Game);

export default GameContainer;
