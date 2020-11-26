const firstButton = document.getElementById("start-button");
const userUsername = document.getElementById("username");
const asideScoresUser1 = document.getElementById("aside-scores--user1");
const mainPage = document.getElementById("mainPage");

var userAndScore = [];
var user = {
    name: "minili",
    score: 0
}

var secondTimer = 0;
var numberClicked = 0;

firstButton.addEventListener("click", function() {
    if (userUsername.value !== "") {
        user.name = userUsername.value;
        mainPage.innerHTML = "";
        mainPage.innerHTML =`
        <section class="step2">
        <button class="button-start" id="button-start">Start Game!</button>
        </section>
        `
        asideScoresUser1.textContent = user.name;
        var buttonToStep3 = document.getElementById("button-start");
        buttonToStep3.addEventListener("click", function() {
            mainPage.innerHTML = "";
            mainPage.innerHTML = `<button class="click-here">Click here</button>`
            setInterval(timer, 1000);

            var clickHere = document.querySelector(".click-here");
            clickHere.addEventListener("click", function() {
                numberClicked ++;
            })

            if (secondTimer === 10) {
                clearInterval(timer);
                user.score = numberClicked;
                userAndScore.push(user);
                mainPage.innerHTML = "";
                mainPage.innerHTML = ``;
            }
        })
    }
})

function timer () {
    secondTimer ++;
}