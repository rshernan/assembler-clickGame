const mainPage = document.getElementById("mainPage");
let firstButton = document.getElementById("start-button").addEventListener("click", game )
let userUsername = document.getElementById("username");
const root = document.documentElement;

var userAndScore = [];
var user;
var interval;
var secondTimer = 0;
var numberClicked = 0;
var firstTime= true;

const flexPosition=["flex-start","flex-end","center","center","flex-start","flex-end","flex-end","center","flex-start"]


function game() {

    if (userUsername.value !== "") {
        let hiden = document.querySelectorAll(".aside-scores--noOne_hidde");
        hiden[0].classList.toggle("aside-scores--noOne_hidde")
        hiden[1].classList.toggle("aside-scores--noOne_hidde")
        let asideScoresUser1 = document.getElementById("aside-scores--user1");
        if(firstTime){
            document.querySelector("#aside-scores-noOne").classList.toggle("aside-scores--noOne_hidde");
            firstTime = false;
        }
        user={
            name:"",
            score: 0
        }
        console.log(user);
        user.name = userUsername.value;
        mainPage.innerHTML = "";
        mainPage.innerHTML =`
        <section class="step2">
        <button class="button-start" id="easy" style="margin-bottom: 15px">Easy</button>
        <button class="button-start" id="hard">Hard</button>
        </section>`
        asideScoresUser1.textContent = user.name;
        var buttonToStep3 = document.getElementById("easy");
        buttonToStep3.addEventListener("click", function() {
            readygame(false);
        })
        var buttonToStepHard3 = document.getElementById("hard");
        buttonToStepHard3.addEventListener("click", function() {
            readygame(true);
        })
    }
}

function readygame(hardMode){
    mainPage.style.display="inherit"
            mainPage.innerHTML = "";
            mainPage.innerHTML = `<button class="click-here">Click here</button>`
            var clickHere = document.querySelector(".click-here");
            if(hardMode){
                document.querySelector(".click-here").classList.toggle("click-here-advanced")
                document.querySelector(".click-here").classList.toggle("click-here")
            }
            interval=setInterval(timer, 1000);
            clickHere.addEventListener("click", function() {
                numberClicked ++;
                if(hardMode){
                    let randomHeight=getRandomArbitrary(5, 30, false)
                    let randomWidth=getRandomArbitrary(5, 30, false)
                    let randomJustify=getRandomArbitrary(0, 9, true)
                    let randomAlign=getRandomArbitrary(0, 9, true)
                    
                    root.style.setProperty("--width-button", randomWidth+"%");
                    root.style.setProperty("--height-button", randomHeight+"%");
                    root.style.setProperty("--align-button", flexPosition[randomJustify]);
                    root.style.setProperty("--justify-button", flexPosition[randomAlign]);
                    root.style.setProperty("--text-button", randomWidth+"px");
                }
            })
}


function timer () {
    secondTimer ++;
    console.log(secondTimer);
    if (secondTimer >= 10) {
        root.style.setProperty("--align-button", "center");
        root.style.setProperty("--justify-button", "center");
        clearInterval(interval);
        user.score = numberClicked;
        userAndScore.push(user);
        mainPage.innerHTML = "";
        mainPage.innerHTML = `<h2 class="finishPage__title" style="margin:10px">Your score</h2>
        <p class="finishPage__seconds" style="margin:10px">Your 10 seconds are done</p>
        <p class="finishPage__clicks" style="margin:10px">You have made ${user.score} clicks</p>
        <button class="button" id="restart" style="margin:10px">Play Again</button>`;
        document.querySelector("#aside-scores--score1").innerHTML=`${user.score} cliks`

        var buttonToStep4 = document.querySelector("#restart");
        buttonToStep4.addEventListener("click", function() {
            mainPage.innerHTML=`<h1 class="article-title">Choose a username</h1>
            <label for="username" class="username" >Username</label>
            <input type="text" name="username" id="username" class="inputUsername" value="">
            <button type="button" class="button" id="start-button">Start</button>`;
            secondTimer=0;
            numberClicked=0;
            userAndScore.sort(function (a, b) {
                if (a.score < b.score) {
                    return 1;
                }
                if (a.score > b.score) {
                    return -1;
                }
                return 0;
            });
            document.querySelector(".aside-scores").innerHTML = '<p class="aside-scores--users aside-scores--noOne_hidde" id="aside-scores--user1">Mark</p>'
            document.querySelector(".aside-scores").innerHTML += '<p class="aside-scores--scores aside-scores--noOne_hidde" id="aside-scores--score1">Currently playing</p>'
            if(userAndScore.length<=3){
                for(let i=0;i<userAndScore.length;i++){
                    let paragraphName = document.createElement("p");
                    paragraphName.classList.add("aside-scores--users");
                    paragraphName.innerHTML=userAndScore[i].name;
                    let paragraphScore = document.createElement("p");
                    paragraphScore.classList.add("aside-scores--scores");
                    paragraphScore.innerHTML=userAndScore[i].score + " clicks";
                    document.querySelector(".aside-scores").appendChild(paragraphName);
                    document.querySelector(".aside-scores").appendChild(paragraphScore);
                }
            }else{
                for(let i=0;i<3;i++){
                    let paragraphName = document.createElement("p");
                    paragraphName.classList.add("aside-scores--users");
                    paragraphName.innerHTML=userAndScore[i].name;
                    let paragraphScore = document.createElement("p");
                    paragraphScore.classList.add("aside-scores--scores");
                    paragraphScore.innerHTML=userAndScore[i].score + " clicks";
                    document.querySelector(".aside-scores").appendChild(paragraphName);
                    document.querySelector(".aside-scores").appendChild(paragraphScore);
                }
            }
            firstButton = document.getElementById("start-button");
            firstButton.addEventListener("click", game )
            userUsername = document.getElementById("username");
        })
    }
}

function getRandomArbitrary(min, max, floor) {
    if(floor){
        return Math.floor(Math.random() * (max - min) + min);
    }else{
        return Math.random() * (max - min) + min;
    }
    
}

