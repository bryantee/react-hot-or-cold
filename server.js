'use static';

import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(express.static('build'));
app.use(bodyParser.json());

let fewestGuesses = 'No guesses yet';

app.get('/fewest-guesses', (req, res) => {
  res.status(200).json({ fewestGuesses });
});

app.post('/fewest-guesses', (req, res) => {
  if (typeof fewestGuesses == 'string' || req.body.numberOfGuesses < fewestGuesses) {
    fewestGuesses = req.body.numberOfGuesses;
    console.log(`POST made, fewestGuesses now: ${fewestGuesses}`);
    res.status(200).json({ message: 'You are now have the fewest guesses!', fewestGuesses});
  } else {
    res.status(200).json({ message: 'Sorry, you didn\'t get the fewest guesses. Try again.'});
  }
});

app.listen(8080,  () => {
  console.log('Listening on port 8080');
})
