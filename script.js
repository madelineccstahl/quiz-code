const Questions = [{
    q: "What is used to style your code?",
    a: [{ text: "Javascript", isCorrect: false },
    { text: "CSS", isCorrect: true},
    { text: "React", isCorrect: false},
    { text: "HTML", isCorrect: false}
]

},
{
    q: "What is the $ in jQuery?",
    a: [{ text: "Function operator", isCorrect: true},
    { text: "Comment out symbol", isCorrect: false},
    { text: "Button symbol", isCorrect: false},
    { text: "Wildcard", isCorrect: false}
]

},
{
    q: "What should you do when you don't know what to do?",
    a: [{ text: "Cry", isCorrect: false},
    { text: "Google it", isCorrect: true},
    { text: "Smash keyboard", isCorrect: false},
    { text: "Procrastinate", isCorrect: false}
]

},
{
    q: "What is the word that would best describe JavaScript?",
    a: [{ text: "Confusing", isCorrect: false},
    { text: "Wild", isCorrect: false},
    { text: "Cute", isCorrect: false},
    { text: "Dynamic", isCorrect: true}

]
},
{
    q: "What is it called when you edit/rework code?",
    a: [{ text: "Swapping", isCorrect: false},
    { text: "Refactoring", isCorrect: true},
    { text: "Revising", isCorrect: false},
    { text: "Revealing", isCorrect: false}

]
},
{
    q: "How long should you attack a problem before looking for help?",
    a: [{ text: "2 hours", isCorrect: false},
    { text: "24 hours", isCorrect: false},
    { text: "2 minutes", isCorrect: false},
    { text: "20 minutes", isCorrect: true}

]

},
{
    q: "What is a job that would require coding?",
    a: [{ text: "Hacker", isCorrect: true},
    { text: "Doctor", isCorrect: false},
    { text: "Fortune-teller", isCorrect: false},
    { text: "Construction worker", isCorrect: false}

]
}

]

let currentQuestion = 0
let score = 0

function loadQuestion () {
    const question = document.getElementById("question")
    const option = document.getElementById("option")

    question.textContent = Questions[currentQuestion].q;
    option.innerHTML = "";

    for (let i = 0; i < Questions[currentQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;

        choiceLabel.textContent = Questions[currentQuestion].a[i].text;

        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        option.appendChild(choicesdiv);
    }
}

btn.addEventListener("click", checkAns);

    loadQuestion ();

    function loadScore () {
        const totalScore = document.getElementById("score")
        totalScore.textContent = 'You scored ${score} out of ${Questions.length}!'
    }

    function nextQuestion () {
        if (currentQuestion < Questions.length - 1) {
            currentQuestion++;
            loadQuestion();
        } else {
            document.getElementById("option").remove()
            document.getElementById("question").remove()
            document.getElementById("btn").remove()
            loadScore();
        }
    }

function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct!");
        nextQuestion();
    }  else {
        nextQuestion();
    }
}