var personal_mail = prompt("Inserisci la tua mail");
var final_coutcome;
var array =   [ "giorgio@gmail.com",
                "francesco@gmail.com",
                "mario_rossi@gmail.com",
                "gianluca.palermitani@gmail.com",
                "WGliAlberi@treedom.tree",
                "morte.nera05@hotmail.com",
                "luigi@gmail.com",
                "lupo_rossogiallo00@gmail.com"  ]
if (isNan(personal_mail) == true) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == obj) {
            final_coutcome = "La mail inserita è nella lista";
        } else {
            final_coutcome  = "La mail inserita NON è nella lista";
        }
    }
} else {
    document.getElementById("outcome").innerHTML = "Formato mail non valido";   
}

document.getElementById("outcome").innerHTML = final_coutcome