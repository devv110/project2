const container = document.getElementById('container');

for (let i = 0; i < 256; i++) {
  const newDiv = document.createElement('div');
  newDiv.classList.add('gridSquare');

  newDiv.addEventListener('mouseenter', () => {
    newDiv.style.backgroundColor = 'black';
    newDiv.addEventListener('mouseleave', () => {
    newDiv.style.backgroundColor = 'white';
  })});

  container.appendChild(newDiv);
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener('click', () => {
    let gridSize = prompt("Please enter a number 1-100:", "16");


gridSize = Number(gridSize);
if (!gridSize || gridSize < 1) gridSize = 1;
if (gridSize > 100) gridSize = 100;

container.innerHTML = "";

for (let i = 0; i < gridSize * gridSize; i++) {
  const newDiv = document.createElement('div');
  newDiv.classList.add('gridSquare');
  newDiv.style.width = `${100 / gridSize}%`;

  newDiv.addEventListener('mouseenter', () => {
    newDiv.style.backgroundColor = 'black';
    newDiv.addEventListener('mouseleave', () => {
    newDiv.style.backgroundColor = 'white';
  })});
  container.appendChild(newDiv);

};
})});