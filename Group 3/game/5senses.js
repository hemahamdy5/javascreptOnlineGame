const quizData = [
    {
        question: "choose the coorect name of what in following senses ?",
        pic: "img/5senses5.jpg",
        a: "aye",
        b: "ear",
        c: "hand",
        d: "mouth",
        correct: "b",
    },
    {
        question:"choose the coorect name of what in following senses ?",
        pic: "img/5senses4.jpg",

        a: "hand",
        b: "ear",
        c: "mouth",
        d: "aye",
        correct: "a",
    },
    {
        question: "choose the coorect name of what in following senses ?",
        pic: "img/5senses3.jpg",

        a: "hand",
        b: "aye",
        c: "nose",
        d: "mouth",
        correct: "c",
    },
    {
        question: "choose the coorect name of what in following senses ?",
        pic: "img/5senses2.jpg",

        a: "nose",
        b: "hand",
        c: "mouth",
        d: "aye",
        correct: "d",
    },
    {
        question: "choose the coorect name of what in following senses ?",
        pic: "img/5senses1.jpg",
    
        a: "mouth",
        b: "nose",
        c: "aye",
        d: "ear",
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