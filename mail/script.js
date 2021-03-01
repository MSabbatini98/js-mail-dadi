var user_name = prompt("Salve giocatore, inserisci il tuo nome: ");

var user_dice = Math.floor(Math.random() * 10) + 1 ;
var pc_dice = Math.floor(Math.random() * 10) + 1; 

if (user_dice > pc_dice) {
    document.getElementById("outcome").innerHTML = "il vincitore è " + user_name;
} else if (user_dice == pc_dice) {
    document.getElementById("outcome").innerHTML = "il vincitore è il PC";
} else if (user_dice == pc_dice) {
    document.getElementById("outcome").innerHTML = "il vincitore è il PC";
}