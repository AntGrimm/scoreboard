const main = () => {
  console.log('hello, world!')
}

const updateTeam1Name = () => {
  console.log('updated value in text box')
  // Get team name from input tag and store it in a variable
  let team1Name = document.querySelector('.team-1-input').value
  console.log(team1Name)
}

const displayTeam1Name = () => {
  // Get name from input
  const team1Name = document.querySelector('.team-1-input').value
  // Display name in textbox
  document.querySelector('team-1-name').textContent = team1Name
}

document.addEventListener('DOMContentLoaded', main)

document
  .querySelector('.team-1-input')
  .addEventListener('input', updateTeam1Name)
document
  .querySelector('.update-team-1-name')
  .addEventListener('click', displayTeam1Name)
