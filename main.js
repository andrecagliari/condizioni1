alert(`Controlla a quanto corrisponde il tuo voto!`);
// Esercizio 1: Voti e giudizi
// Scrivi un programma che, dato un voto compreso tra 0 e 30, restituisca il giudizio corrispondente.

let Voto = parseInt(prompt(`Inserisci un voto compreso tra 0 e 30:`));
// Chiede all'utente di inserire un voto compreso tra 0 e 30

if(Voto <= 18){
    console.log(`Insufficiente`);
}
// Voto fino a 18 è considerato insufficiente

else if(Voto >= 19 && Voto <= 21){
    console.log(`Sufficiente`);
}
// Voto da 19 a 21 è considerato sufficiente

else if(Voto >= 22 && Voto <= 24){
    console.log(`Buono`);
}
// Voto da 22 a 24 è considerato buono

else if(Voto >= 25 && Voto <= 27){
    console.log(`Distinto`);
}
// Voto da 25 a 27 è considerato distinto

else if(Voto >= 28 && Voto <= 29){
    console.log(`Ottimo`);
}
// Voto da 28 a 29 è considerato ottimo

else if(Voto == 30){
    console.log(`Eccellente`);
}
// Voto di 30 è considerato eccellente
 
else{
    console.log(`Voto non valido`);
}
// Se il voto non rientra in nessuna delle categorie precedenti, viene considerato non valido
// Voto non valido se è al di fuori del range 0-30

let Giudizio;
switch (true) {
    case (Voto <= 18):
        Giudizio = `Insufficiente`;
        break;
    case (Voto >= 19 && Voto <= 21):
        Giudizio = `Sufficiente`;
        break;
    case (Voto >= 22 && Voto <= 24):
        Giudizio = `Buono`;
        break;
    case (Voto >= 25 && Voto <= 27):
        Giudizio = `Distinto`;
        break;
    case (Voto >= 28 && Voto <= 29):
        Giudizio = `Ottimo`;
        break;
    case (Voto == 30):
        Giudizio = `Eccellente`;
        break;
    default:
        Giudizio = `Voto non valido`;
        // Voto non valido se è al di fuori del range 0-30
        break;
}

console.log(`Il giudizio per il voto ${Voto} è: ${Giudizio}`);
// Stampa il giudizio corrispondente al voto