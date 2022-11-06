const quizData = [
    {
        question: "what color is this ?",
        pic:"img/1.png",
        a: "black",
        b: "orange",
        c: "red",
        d: "green",
        hint:"somthing you see on tree",
        correct: "d",
    },
    {
        question: "what color is this ?",
        pic:"img/2.png",
        a: "yellow",
        b: "red",
        c: "purple",
        d: "white",
        hint:"somthing you see on apples",
        correct: "b",
    },
    {
        question: "what color is this ?",
        pic:"img/3.png",
        a: "blue",
        b: "green",
        c: "pink",
        d: "gray",
        hint:"somthing you see in the sky",
        correct: "a",
    },
    {
        question: "what color is this ?",
        pic:"img/4.png",
        a: "purple",
        b: "orange",
        c: "black",
        d: "blue",
        hint:"somthing you see on orange",
        correct: "b",
    },
    {
        question: "what color is this ?",
        pic:"img/5.png",
        a: "pink",
        b: "green",
        c: "brown",
        d: "yellow",
        hint:"somthing you see on wood",
        correct: "c",
    },

];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const pic = document.getElementById('pic')
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