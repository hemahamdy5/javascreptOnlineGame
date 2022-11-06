const quizData = [
    {
        question: " 1 of 5 choose the correct name of whats in the following picture",
        pic: "img/clothes1.jpg",
        a: "jacket",
        b: "gloves",
        c: "jeans",
        d: "cap",
        hint:"somthing you wear on your head",
        correct: "d",
        mp3: "img/clothes1.mp3"
    },
    {
        question: "2 of 5 choose the correct name of whats in the following picture",
        pic: "img/clothes2.jpg",

        a: "jacket",
        b: "gloves",
        c: "jeans",
        d: "cap",
        hint:"you wear it on your hands",

        correct: "b",
        mp3: "img/clothes2.mp3"

    },
    {
        question: "3 of 5 choose the correct name of whats in the following picture",
        pic: "img/clothes3.jpg",
        a: "shoes",
        b: "gloves",
        c: "jeans",
        d: "cap",
        hint:"you wear it on foot",

        correct: "a",
        mp3: "img/clothes3.mp3"

    },
    {
        question: "4 of 5 choose the correct name of whats in the following picture",
        pic: "img/clothes4.jpg",

        a: "jacket",
        b: "shirt",
        c: "jeans",
        d: "cap",
        hint:"you wear it on your top body",

        correct: "b",
        mp3: "img/clothes4.mp3"

    },

    {
        question: "5 of 5 choose the correct name of whats in the following picture",
        pic: "img/clothes5.jpg",

        a: "jacket",
        b: "gloves",
        c: "shorts",
        d: "cap",
        hint:"you wear it on your lower body",

        correct: "c",
        mp3: "img/clothes5.mp3"

    },

];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const pic = document.getElementById('pic')
const audio = document.getElementById('audio')

const tooltip = document.getElementById('tooltip')

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
    audio.src = currentQuizData.mp3

    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    tooltip.innerText = currentQuizData.hint


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

var choosen=["","","","",""];

submitBtn.addEventListener('click', () => {


    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       choosen[currentQuiz]=answer;

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <h2>correct answer of quetion 1 is ${quizData[0].correct}/your choice:${choosen[0]}</h2>
           <h2>correct answer of quetion 2 is ${quizData[1].correct}/your choice:${choosen[1]}</h2>
           <h2>correct answer of quetion 3 is ${quizData[2].correct}/your choice:${choosen[2]}</h2>
           <h2>correct answer of quetion 4 is ${quizData[3].correct}/your choice:${choosen[3]}</h2>
           <h2>correct answer of quetion 5 is ${quizData[4].correct}/your choice:${choosen[4]}</h2>

           <button onclick="location.reload()">Reload</button>
           `

       }
    }
})


