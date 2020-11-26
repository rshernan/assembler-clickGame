const mainPage = document.getElementById("mainPage");
let firstButton = document.getElementById("start-button").addEventListener("click", game )
let userUsername = document.getElementById("username");

var userAndScore = [];
var user;
var interval;
var secondTimer = 0;
var numberClicked = 0;
var firstTime= true;

firstButton.addEventListener("click", game)

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
        <button class="button-start" id="button-start">Start Game!</button>
        </section>`
        asideScoresUser1.textContent = user.name;
        var buttonToStep3 = document.getElementById("button-start");
        buttonToStep3.addEventListener("click", function() {
            mainPage.innerHTML = "";
            mainPage.innerHTML = `<button class="click-here">Click here</button>`
            interval=setInterval(timer, 1000);
            var clickHere = document.querySelector(".click-here");
            clickHere.addEventListener("click", function() {
                numberClicked ++;
            })
        })
    }
}


function timer () {
    secondTimer ++;
    console.log(secondTimer);
    if (secondTimer >= 10) {
        clearInterval(interval);
        user.score = numberClicked;
        userAndScore.push(user);
        mainPage.innerHTML = "";
        mainPage.innerHTML = `<h2 class="finishPage__title">Your score</h2>
        <p class="finishPage__seconds">Your 10 seconds are done</p>
        <p class="finishPage__clicks">You have made ${user.score} clicks</p>
        <button class="finishPage__button">Play Again</button>`;

        var buttonToStep4 = document.querySelector(".finishPage__button");
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

