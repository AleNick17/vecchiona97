// Funzione per generare posizioni casuali per i cuori
function generateHeartPositions() {
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach(heart => {
        const randomX = Math.random() * 100;  // Posizione orizzontale tra 0 e 100%
        const randomY = Math.random() * 100;  // Posizione verticale tra 0 e 100%
        heart.style.left = `${randomX}%`;
        heart.style.top = `${randomY}%`;
    });
}

// Esegui la funzione quando la pagina si carica
window.onload = generateHeartPositions;

// Aggiungi un event listener per il submit del form
document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Impedisce il ricaricamento della pagina

    // Risposte corrette per ciascuna domanda
    const correctAnswers = {
        question1: 'c', // La risposta corretta alla domanda 1 è "Su Omegle"
        question2: 'c', // La risposta corretta alla domanda 2 è "2021"
        question3: 'a', // La risposta corretta alla domanda 3 è "Giovedì 26 agosto"
        question4: 'a',  // La risposta corretta alla domanda 4 è "Blu"
        question5: 'b',
        question6: 'c',
        question7: 'd',
        question8: 'c'
    };

    // Risposte dell'utente
    const userAnswers = {
        question1: document.querySelector('input[name="question1"]:checked')?.value,
        question2: document.querySelector('input[name="question2"]:checked')?.value,
        question3: document.querySelector('input[name="question3"]:checked')?.value,
        question4: document.querySelector('input[name="question4"]:checked')?.value,
        question5: document.querySelector('input[name="question5"]:checked')?.value,
        question6: document.querySelector('input[name="question6"]:checked')?.value,
        question7: document.querySelector('input[name="question7"]:checked')?.value,
        question8: document.querySelector('input[name="question8"]:checked')?.value
    };

    // commenti a risposte
    const comments = {
        question1: {
            a: "Hmm... questo è quello che hai detto ai tuoi",
            b: "La discoteca? Forse quello è il tuo amante",
            c: "Dai, non potevi sbagliarla...",
            d: "Ma se non ci siamo conosciuti...perchè stai facendo questo quiz?"
        },
        question2: {
            a: "Nel 2020? No, VERGOGNATI, ma ci sei vicina",
            b: "Non nel 2019, ero troppo piccolo per te",
            c: "Anche questa era facile!!",
            d: "No direi proprio di no! VERGOGNA"
        },
        question3: {
            a: "Sì! Brava!! Giovedì 26 agosto è il nostro giorno speciale! 💕",
            b: "VERGOGNATI",
            c: "SCEMAAAAAA",
            d: "HAI SBAGLIATO CRETINAAAAA"
        },
        question4: {
            a: "Menomale, almeno mi conosci un pochino!!",
            b: "Quando mai è stato il rossooooo?!?!",
            c: "Questo è il tuo, CRETINAAA",
            d: "E'vero metto sempre magliette bianche, però non è questooo!"
        },
        question5: {
            a: "Menomale, almeno mi conosci un pochino!!",
            b: "Quando mai è stato il rossooooo",
            c: "Questo è il tuo, CRETINAAA",
            d: "E'vero metto sempre magliette bianche, però non è questooo!"
        },
        question6: {
            a: "Menomale, almeno mi conosci un pochino!!",
            b: "Quando mai è stato il rossooooo",
            c: "Questo è il tuo, CRETINAAA",
            d: "E'vero metto sempre magliette bianche, però non è questooo!"
        },
        question7: {
            a: "Menomale, almeno mi conosci un pochino!!",
            b: "Quando mai è stato il rossooooo",
            c: "Questo è il tuo, CRETINAAA",
            d: "E'vero metto sempre magliette bianche, però non è questooo!"
        },
        question8: {
            a: "Menomale, almeno mi conosci un pochino!!",
            b: "Quando mai è stato il rossooooo",
            c: "Questo è il tuo, CRETINAAA",
            d: "E'vero metto sempre magliette bianche, però non è questooo!"
        }
    };

    // Calcola il punteggio
    let score = 0;

    // Per ogni domanda, controlliamo se la risposta è corretta
    for (let i = 1; i <= 8; i++) {
        let selectedAnswer = userAnswers[`question${i}`];

        if (selectedAnswer) {
            let correctAnswer = correctAnswers[`question${i}`];
            let commentId = `comment${i}${selectedAnswer}`;
            
            // Otteniamo l'elemento commento relativo alla risposta selezionata
            let commentElement = document.getElementById(commentId);

            if (selectedAnswer === correctAnswer) {
                score += 1;
                commentElement.textContent = comments[`question${i}`][selectedAnswer];
                commentElement.classList.add("correct");
                commentElement.classList.remove("incorrect");
            } else {
                commentElement.textContent = comments[`question${i}`][selectedAnswer];
                commentElement.classList.add("incorrect");
                commentElement.classList.remove("correct");
            }
        }
    };

    // Calcola la percentuale di risposte corrette
    const totalQuestions = 8; // Numero totale di domande
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
const inputs = document.querySelectorAll('input[type="radio"]');
inputs.forEach(input => {
    input.addEventListener('change', function() {
        const question = this.name;
        const selectedAnswer = this.value;
        const commentId = `comment${question.slice(-1)}${selectedAnswer}`;
        const commentElement = document.getElementById(commentId);
        if (commentElement) {
            commentElement.style.display = "inline"; // Mostra il commento
        }
    });
});
