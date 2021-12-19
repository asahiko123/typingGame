const strs=[
    'What the fuck!',
    'God Bless You',
    'No Way!',
    'Holy Poop!',
    'Holy Shit!',
    'What is going on?',
    'Thank You',
    'Shall We Dance?',
    'I don\'t fear anything. can you say the same?',
    'Here goes nothing',
    'Goodnight beautiful',
    'Every decision counts',
    'I got you. Thank you so much',
    'You want some? Come get some!',
    'Wanna win? Do what I do',
    'You know what I look like - come find me',
    'You can do everything you want',
    'Seeing is believing',
    'A hero is a man who does what he can'

];

const randoms =[];

let missTypeCount = 0;
let successTypeCount = 0;
let collectAnswerRating = 0;

const result = document.getElementById('result');

function getRandomInt(max) {
return Math.floor(Math.random() * max);
}

function nextString(){
    const idx = getRandomInt(strs.length);
    if(!randoms.includes(idx)){
        randoms.push(idx);
        console.log(randoms);
    }
 
    return strs[idx];
}

function next(){
    typed = '';
    untyped = nextString();
    updateText();
}


const typedField =document.getElementById('typed');
const untypedField =document.getElementById('untyped');

function updateText(){
    typedField.textContent = typed;
    untypedField.textContent =untyped;

}

next();
