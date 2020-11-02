
var reponse = prompt("Comment t'appelles-tu ?");
// Condition IF ELSE NON OBLIGATOIRE au cas où l'utilisateur ne remplit pas le champ
if( reponse == null ){
    alert("Vous avez cliqué sur Annuler");
} else {
    alert("Bonjour " + reponse);
}