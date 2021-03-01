var user_name = prompt("Salve giocatore, inserisci il tuo nome: ");

var user_dice = Math.floor(Math.random() * 5) + 1 ;
var pc_dice = Math.floor(Math.random() * 5) + 1; 
var winner ;

console.log(user_dice);
console.log(pc_dice);


 if (user_dice > pc_dice) {
     winner = "il vincitore è " + user_name;
} else if (user_dice == pc_dice) {
    winner = "C'è stato un pareggio" 
} else if (user_dice < pc_dice) {
    winner = "Il vincitore è il PC"
}
document.getElementById("pc_roll").innerHTML = "Il pc ha lanciato " + pc_dice ;
document.getElementById("user_roll").innerHTML = "Tu hai lanciato ha lanciato " + user_dice ;
document.getElementById("outcome").innerHTML = winner ;
