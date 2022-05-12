$(document).ready(function () {
    var crystal1 = Math.floor(Math.random() * 12 + 1);
    var crystal2 = Math.floor(Math.random() * 12 + 1);
    var crystal3 = Math.floor(Math.random() * 12 + 1);
    var crystal4 = Math.floor(Math.random() * 12 + 1);
    var compChoice = Math.floor(Math.random() * 102 + 19);

    $("#compNum").text("Match this number: " + compChoice);
    var result = 0;
    $("#userNum").text(result);
    var wins = 0;
    $(".wins").text("Wins: " + wins)
    var losses = 0;
    $(".losses").text("Losses: " + losses);


    function winner() {
        wins++;
        $(".wins").text("Wins: " + wins);
    }

    function loser() {
        losses++;
        $(".losses").text("Losses: " + losses);
    };

    function surpassed() {
        if (result > compChoice)
            result = 0;
        $("#userNum").text(result);
        crystal1 = Math.floor(Math.random() * 12 + 1);
        crystal2 = Math.floor(Math.random() * 12 + 1);
        crystal3 = Math.floor(Math.random() * 12 + 1);
        crystal4 = Math.floor(Math.random() * 12 + 1);
        compChoice = Math.floor(Math.random() * 102 + 19);

        $("#compNum").text("Match this number: " + compChoice);
    }

    $(".crystal1").on("click", function () {
        result = result + crystal1;

        $("#userNum").text(result);

        if (result === compChoice) {
            winner();
        } else if (result > compChoice) {
            loser();
            surpassed();
        }
    })

    $(".crystal2").on("click", function () {
        result = result + crystal2;
        $("#userNum").text(result);

        if (result === compChoice) {
            winner();
        } else if (result > compChoice) {
            loser();
            surpassed();
        }
    })

    $(".crystal3").on("click", function () {
        result = result + crystal3;
        $("#userNum").text(result);

        if (result === compChoice) {
            winner();
        } else if (result > compChoice) {
            loser();
            surpassed();
        }
    })

    $(".crystal4").on("click", function () {
        result = result + crystal4;
        $("#userNum").text(result);

        if (result === compChoice) {
            winner();
        } else if (result > compChoice) {
            loser();
            surpassed();
        }
    })

});