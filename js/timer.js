const time = document.getElementById('times');
const start = document.getElementById('start');
// const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

const limit = 60000;

let remaining = limit;
let intervalId = null;

function keydownCallback(e){


    if(e.key !== untyped.substring(0,1)){
        missTypeCount += 1;
        checkKeys(e.key);
        return;
    }

    successTypeCount += 1;

    typed += untyped.substring(0,1);
    untyped = untyped.substring(1);

    updateText();

    if(untyped===''){
        next();
    }

}


function checkKeys(str){
    const keys =['Shift','Enter','Alt','Ctrl']
    if(keys.includes(str)){
        missTypeCount -= 1;
    }
}


function gameEnd(){
    remaining = 0;
    updateTime();
    clearInterval(intervalId);
    intervalId =null;
    document.removeEventListener('keydown',keydownCallback);
    collectAnswerRating = Math.floor((successTypeCount/(missTypeCount + successTypeCount))*100);
    result.textContent =`総タイプ数:${missTypeCount+successTypeCount}ミスタイプ数:${missTypeCount}正解率:${collectAnswerRating}%`
}

function gameStart(){

    let pre = new Date();

    intervalId =setInterval(function(){
        const now = new Date();
        remaining -= now - pre;

        if(remaining < 0){
            gameEnd();
        }
        pre = now;
        updateTime();
    },10);

    document.addEventListener('keydown',keydownCallback);
}


function updateTime(){
    const ms = Math.floor(remaining % 1000) %60;
    const s  = Math.floor(remaining /1000) %60;
    const m  = Math.floor(remaining /(1000*60))%60;
    const h  = Math.floor(remaining /(1000*60*60));

    const msStr = ms.toString().padStart(3,'0');
    const sStr = s.toString().padStart(2,'0');
    const mStr = m.toString().padStart(2,'0');
    const hStr = h.toString().padStart(2,'0');

    time.innerHTML =`${hStr}:${mStr}:${sStr}:${msStr}`;
}

start.addEventListener('click',function(e){
    if(intervalId !== null){return;}
    gameStart();
});

// stop.addEventListener('click',function(){
//      clearInterval(intervalId);
//      intervalId = null;
// });

reset.addEventListener('click',function(){
    document.removeEventListener('keydown',keydownCallback);
    clearInterval(intervalId);
    intervalId =null;
    remaining = limit;
    updateTime();
    next();

    missTypeCount = 0;
    successTypeCount = 0;
    collectAnswerRating = 0;

    result.textContent =``;
});


