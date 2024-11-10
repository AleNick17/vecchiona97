// Aggiungi un event listener per il submit del form
document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Impedisce il ricaricamento della pagina
    
    // Risposte corrette per ciascuna domanda
    const correctAnswers = {
        question1: 'c', // La risposta corretta alla domanda 1 è "Su Omegle"
        question2: 'c', // La risposta corretta alla domanda 2 è "2021"
        question3: 'a', // La risposta corretta alla domanda 3 è "Giovedì 26 agosto"
        question4: 'a'  // La risposta corretta alla domanda 4 è "Blu"
    };

    // Risposte dell'utente
    const userAnswers = {
        question1: document.querySelector('input[name="question1"]:checked')?.value,
        question2: document.querySelector('input[name="question2"]:checked')?.value,
        question3: document.querySelector('input[name="question3"]:checked')?.value,
        question4: document.querySelector('input[name="question4"]:checked')?.value
    };

    // Calcola il punteggio
    let score = 0;
    let totalQuestions = Object.keys(correctAnswers).length;

    // Confronta le risposte dell'utente con le risposte corrette
    for (let key in correctAnswers) {
        if (correctAnswers[key] === userAnswers[key]) {
            score++;
        }
    }

    // Calcola la percentuale di risposte corrette
    const percentage = (score / totalQuestions) * 100;

    // Mostra il punteggio
    document.getElementById("score").textContent = `Hai ottenuto ${score} su ${totalQuestions} risposte corrette! (${percentage.toFixed(2)}%)`;

    // Mostra il messaggio in base alla percentuale
    let message;
    if (percentage === 100) {
        message = "Complimenti! Sei un esperto!";
    } else if (percentage >= 75) {
        message = "Ben fatto! Sei molto bravo!";
    } else if (percentage >= 50) {
        message = "Non male, ma c'è ancora spazio per migliorare!";
    } else {
        message = "Oh no! Dobbiamo ripassare un po'!";
    }

    document.getElementById("message").textContent = message;

    // Mostra il risultato
    document.getElementById("result").style.display = "block";
});

