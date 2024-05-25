# TileMaster Game
TileMaster Game is a word-guessing game where players aim to guess a secret 5-letter word within a limited attempts.<br>Each guess provides feedback to help narrow down the possibilities.

**Created by Minjae Jang** (csjae21@gmail.com)<br>
**Link to project:** https://fantastic-madeleine-2f6761.netlify.app/#

> ## How It's Made:
- **HTML**: For structuring the game layout.
- **CSS**: For styling the game and making it visually appealing.
- **JavaScript**: The core logic of TileMaster is implemented in JavaScript, which handles user interactions, and game state updates.
  - User-Friendly Interface: Simple and intuitive design for an enjoyable gaming experience.
  - Timer: A countdown timer adds an extra layer of challenge.
  - Remaining Chances: Track your remaining attempts to guess the word.
  - Restart Button: Easily restart the game for a new challenge.
- **TypeScript**: For adding type safety and enhancing the JavaScript code (alternative).
> ## How to Play?
![HowToPlay](https://github.com/Minjae21/TileMaster/assets/109805901/fdbb1f28-39c7-4ae3-b96a-ca54550d32f5)

**Initial Guess**: You guess the word "cloud".
  - If the secret word is "cello", the feedback might be:
  - 'c' tile turns **blue** (correct positions).
  - 'l' and 'o' tiles turn **yellow** (wrong positions).
  - 'u' and 'd' tiles do not change the color (not in the word).
