const quizData = [
    {
        question: "what is it?",
        pic: "img/apple.jpg",
        a: "orange",
        b: "papaya",
        c: "peach",
        d: "apple",
        correct: "d",
        aud: "img/apple.mp3",
    },
    {
        question: "what is it?",
        pic: "img/apricot.jpg",

        a: "banana",
        b: "apricot",
        c: "apple",
        d: "kiwi",
        correct: "b",
        aud: "img/apricot.mp3",
    },
    {
        question: "What is it?",
        pic: "img/avocado.jpg",

        a: "avocado",
        b: "apricot",
        c: "coconut",
        d: "pineapple",
        correct: "a",
        aud: "img/avocado.mp3",
    },
    {
        question: "What is it?",
        pic: "img/banana.jpg",

        a: "apple",
        b: "banana",
        c: "peach",
        d: "kiwi",
        correct: "b",
        aud: "img/banana.mp3",
    },
    {
        question: "what is it?",
        pic: "img/cherries.jpg",
        a: "orange",
        b: "papaya",
        c: "peach",
        d: "cherries",
        correct: "d",
        aud: "img/cherries.mp3",
    },


];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const pic = document.getElementById('pic')
const mp = document.getElementById('audio')

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
    mp.src = currentQuizData.aud

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
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

var choosen = ["", "", "", "", ""];
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        choosen[currentQuiz] = answer;
        currentQuiz++

        if (currentQuiz < quizData.length) {
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
