const quizData = [
    {
        question: "select lion",
        
        a: "img/lion.gif",
        b: "img/cat-11525956124t37pf0dhfz.png",
        c: "img/pngtree-giraffe-png-element-image_2273791.jpg",

    },
    {
        question:"choose cat",

        a: "img/lamb-iStock-665494268-16x9-e1559777676675-1200x675.jpg",
        b: "img/cat.gif",
        c: "img/pngtree-giraffe-png-element-image_2273791.jpg",
             
    },
    {
        question: "choose tiger",
    
        a: "img/tiger.gif",
        b: "img/cat-11525956124t37pf0dhfz.png",
        c: "img/pngtree-giraffe-png-element-image_2273791.jpg",
    
    },
    {
        question: "choose tuteriall",
       
        a: "img/lamb-iStock-665494268-16x9-e1559777676675-1200x675.jpg",
        b: "img/cat-11525956124t37pf0dhfz.png",
        c: "img/tuteriall.gif",
       
    },
   
];
const quiz= document.getElementById('quiz')

const questionEl = document.getElementById('question')
const div1 = document.getElementById('first')
const div2 = document.getElementById('second')

var pic1 = document.getElementById('pic1')
const pic2 = document.getElementById('pic2')
const pic3 = document.getElementById('pic3')



const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question

    pic1.src = currentQuizData.a;
    div2.appendChild(pic1);

    pic2.src = currentQuizData.b;
    div2.appendChild(pic2);

    pic3.src = currentQuizData.c;
    div2.appendChild(pic3);

   
}

function deselectAnswers() {
    document.getElementById("second").innerHTML = "";
}




    div1.addEventListener('drop', function(e) {
      
      var imageTypes = ['image/gif'];
      if (e.dataTransfer && e.dataTransfer.files) {
        var fileType = e.dataTransfer.files[0].type;
        if (imageTypes.includes(fileType)) {
            score++;
        } 
        
        currentQuiz++

           if(currentQuiz < quizData.length) {
               loadQuiz()

           } else {
               quiz.innerHTML="";
               questionEl.innerHTML = `
               <h2>You answered ${score}/${quizData.length} questions correctly</h2>
    
                <button onclick="location.reload()">Reload</button> 
               `
           }
      }
    });
            
   
   


