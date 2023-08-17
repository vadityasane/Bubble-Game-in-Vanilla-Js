var timer = 30;
var score = 0;
var hitrn = 0;


// Increase Score 
function increaseScore() {
    score += 10;
    document.querySelector('#scoreVal').textContent = score;
}

//Generate New Hit Value
function getHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector('#hitVal').textContent = hitrn
}

//Create New Bubbles with Random Values
function makeBubble() {
    var cluster = ''

    for (var i = 1; i <= 260; i++) {
        var rn = Math.floor(Math.random() * 10)
        cluster += ` <div class="bubble">${rn}</div>`;
    }

    var bubble = document.querySelector('#pbtm')
    bubble.innerHTML = cluster;
}

//create the timer countdown(if its value greater than 0 decrease it otherwise clear it and put game over)
function countDown() {
    var timerMake = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector('#TimeInt').textContent = timer
        }
        else {
            clearInterval(timerMake);
            document.querySelector("#pbtm").innerHTML = "<h1> Game Over!! </h1>"
        }

    }, 1000)
}

//Logic for game(if hit value is equal to the value we hit on bubble increase score by 10, 
//create new bubbles and create new hit value )

document.querySelector("#pbtm").addEventListener('click', function (det) {
    var clickedNum = Number(det.target.textContent);
    if (clickedNum === hitrn) {
        increaseScore();
        makeBubble();
        getHit()
    }

})

countDown();

makeBubble();

getHit();

