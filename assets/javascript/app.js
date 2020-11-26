const firstButton = document.getElementById("start-button");
const userUsername = document.getElementById("username");
const asideScoresUser1 = document.getElementById("aside-scores--user1");
const mainPage = document.getElementById("mainPage");

var userAndScore = [];
var user = {
    name: "minili",
    score: 0
}


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

        })
    }
})