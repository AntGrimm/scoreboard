const main = () => {
  console.log('Hello, World!')
}

let team1ScoreCounter = 0
let team2ScoreCounter = 0

const updateTeam1Name = () => {
  console.log('updated value in text box')
  // Get the team name from the input tag store it as variable
  const team1Name = document.querySelector('.team-1-input').value
  console.log(team1Name)

  // Update the html with new name
  document.querySelector('.team-1-name').textContent = team1Name
}

const updateTeam2Name = () => {
  console.log('updated value in text box')
  // Get the team name from the input tag store it as variable
  const team2Name = document.querySelector('.team-2-input').value
  console.log(team2Name)

  // Update the html with new name
  document.querySelector('.team-2-name').textContent = team2Name
}

// Check team 1 score less than or = 21 add 1 to score
const add1Team1Score = () => {
  // check the team score
  const team1Score = document.querySelector('.team-1-score')
  console.log(team1Score.textContent)
  if (team1Score.textContent < 20) {
    // add 1 to team 1 score
    console.log('updated value in text box')
    // Get the current score and store it as variable
    team1ScoreCounter += 1
    team1Score.textContent = team1ScoreCounter
    console.log(team1Score.textContent)
  } else {
    team1Score.textContent = 'You Win!'
    team1Score.classList.add('winning-team')
    document.querySelector('.team-1-add-1-button').classList.add('hide')
    document.querySelector('.team-1-subtract-1-button').classList.add('hide')
    document.querySelector('.team-2-add-1-button').classList.add('hide')
    document.querySelector('.team-2-subtract-1-button').classList.add('hide')
    document.querySelector('.reset-button').classList.remove('hide')
    console.log(team1Score)
  }
}

// Check team 1 score greater than 0 and then subtract 1
const subtract1Team1Score = () => {
  // check the team score
  const team1Score = document.querySelector('.team-1-score')
  console.log(team1Score.textContent)
  if (team1Score.textContent > 1) {
    // subtract 1 from team 1 score
    console.log('updated value in text box')
    // Get the current score and store it as variable
    team1ScoreCounter -= 1
    team1Score.textContent = team1ScoreCounter
    console.log(team1Score)
  } else {
    team1Score.textContent = 0
    console.log(team1Score)
  }
}

// Check team 2 score less than or = 21 add 1 to score
const add1Team2Score = () => {
  // check the team score
  const team2Score = document.querySelector('.team-2-score')
  console.log(team2Score.textContent)
  if (team2Score.textContent < 20) {
    // add 1 to team 2 score
    console.log('updated value in text box')
    // Get the current score and store it as variable
    team2ScoreCounter += 1
    team2Score.textContent = team2ScoreCounter
    console.log(team2Score.textContent)
  } else {
    team2Score.textContent = 'You Win!'
    team2Score.classList.add('winning-team')
    document.querySelector('.team-1-add-1-button').classList.add('hide')
    document.querySelector('.team-1-subtract-1-button').classList.add('hide')
    document.querySelector('.team-2-add-1-button').classList.add('hide')
    document.querySelector('.team-2-subtract-1-button').classList.add('hide')
    document.querySelector('.reset-button').classList.remove('hide')
    console.log(team2Score)
  }
}

// Check team 2 score greater than 0 and then subtract 1
const subtract1Team2Score = () => {
  // check the team score
  const team2Score = document.querySelector('.team-2-score')
  console.log(team2Score.textContent)
  if (team2Score.textContent > 1) {
    // subtract 1 from team 2 score
    console.log('updated value in text box')
    // Get the current score and store it as variable
    team2ScoreCounter -= 1
    team2Score.textContent = team2ScoreCounter
    console.log(team2Score)
  } else {
    team2Score.textContent = 0
    console.log(team2Score)
  }
}

const resetGame = () => {
  // Clear team 1 score
  const team1Score = document.querySelector('.team-1-score')
  console.log(team1Score.textContent)
  team1ScoreCounter = 0
  team1Score.textContent = team1ScoreCounter
  document.querySelector('.team-1-add-1-button').classList.remove('hide')
  document.querySelector('.team-1-subtract-1-button').classList.remove('hide')
  document.querySelector('.team-2-add-1-button').classList.remove('hide')
  document.querySelector('.team-2-subtract-1-button').classList.remove('hide')
  document.querySelector('.reset-button').classList.add('hide')
  console.log(team1Score)

  // Clear team 2 score
  const team2Score = document.querySelector('.team-2-score')
  console.log(team2Score.textContent)
  team2ScoreCounter = 0
  team2Score.textContent = team2ScoreCounter
  document.querySelector('.team-1-add-1-button').classList.remove('hide')
  document.querySelector('.team-1-subtract-1-button').classList.remove('hide')
  document.querySelector('.team-2-add-1-button').classList.remove('hide')
  document.querySelector('.team-2-subtract-1-button').classList.remove('hide')
  document.querySelector('.reset-button').classList.add('hide')
  console.log(team2Score)
}

document.addEventListener('DOMContentLoaded', main)

// Update team 1 name
document.querySelector('.team-1-input')
document
  .querySelector('.update-team-1-name')
  .addEventListener('click', updateTeam1Name)

// Update team 2 name
document.querySelector('.team-2-input')
document
  .querySelector('.update-team-2-name')
  .addEventListener('click', updateTeam2Name)

// Add 1 to team 1 score
document.querySelector('.team-1-score')
document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', add1Team1Score)

// Subtract 1 to team 1 score
document.querySelector('.team-1-score')
document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', subtract1Team1Score)

// Add 1 to team 2 score
document.querySelector('.team-2-score')
document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', add1Team2Score)

// Subtract 1 to team 2 score
document.querySelector('.team-2-score')
document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', subtract1Team2Score)

// Reset Game
document.querySelector('.reset-button').addEventListener('click', resetGame)
