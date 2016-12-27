import React from 'react'

// dispatch guess to store
export default class GuessForm extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();
    this.props.makeGuess(this.textInput.value);
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <input
          type="text"
          ref={(guessInput) => {
            this.textInput = guessInput
          }
        } />
        <input
          type="submit" />
      </form>
    );
  }
}
