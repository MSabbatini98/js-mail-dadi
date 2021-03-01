var personal_mail = prompt("Inserisci la tua mail");
var final_outcome;

var array =   [ "giorgio@gmail.com",
                "francesco@gmail.com",
                "mario_rossi@gmail.com",
                "gianluca.palermitani@gmail.com",
                "WGliAlberi@treedom.tree",
                "morte.nera05@hotmail.com",
                "luigi@gmail.com",
                "lupo_rossogiallo00@gmail.com"  ];

// console.log(array.length);

if (isNaN(personal_mail) == true) {
    for (var i = 0; i < array.length; i++) {
        console.log(i);
        if (array[i] == personal_mail) {
            console.log(array[i]);
            final_outcome = "La mail inserita E' nella lista, le è consentito l'accesso";
            console.log(final_outcome);
            break;
        } else {
            final_outcome  = "La mail inserita NON è nella lista, la prego di uscire SUBITO";
            console.log(final_outcome);
        }
    }
} else {
console.log(final_outcome);
    final_outcome = "Formato mail non valido";   
    console.log(final_outcome);
}
console.log(final_outcome);

document.getElementById("outcome").innerHTML = final_outcome