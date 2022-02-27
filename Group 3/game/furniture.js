const quizData = [
    {
        question: "what is it?",
        pic: "img/bed.webp",
        a: "bed",
        b: "chair",
        c: "table",
        d: "desk",
        correct: "a",
    },
    {
        question:"what is it??",
        pic: "img/chair.webp",

        a: "bed",
        b: "chair",
        c: "table",
        d: "desk",
        correct: "b",
    },
    {
        question: "what is it?",
        pic: "img/dolab.jpg",

        a: "bed",
        b: "chair",
        c: "table",
        d: "dolab",
        correct: "d",
    },
    {
        question: "what is it?",
        pic: "img/table.webp",

        a: "bed",
        b: "chair",
        c: "table",
        d: "desk",
        correct: "c",
    },
    {
        question: "what is it?",
        pic: "img/desk.webp",
    
        a: "desk",
        b: "chair",
        c: "table",
        d: "dolab",
        correct: "a",
    },
 
   


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const pic = document.getElementById('pic')

const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question

    pic.src = currentQuizData.pic

    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})