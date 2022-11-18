// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const redText = document.createElement('p');
redText.style.color = "Red";
redText.textContent = "Hey I'm red!";

container.appendChild(redText);

const heading = document.createElement('h3');
// heading.style.color = "Blue";
heading.setAttribute('style', 'color: blue;');
heading.textContent = "I'm a blue h3!";

container.appendChild(heading);

const blackDiv = document.createElement('div');
// heading.style.color = "Blue";
blackDiv.setAttribute('style', 'border: 5px solid black; background: pink;');


container.appendChild(blackDiv);

const innerHeading = document.createElement('h1');
innerHeading.textContent = "I'm in a div";

blackDiv.appendChild(innerHeading);

const meToo = document.createElement('p');
meToo.textContent = "ME TOO!";

blackDiv.appendChild(meToo);