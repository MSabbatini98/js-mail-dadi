// variabili da input
var personal_mail = prompt("Inserisci la tua mail");

// variabili globali
var final_outcome;


// Dichiaro l'array
var array =   [ "giorgio@gmail.com",
                "francesco@gmail.com",
                "mario_rossi@gmail.com",
                "gianluca.palermitani@gmail.com",
                "WGliAlberi@treedom.tree",
                "morte.nera05@hotmail.com",
                "luigi@gmail.com",
                "lupo_rossogiallo00@gmail.com"  ];

// console.log(array.length);

// verifica dato da input = string
if (isNaN(personal_mail) == true) {
    // ciclo sugli elementi dell'array, finche non trova la mail
    for (var i = 0; i < array.length; i++) {
        console.log(i);
        // se trovo la mail esco dal ciclo, se no continuo fino all'ultimo elemento
        if (array[i] == personal_mail) {
            console.log(array[i]);
            final_outcome = "La mail inserita E' nella lista, le è consentito l'accesso";
            console.log(final_outcome);
            break;
        // non trovo l'elemento, output negativo
        } else {
            final_outcome  = "La mail inserita NON è nella lista, la prego di uscire SUBITO";
            console.log(final_outcome);
        }
    }
// tipo di dato sbagliato, esco dal ciclo
} else {
console.log(final_outcome);
    final_outcome = "Formato mail non valido";   
    console.log(final_outcome);
}

console.log(final_outcome);
// stampo a "video" il risultato del ciclo (della ricerca)
document.getElementById("outcome").innerHTML = final_outcome