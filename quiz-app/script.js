const quizData = [
    {
        question: 'How old is Jhansi?',
        a: '10',
        b: '20',
        c: '23',
        d: '120',
        correct: 'c'
    }, {
        question: 'What is the most used programming language?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'd'
    }, {
        question: 'Who is the Prime Minister of India?',
        a: 'Jhansi',
        b: 'Narendra Modi',
        c: 'Kiran',
        d: 'Tara',
        correct: 'b'
    }, {
        question: 'What is the color of Spinach?',
        a: 'Black',
        b: 'Blue',
        c: 'Brown',
        d: 'Green',
        correct: 'd'
    }, {
        question: 'What year was Javascript launched?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'none of the above',
        correct: 'b'
    }
    
]

const quiz = document.getElementById('quiz');
const answerEls  = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}


function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answerEl.checked = false;
        }
    });
}

submitBtn.addEventListener('click', () => {
    //check to see the answer
    const answer = getSelected();
    console.log(answer);

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        } else {
            //Show results
            quiz.innerHTML = `<h2>You answered <strong>${score}/${quizData.length}</strong> questions correctly.</h2> 
            
            <button onclick="location.reload()">Reload</button>`
        }
    }

});