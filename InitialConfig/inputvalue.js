// Récupération des éléments HTML 
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const myConfig = document.getElementById("form-container");

// Ajout des événements click aux boutons
btn1.addEventListener("click", afficherFormulaire);
btn2.addEventListener("click", afficherFormulaire);
btn3.addEventListener("click", afficherFormulaire);
btn4.addEventListener("click", afficherFormulaire);

// Fonction pour afficher ou masquer le formulaire
function afficherFormulaire() {
  if (myConfig.style.display === "none") {
    myConfig.style.display = "block";
  } else {
    myConfig.style.display = "none";
  }
}
