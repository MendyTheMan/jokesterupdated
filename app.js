// alert('hello world');

console.log(jokes);


const newJokeButton = document.querySelector('#new-joke-button')
const jokeBoxP = document.querySelector('#joke-box p')

function callJoke() {

    jokeBoxP.innerHTML = "";
    jokeBoxP.style.opacity = "0";

    setTimeout(() => {
        jokeBoxP.innerHTML = newJoke; // Show the joke with an animation
        jokeBoxP.style.opacity = "1";
      }, 200);

    const newJoke = jokes[Math.floor(Math.random() * jokes.length)];
    

    

}
newJokeButton.addEventListener('click', callJoke)  