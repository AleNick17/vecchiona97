document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Nascondi il modulo
    document.getElementById("quizForm").style.display = "none";
    
    // Mostra il messaggio di risultato
    document.getElementById("result").style.display = "block";
});
