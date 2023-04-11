/* Script pour afficher la date courante */
let dateCourante = new Date();
let jourSemaine = dateCourante.toLocaleString('fr-FR', {weekday: 'long'});
let jour = dateCourante.getDate();
let mois = dateCourante.toLocaleString('fr-FR', {month: 'long'});
let annee = dateCourante.getFullYear();
document.querySelector('header').innerHTML += '<p>Nous sommes le ' + jourSemaine + ' ' + jour + ' ' + mois + ' ' + annee + '</p>';
