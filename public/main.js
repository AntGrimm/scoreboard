const main = () => {
  console.log('Hello, World!')
}

const updateTeam1Name = () => {
  console.log('updated value in text box')
  // Get the team name from the input tag store it as variable
  let team1Name = document.querySelector('.team-1-input').value
  console.log(team1Name)

  // Update the html with new name
  document.querySelector('.team-1-name').textContent = team1Name
}

const add1Team1Score = () => {
  console.log('updated value in text box')
  // Get the current score and store it as variable
  let team1Score = document.querySelector('.team-1-score').textContent
  console.log(team1Score)

  // Calculate the add 1
  const updateTeam1Score = parseFloat(team1Score) + 1
  console.log(updateTeam1Score)

  // Update the html with new score
  document.querySelector('.team-1-score').textContent = updateTeam1Score
}

const subtract1Team1Score = () => {
  console.log('updated value in text box')
  // Get the current score and store it as variable
  let team1Score = document.querySelector('.team-1-score').textContent
  console.log(team1Score)

  // Calculate the subtract 1
  const updateTeam1Score = parseFloat(team1Score) - 1
  console.log(updateTeam1Score)

  // Update the html with new score
  document.querySelector('.team-1-score').textContent = updateTeam1Score
}

const updateTeam2Name = () => {
  console.log('updated value in text box')
  // Get the team name from the input tag store it as variable
  let team2Name = document.querySelector('.team-2-input').value
  console.log(team2Name)

  // Update the html with new name
  document.querySelector('.team-2-name').textContent = team2Name
}

const add1Team2Score = () => {
  console.log('updated value in text box')
  // Get the current score and store it as variable
  let team2Score = document.querySelector('.team-2-score').textContent
  console.log(team2Score)

  // Calculate the add 1
  const updateTeam2Score = parseFloat(team2Score) + 1
  console.log(updateTeam2Score)

  // Update the html with new score
  document.querySelector('.team-2-score').textContent = updateTeam2Score
}

const subtract1Team2Score = () => {
  console.log('updated value in text box')
  // Get the current score and store it as variable
  let team2Score = document.querySelector('.team-2-score').textContent
  console.log(team2Score)

  // Calculate the subtract 1
  const updateTeam2Score = parseFloat(team2Score) - 1
  console.log(updateTeam2Score)

  // Update the html with new score
  document.querySelector('.team-2-score').textContent = updateTeam2Score
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
