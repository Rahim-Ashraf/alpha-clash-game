
// function playingGame(){
//     const alphabetString = "abcdefghijklmnopqrstuvwxyz";
//     const alphabets = alphabetString.split("");
//     const randomIndex = Math.round(Math.random()*25);
//     for(let i = 0; i < alphabets.length; i++){
//         return "The alphabet :"+alphabets[randomIndex];
//     }
// }
// console.log(playingGame())

function getRandomAlphabet(){
    const alphabetString = "abcdefghijklmnopqrstuvwxyz/";
    const alphabets = alphabetString.split("");
    const randomIndex = Math.round(Math.random()*26);
    for(let i = 0; i < alphabets.length; i++){
        return alphabets[randomIndex];
    }
}

function setBackground(elementId){
    
    document.getElementById(elementId).classList.add("bg-orange-500");
}
function removeBackground(elementId){
    document.getElementById(elementId).classList.remove("bg-orange-500");
}
const textAlphabet = document.getElementById("random-alphabet");
let prvTextAlphabet = "y";

function playingGame(){
    removeBackground(prvTextAlphabet);
    textAlphabet.innerText = getRandomAlphabet();
    prvTextAlphabet = textAlphabet.innerText.toLowerCase();
    setBackground(textAlphabet.innerText.toLowerCase());
  
}


function startPlay() {
    hideElement("alpha-dashboard");
    showElement("alpha-play");
    setBackground(textAlphabet.innerText.toLowerCase());
}