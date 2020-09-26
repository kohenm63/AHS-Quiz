const quizData = [
    {
        question: " What is the most used programming language in 2020?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "c",
    },
    {
        question: " Which of the following is true about typeof operator in JavaScript?",
        a: "The typeof is a unary operator that is placed before its single operand, which can be of any type",
        b: "Its value is a string indicating the data type of the operand",
        c: "Both of the above",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "Which of the following is the correct syntax to create a cookie using JavaScript?",
        a: "document.cookie = 'key1 = value1; key2 = value2; expires = date';",
        b: "browser.cookie = 'key1 = value1; key2 = value2; expires = date';",
        c: "window.cookie = 'key1 = value1; key2 = value2; expires = date'; ",
        d: "navigator.cookie = 'key1 = value1; key2 = value2; expires = date'; ",
        correct: "a",
    },
    {
        question: "Which built-in method removes the last element from an array and returns that element?",
        a: "last()",
        b: "get()",
        c: "pop()",
        d: "None of the above",
        correct: "c",
    },

    {
        question: "Which of the following function of Number object formats a number with a specific number of digits to the right of the decimal?",
        a: "toExponential()",
        b: "toFixed() ",
        c: "toPrecision()",
        d: "toLocaleString()",
        correct: "b",
    },

    {
        question: "Which of the following function of String object returns a number indicating the Unicode value of the character at the given index? ",
        a: "charAt()",
        b: "charCodeAt()",
        c: "concat()",
        d: "indexOf()",
        correct: "b",
    },

    {
        question: "Which of the following function of String object is used to find a match between a regular expression and a string, and to replace the matched substring with a new substring? ",
        a: "concat()",
        b: "match()",
        c: "replace()",
        d: "search()",
        correct: "c",
    },

    {
        question: "Which of the following function of String object causes a string to be displayed as struck-out text, as if it were in a <strike> tag? ",
        a: "sup() ",
        b: "small() ",
        c: "strike()",
        d: "sub() ",
        correct: "c",
    },

    {
        question: "Which of the following function of Array object returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found? ",
        a: "indexOf() ",
        b: "join() ",
        c: "lastIndexOf()",
        d: "map()",
        correct: "c",
    },
    {
        question: "Why so JavaScript and Java have similar name? ",
        a: "JavaScript is a stripped-down version of Java ",
        b: "JavaScript's syntax is loosely based on Java's",
        c: "They both originated on the island of Java",
        d: "None of the above ",
        correct: "b",
    },
    {
        question: "Which of the following function of Array object reverses the order of the elements of an array? ",
        a: "reverse() ",
        b: "push()",
        c: "reduce()",
        d: "reduceRight()",
        correct: "a",
    },
    {
        question: "When a user views a page containing a JavaScript program, which machine actually executes the script? ",
        a: "The User's machine running a Web browser",
        b: "The Web server",
        c: "A central machine deep within Netscape's corporate offices ",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "  ______ JavaScript is also called client-side JavaScript.",
        a: "Microsoft",
        b: "Navigator",
        c: "LiveWire ",
        d: "Native",
        correct: "b",
    },
    {
        question: " What should appear at the very end of your JavaScript?",
        a: "The </script>",
        b: "The <script>",
        c: "The END statement",
        d: "None of the above",
        correct: "a",
    },
    {
        question: " Which of the following can't be done with client-side JavaScript?",
        a: "Validating a form",
        b: "Sending a form's contents by email",
        c: "Storing the form's contents to a database file on the server",
        d: "None of the above",
        correct: "c",
    },
    {
        question: " How does JavaScript store dates in a date object?",
        a: "The number of milliseconds since January 1st, 1970",
        b: "The number of days since January 1st, 1900",
        c: "The number of seconds since Netscape's public stock offering.",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "What does the <noscript> tag do? ",
        a: "Enclose text to be displayed by non-JavaScript browsers. ",
        b: "Prevents scripts on the page from executing.",
        c: "Describes certain low-budget movies.",
        d: "None of the above",
        correct: "a",
    },
    

    {
        question: " Which of the following is a JavaScript data type?",
        a: "null",
        b: "undefined",
        c: "object",
        d: "all of the above",
        correct: "d",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "Which of the following is a syntactically correct for loop?",
        a: "for (i<=10;i++)",
        b: "for i=1 to 10",
        c: "for (i=0;i<=10;i++)",
        d: "for (i=0;i<=10)",
        correct: "c",
    },
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
    // check to see the answer
    const answer = getSelected();
    

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
            increment();

            var audio = new Audio("clap.mp3");
            audio.play();
          

           
        
        }
        if (answer !== quizData[currentQuiz].correct) {
            score--;
            increment();
            var audio = new Audio("wrong.wav");
            audio.play();
           alert();
            
        
        }


        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
            
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
            setTimeout (function(){
                var audio = new Audio("lol.wav");
                audio.play();
            }, 5000)
            
            
            audio.play();
            //second track delay of 5 sec
            setTimeout (function(){
                var audio = new Audio("AHOtro.mp4");
                audio.play();
            }, 8000)
            
          
        }
    }
});


//clock 
var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}

//progress bar
var v1=document.getElementById('p1').value;
document.getElementById("p1").value= v1;

function increment() {
    var v1=document.getElementById('p1').value;
    document.getElementById('p1').value= v1 + 1;
    
    }
   

//cursor

let mouseCursor = document.querySelector('.cursor');
window.addEventListener('mousemove', cursor);
function cursor (e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
} 

//audio delay
setTimeout(function(){
    document.getElementById("myAudio").play();
  }, 8000)


  //custom alert  
function alert() {
    var x = document.querySelector(".alert");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    } 
  }