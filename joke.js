const jokearea=document.getElementById("jokeyh");
const jokeBtn=document.getElementById("genJoke");
const api="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let generateJoke=()=>{
    fetch(api).then(data=>data.json())
    .then(funny=>{
        jokearea.innerText=`${funny.joke}`
    });
}
jokeBtn.addEventListener("click",generateJoke);
generateJoke();

