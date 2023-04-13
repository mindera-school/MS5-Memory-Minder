# Memory game

## Summary

A memory game made on React is a web-based game that challenges the player's memory by presenting a grid of cards face down. The player must turn over pairs of cards to reveal their hidden images and try to match all pairs before time runs out.

The game is built using React, a popular JavaScript library for building user interfaces. It utilizes React's component-based architecture to create reusable components such as cards and a game board.

The game starts by shuffling the cards and laying them out in a grid. When the player clicks on a card, it flips over to reveal its image. If the player clicks on a second card, the game checks if it matches the first card. If the cards match, they stay face up. If they don't match, the cards flip back over, and the player continues trying to find matching pairs.

Overall, a memory game made on React provides a fun and engaging way for players to exercise their memory skills while enjoying a visually appealing and interactive game experience.

## Mechanics

- click on the card/button to display a picture of the mindera, and if you don't find a matching card then the two are displayed again, if they are the same cards the cards keep the picture displayed.

## Goals

The main goal of the Memory game is for the player to find matching pairs of cards or buttons. Each pair will earn the player points, and the game will end when all pairs have been found. 

## Art and Design

The Memory game should have a visually appealing design to attract players and create an engaging experience. The game's design may include flashy colors, images, and animations to capture the player's attention. The game's elements, such as cards and buttons, should be clearly visible and easy to click on. The game may have a theme or storyline to give it context and make it more interesting.

## Technology

The Memory game will be built using web technologies such as HTML, CSS, and JavaScript. The game will be responsive, allowing it to work on different devices and screen sizes. The game may use external libraries or frameworks to speed up development or add additional functionality, such as React for component-based development or Bootstrap for responsive design. The game may also use APIs for additional features such as user authentication or multiplayer functionality. Testing and debugging tools will be used to ensure the game is functional and bug-free.

## Inspirations

- https://jsfiddle.net/201flaviosilva/L0e4v5dg/show
- https://interaminense.dev/memory-game-js/
- https://harshalparmar.github.io/flipcard-memory-game/

## Details

| Name | Value |
| --- | --- |
| Engine/Language | React, HTML, JavaScript, CSS |
| Platform | WEB |
| Number of Players | 1 |
| Release Date | March 31 |

## Minimum Viable Product (MVP)

- The game will consist of a grid of cards, each with a unique picture or symbol on them;
- The cards will be shuffled and laid face-down on the grid;
- The player will then click on two cards to reveal them;
- If the two cards match, they will stay face-up and the player will earn points;
- If the two cards do not match, they will flip back over and the player will not earn points;
- The game will end when all the pairs of cards have been matched;
- The player's score will be displayed at the end of the game;
- Animations;
- Responsive;

## Nice To Have

- A timer that starts when the player begins the game, and stops when all the cards have been matched;
- A leaderboard that displays the top scores of all players who have played the game (needs to request a play name, at the end of the game);
- Different difficulty levels, with more cards to match and/or a shorter time limit;
- Sound effects;
- Save, load and delete the current state of the game;
- Quit game to restart a new game;
- Language selection;
- Vibrations (for example, if it's found matching cards), (this only works on mobile devices);
- Local Multiplayer option;
  - PvP;
  - PvComputer;
