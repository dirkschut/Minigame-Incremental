var score = 0;

$(function() {
    console.log("Welcome to Minigame Idle!");
});

function increaseScore(amount) {
    score += amount;
    console.log("New Score: " + score);
    document.getElementById("score").innerHTML = score + " Points";
}