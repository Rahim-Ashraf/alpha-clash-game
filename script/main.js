// added extra comments
// ______________________________________________________________________

// function playingGame(){
//     const alphabetString = "abcdefghijklmnopqrstuvwxyz";
//     const alphabets = alphabetString.split("");
//     const randomIndex = Math.round(Math.random()*25);
//     for(let i = 0; i < alphabets.length; i++){
//         return "The alphabet :"+alphabets[randomIndex];
//     }
// }
// console.log(playingGame())

// let prvTextAlphabet = getRandomAlphabet();
// // getting random alphabet for deploing on the display
// function getRandomAlphabet() {
//     const alphabetString = "abcdefghijklmnopqrstuvwxyz/";
//     const alphabets = alphabetString.split("");
//     const randomIndex = Math.round(Math.random() * 26);
//     for (let i = 0; i < alphabets.length; i++) {
//         return alphabets[randomIndex];
//     }
// }

// function playingGame(){
//     const alphabetString = "abcdefghijklmnopqrstuvwxyz";
//     const alphabets = alphabetString.split("");
//     const randomIndex = Math.round(Math.random()*25);
//     for(let i = 0; i < alphabets.length; i++){
//         return "The alphabet :"+alphabets[randomIndex];
//     }
// }
// console.log(playingGame())

// let prvTextAlphabet = getRandomAlphabet();
// // getting random alphabet for deploing on the display
// function getRandomAlphabet() {
//     const alphabetString = "abcdefghijklmnopqrstuvwxyz/";
//     const alphabets = alphabetString.split("");
//     const randomIndex = Math.round(Math.random() * 26);
//     for (let i = 0; i < alphabets.length; i++) {
//         return alphabets[randomIndex];
//     }
// }


// function playingGame(){
//     const alphabetString = "abcdefghijklmnopqrstuvwxyz";
//     const alphabets = alphabetString.split("");
//     const randomIndex = Math.round(Math.random()*25);
//     for(let i = 0; i < alphabets.length; i++){
//         return "The alphabet :"+alphabets[randomIndex];
//     }
// }
// console.log(playingGame())

// let prvTextAlphabet = getRandomAlphabet();
// // getting random alphabet for deploing on the display
// function getRandomAlphabet() {
//     const alphabetString = "abcdefghijklmnopqrstuvwxyz/";
//     const alphabets = alphabetString.split("");
//     const randomIndex = Math.round(Math.random() * 26);
//     for (let i = 0; i < alphabets.length; i++) {
//         return alphabets[randomIndex];
//     }
// }


// function playingGame(){
//     const alphabetString = "abcdefghijklmnopqrstuvwxyz";
//     const alphabets = alphabetString.split("");
//     const randomIndex = Math.round(Math.random()*25);
//     for(let i = 0; i < alphabets.length; i++){
//         return "The alphabet :"+alphabets[randomIndex];
//     }
// }
// console.log(playingGame())

// let prvTextAlphabet = getRandomAlphabet();
// // getting random alphabet for deploing on the display
// function getRandomAlphabet() {
//     const alphabetString = "abcdefghijklmnopqrstuvwxyz/";
//     const alphabets = alphabetString.split("");
//     const randomIndex = Math.round(Math.random() * 26);
//     for (let i = 0; i < alphabets.length; i++) {
//         return alphabets[randomIndex];
//     }
// }

// function playingGame(){
//     const alphabetString = "abcdefghijklmnopqrstuvwxyz";
//     const alphabets = alphabetString.split("");
//     const randomIndex = Math.round(Math.random()*25);
//     for(let i = 0; i < alphabets.length; i++){
//         return "The alphabet :"+alphabets[randomIndex];
//     }
// }
// console.log(playingGame())

// let prvTextAlphabet = getRandomAlphabet();
// // getting random alphabet for deploing on the display
// function getRandomAlphabet() {
//     const alphabetString = "abcdefghijklmnopqrstuvwxyz/";
//     const alphabets = alphabetString.split("");
//     const randomIndex = Math.round(Math.random() * 26);
//     for (let i = 0; i < alphabets.length; i++) {
//         return alphabets[randomIndex];
//     }
// }
// ________________________________________________________________________





// function playingGame(){
//     const alphabetString = "abcdefghijklmnopqrstuvwxyz";
//     const alphabets = alphabetString.split("");
//     const randomIndex = Math.round(Math.random()*25);
//     for(let i = 0; i < alphabets.length; i++){
//         return "The alphabet :"+alphabets[randomIndex];
//     }
// }
// console.log(playingGame())

let prvTextAlphabet = getRandomAlphabet();
// getting random alphabet for deploing on the display
function getRandomAlphabet() {
    const alphabetString = "abcdefghijklmnopqrstuvwxyz/";
    const alphabets = alphabetString.split("");
    const randomIndex = Math.round(Math.random() * 26);
    for (let i = 0; i < alphabets.length; i++) {
        return alphabets[randomIndex];
    }
}

// setting background color on the keyboard key word
function setBackground(elementId) {

    document.getElementById(elementId).classList.add("bg-orange-500");
}

function removeBackground(elementId) {
    document.getElementById(elementId).classList.remove("bg-orange-500");
}
const textAlphabet = document.getElementById("random-alphabet");


// playing game


function startPlay() {
    hideElement("alpha-dashboard");
    showElement("alpha-play");
    setBackground(textAlphabet.innerText.toLowerCase());
    playingGame();
}


// maching deployed key to display key

function playingGame(){
    document.addEventListener("keydown", function (e) {
        const theKey = e.key;
        const displayAlphabet = document.getElementById("random-alphabet").innerText.toLowerCase();
        prvTextAlphabet = textAlphabet.innerText.toLowerCase();
        console.log(theKey, displayAlphabet)
        if (theKey === displayAlphabet) {
            textAlphabet.innerText = getRandomAlphabet();
            setBackground(textAlphabet.innerText.toLowerCase());
            removeBackground(prvTextAlphabet.toLowerCase());
            const score = document.getElementById("score");
            let scoreInt = parseInt(score.innerText);
            score.innerText = scoreInt + 1;
    
            document.getElementById("total-score").innerText = score.innerText;
        } else {
            const life = document.getElementById("life");
            let lifeInt = parseInt(life.innerText);
            life.innerText = lifeInt - 1;
            if (life.innerText <= 0) {
                hideElement("alpha-play");
                showElement("alpha-score");
            }
        }
    })
}

document.getElementById("play-again").addEventListener("click", function (){
    document.getElementById("score").innerText = 0;
    document.getElementById("life").innerText = 5;
    hideElement("alpha-score");
    showElement("alpha-play");
})
// document.addEventListener("keypress", function(event){
//     document.getElementById("score").innerText = 0;
//     document.getElementById("life").innerText = 5;
//     if(event.key === "Enter"){
//         hideElement("alpha-score");
//         showElement("alpha-play");
//     }
// })
