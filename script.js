
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
            a: "Non puoi aver risposto questo,non mi conosci!!",
            b: "Brava, questa era tricky",
            c: "Mi piace e sono bravo, ma non è questo :(",
            d: "Sempre odiato, se hai risposto questo non conosci nulla di me"
        },
        question6: {
            a: "Ti piacerebbeeeeeee",
            b: "Ti piacerebbeeeeeee",
            c: "Beh se non lo sai tu...vecchiaaaa",
            d: "Ora non esageriamo!"
        },
        question7: {
            a: "Sei vecchia è vero, ma per me sei altro...",
            b: "E invece si",
            c: "Cretina sari tu!!",
            d: "Propio una bella milfona mlmlml (senza figli fortunatamente)"
        },
        question8: {
            a: "Sono triste...",
            b: "Mi hai ferito tanto tanto tanto, un colpo al cuore",
            c: "Siiiii anche io amore mio",
            d: "Se hai scelto questa al posto dell'altra vuol dire che non mi ami abbastanza...VAFFANCULO"
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
        message = "Bravissima amore mio, HAI VINTO!!!";
        document.getElementById("birthday-message").style.display = "block"; // Mostra il messaggio di compleanno
    } else if (percentage >= 75) {
        message = "Dai poteva andare peggio, spero tu ne abbia sbagliata solo una...";
    } else if (percentage >= 50) {
        message = "Male male dovro riconsiderare la nostra relazione";
    } else {
        message = "Io fossi in te mi VERGOGNEREI";
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
