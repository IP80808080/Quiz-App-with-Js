const quizData = [
    {
        question: 'Who discovered the electron?',
        a: 'Rutherford',
        b: 'Chadwick',
        c: 'Thomson',
        d: 'Goldstein',
        answer: 'c Thomson'
    },
    {
        question: 'Which isotope is used in the nuclear power plants to generate electricity?',
        a: 'Uranium 235',
        b: 'Iodine 131',
        c: 'Cobalt 60',
        d: 'Uranium 238',
        answer: 'a Uranium 235'

    },
    {
        question: 'Why was the Thomson’s Model of an atom failed?',
        a: 'It could not explain the screening of negative charges from that of positive',
        b: 'It did not tell about the presence of electrons',
        c: 'It did not give an idea about the discrete energy levels',
        d: 'It explained the atom as a whole to be electrically neutral',
        answer: 'a and c'
    },
    {
        question: 'What was the source of alpha particles in Rutherford scattering experiment?',
        a: 'Hydrogen nucleus',
        b: 'Argon nucleus',
        c: 'Helium nucleus',
        d: 'Goldstein',
        answer: 'c Helium nucleus'
    },
    {
        question: 'Which of the following elements does not exhibit the electrovalencey?',
        a: 'Sodium',
        b: 'Calcium',
        c: 'Carbon',
        d: 'Chlorine',
        answer: 'c Carbon'
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});