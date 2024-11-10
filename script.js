// Funzione che controlla le risposte e mostra il punteggio
document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impedisce il ricaricamento della pagina
    
    // Risposte corrette
    const correctAnswers = {
        q1: 'Su Omegle',  // Risposta corretta per la domanda sul luogo
        q2: '2021'  // Risposta corretta per la domanda sull'anno
        q3: 'Giovedì 26 Agosto'  // Risposta corretta per la domanda sul giorno
        q4: 'Blu'  // Risposta corretta per la domanda sul colore
    };

    // Risposte dell'utente
    const userAnswers = {
        q1: document.querySelector('input[name="q1"]:checked')?.value,
        q2: document.querySelector('input[name="q2"]:checked')?.value,
        q3: document.querySelector('input[name="q3"]:checked')?.value,
        q4: document.querySelector('input[name="q4"]:checked')?.value
    };

    // Contatore per le risposte corrette
    let score = 0;
    let totalQuestions = Object.keys(correctAnswers).length;

    // Confronta le risposte dell'utente con quelle corrette
    for (let key in correctAnswers) {
        if (correctAnswers[key] === userAnswers[key]) {
            score++;
        }
    }

    // Calcola la percentuale di risposte corrette
    const percentage = (score / totalQuestions) * 100;

    // Mostra il punteggio e il messaggio
    document.getElementById("score").textContent = `Hai ottenuto ${score} su ${totalQuestions} risposte corrette! (${percentage.toFixed(2)}%)`;

    let message;
    if (percentage === 100) {
        message = "Complimenti! Sei una vera esperta!";
    } else if (percentage >= 75) {
        message = "Ben fatto! Sei molto vicino alla perfezione!";
    } else if (percentage >= 50) {
        message = "Bene! Ma puoi fare ancora meglio!";
    } else {
        message = "Ci vuole un po' più di pratica, ma non ti preoccupare, ci riuscirai!";
    }

    document.getElementById("message").textContent = message;

    // Mostra il risultato
    document.getElementById("result").style.display = "";
});
