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

// // the JavaScript file
// const btn = document.querySelector('#btn');
// btn.onclick = () => alert("Hello World");
// the JavaScript file
const btn = document.querySelector('#btn');
// btn.addEventListener('click', () => {
//   alert("Hello World");
// });

// btn.addEventListener('click', function (e) {
//     console.log(e);
//   });


btn.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});