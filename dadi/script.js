// variabili da input
/*
var user_name = prompt("Salve giocatore, inserisci il tuo nome: ");
var round = prompt("Al meglio di quanto vuole giocare ? (1, 3 o 5)")
*/
var user_name = "Matteo";
var round = 3;
// variabili globali
var winner ; // vincitore round
var final_winner; //vincitore intera partita
var user_score = 0;
var pc_score = 0;



// verifica valore round
for (var i = 100; i > 0; i--) {
    if (round == 1 || round == 3 || round == 5){
        console.log(round);
        break;
    } else {
        alert("Per favore, inserisca  un valore valido (1, 3 o 5)")
        round = prompt("Al meglio di quanto vuole giocare ? (1, 3 o 5)")
    }
}

// verifico il vincitore
// ciclo sui round
for (var current_round = 0; current_round != round; current_round++) {
    // inizializzo le variabili direttamente ad un valore random tra 1 e 6
    var user_dice = Math.floor(Math.random() * 6) + 1 ;
    var pc_dice = Math.floor(Math.random() * 6) + 1; 
    console.log("user dice", user_dice);
    console.log("pc_dice", pc_dice);

    console.log("stiamo nel round numero", current_round, "/", round);
    
    // vincitore del round
    if (user_dice > pc_dice) {
        user_score += 1;
        winner = "il vincitore del round numero " + round + "è " + user_name;// winner = "il vincitore è " + user_name;
        document.getElementById("element").innerHTML += "YES" + '<br>';
    } else if (user_dice == pc_dice) {
        document.getElementById("element").innerHTML += "YES" + '<br>';
        pc_score += 1;
        winner = "Il vincitore del round numero " + round + " è il PC";
        // winner = "C'è stato un pareggio" 
    } else if (user_dice < pc_dice) {
        document.getElementById("element").innerHTML += "YES" + '<br>';

        //  winner = "Il vincitore è il PC"
        winner = "Il round numero " + round + "è stato un pareggio"; 
        pc_score += 1;
        user_score += 1;
    }
    
    // stampa a video il valore dei dadi di user e pc
    document.getElementById("pc_roll").innerHTML += "Il pc ha lanciato " + pc_dice + '<br>';
    document.getElementById("user_roll").innerHTML += "Tu hai lanciato ha lanciato " + user_dice  + '<br>';
}

// controlla il vincitore finale al meglio di round tiri
if (user_score > pc_score) {
    final_winner =  user_name;
} else if (user_score == pc_score) {
    final_winner = "C'è stato un pareggio" 
} else if (user_score < pc_score) {
    final_winner = "Il vincitore è il PC"
}

// falling confetti if win 
if (user_name == final_winner){
    /*
    party.screen({ 
        count: 500 * (window.innerWidth / 1980),
        countVariation: 0.5,
        angleSpan: 0,
        yVelocity: -100,
        yVelocityVariation: 2,
        rotationVelocityLimit: 6,
        scaleVariation: 0.8
    });
    */
    document.getElementById("outcome").innerHTML = "Congratulazioni !! Il vincitore è " + final_winner;

} else {
    document.getElementById("outcome").innerHTML = final_winner ;
}
