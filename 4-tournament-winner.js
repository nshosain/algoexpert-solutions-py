// given 2 arrays
// [["HTML", "C#"],["C#", "PYTHON"],["HTML", "PYTHON"]]
// [0, 0, 1]
// output: PYTHON

// elements of the first  array = 1st index home team, second index away team
// elements of the second array = same number of elements as the fist array denoting the winner
// each 0 meaning home lost the game, 1 meaning home won the game
// there will never be a tie situation, each game must have a winner

// output the tournament winning team, meaning the team that won the most games

const games = [
  ["HTML", "C#"],
  ["C#", "PYTHON"],
  ["HTML", "PYTHON"],
];
const results = [0, 0, 0];

console.log(tournamentWinner(games, results));

// time complexity O(n) | space complexity O(k) [n = number of games, k = number of teams]
function tournamentWinner(games, results) {
  let HOME_TEAM_WON = 1;
  let HOME_TEAM = 0;
  let AWAY_TEAM = 1;
  let gameWinner = {};
  let tournamentWinner = { team: "", points: 0 };
  let scoreTable = {};

  for (match in results) {
    if (results[match] === HOME_TEAM_WON) {
      gameWinner = { team: games[match][HOME_TEAM], points: 3 };
    } else {
      gameWinner = { team: games[match][AWAY_TEAM], points: 3 };
    }

    updateScoreTable(gameWinner, scoreTable);

    if (scoreTable[gameWinner.team] > tournamentWinner.points) {
      tournamentWinner = gameWinner;
    }
  }
  return tournamentWinner.team;
}

function updateScoreTable(winner, table) {
  let { team, points } = winner;

  if (!(team in table)) {
    table[team] = points;
  } else {
    table[team] += points;
  }
}
