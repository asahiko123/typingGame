const strs=[
    'Google Chrome',
    'Face Book',
    'Hello World',
    'What the fuck!',
    'God Bless You',
    'No Way!',
    'Holy Poop!',
    'Holy Shit!'
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
