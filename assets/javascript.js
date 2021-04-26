$(window).on("load", function () {
    var totalscore = 0;
    var wins = 0;
    var losses = 0;

    var compChoise = Math.floor((Math.random() * 100) + 10);
    document.getElementById('comp_random_number').innerHTML = compChoise;

    var cristalNumber = Math.floor((Math.random() * 10) + 2);
    var cristalNumber1 = Math.floor((Math.random() * 10) + 2);
    var cristalNumber2 = Math.floor((Math.random() * 10) + 2);
    var cristalNumber3 = Math.floor((Math.random() * 10) + 2);
    var cristalNumber4 = Math.floor((Math.random() * 10) + 2);

    $('.first_button').on('click', function () {
        totalscore += cristalNumber;
        var total = document.getElementById('total').innerHTML = totalscore;
        WinLose();
    });
    $('.second_button').on('click', function () {
        totalscore += cristalNumber1;
        var total = document.getElementById('total').innerHTML = totalscore;
        WinLose();
    });
    $('.third_button').on('click', function () {
        totalscore += cristalNumber2;
        var total = document.getElementById('total').innerHTML = totalscore;
        WinLose();
       
    });
    $('.fourth_button').on('click', function () {
        totalscore += cristalNumber3;
        var total = document.getElementById('total').innerHTML = totalscore;
        WinLose();
        
    });
    $('.fifth_button').on('click', function () {
        totalscore += cristalNumber4;
        var total = document.getElementById('total').innerHTML = totalscore;
        WinLose();
       
    });

    function WinLose() {
        total = document.getElementById('total').innerHTML;
        if (compChoise < total) {
            losses++;
            document.getElementById('losses').innerHTML = losses;
            document.getElementById('alert').innerHTML = '<h4>You are loser!!!</h4>';
            Reset();
        }
        else if (compChoise == total) {
            wins++;
            document.getElementById('wins').innerHTML = wins;
            document.getElementById('alert').innerHTML = '<h4>You are winner!!!</h4>';
            Reset();
        }
    }

    function Reset(){
        totalscore = 0;
        document.getElementById('total').innerHTML = totalscore;
        compChoise = Math.floor((Math.random() * 100) + 10);
        document.getElementById('comp_random_number').innerHTML = compChoise;
    
        cristalNumber = Math.floor((Math.random() * 10) + 2);
        cristalNumber1 = Math.floor((Math.random() * 10) + 2);
        cristalNumber2 = Math.floor((Math.random() * 10) + 2);
        cristalNumber3 = Math.floor((Math.random() * 10) + 2);
        cristalNumber4 = Math.floor((Math.random() * 10) + 2);
    }


});












