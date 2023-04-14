const loader = document.querySelector('.loader');
const main = document.querySelector('.main');

function init() {
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';

        main.style.display = 'flex';
        setTimeout(() =>main.style.opacity = 1, 50);
        },4000);
}

init();

const quizData = [
   {
    question: "What is Django?",
    a: "A programming language",
    b: "A web framework",
    c: "A database management system",
    d: "A content management system",
    correct: "b",
    explanation: "Django is a high-level Python web framework that enables rapid development of secure and maintainable websites."
  },
  {
    question: "What is the purpose of Django's 'views' in the Model-View-Controller (MVC) pattern?",
    a: "To define database models",
    b: "To render templates",
    c: "To handle user input and generate output",
    d: "To manage the application's data layer",
    correct: "c",
    explanation: "Views are the central component of Django's MVC pattern, responsible for handling user input, processing data, and rendering output."
  },
  {
    question: "What is Django's built-in object-relational mapping (ORM) system?",
    a: "A database query optimization tool",
    b: "A database migration tool",
    c: "A system for defining data models and interacting with the database",
    d: "A system for managing database transactions",
    correct: "c",
    explanation: "Django's ORM is a powerful tool for defining data models in Python code and interacting with the database without writing SQL."
  },
  {
    question: "What is Django's URL routing system used for?",
    a: "To map URLs to views",
    b: "To map views to models",
    c: "To map models to database tables",
    d: "To map templates to views",
    correct: "a",
    explanation: "Django's URL routing system maps URLs to the appropriate views, allowing the application to process user input and generate output based on the requested URL."
  },
  {
    question: "What is the name of the file that contains Django's project-level settings?",
    a: "settings.py",
    b: "urls.py",
    c: "models.py",
    d: "views.py",
    correct: "a",
    explanation: "The settings.py file contains project-level settings such as database configuration, security settings, and installed applications."
  },
  {
    question: "What is the name of the Django template language?",
    a: "Jinja2",
    b: "Django Templates",
    c: "Mako",
    d: "Handlebars",
    correct: "b",
    explanation: "Django Templates is the default template language used by Django, allowing developers to write HTML templates that can be rendered with dynamic content."
  },
  {
    question: "What is the purpose of Django's built-in admin interface?",
    a: "To allow developers to manage database tables and records",
    b: "To allow users to log in to the application",
    c: "To enable automatic deployment of the application",
    d: "To provide a testing environment for the application",
    correct: "a",
    explanation: "Django's built-in admin interface provides a web-based interface for managing database tables and records, making it easy to create, update, and delete data without writing custom views."
  },
  {
    question: "What is Django's object-oriented approach to database models called?",
    a: "Object-Relational Mapping (ORM)",
    b: "Django Models",
    c: "Pythonic Models",
    d: "Data Objects",
    correct: "b",
    explanation: "Django's object-oriented approach},
      {
    question: "What is the name of the Django testing framework?",
    a: "Unittest",
    b: "Pytest",
    c: "Django Test",
    d: "Testing Framework",
    correct: "a",
    explanation: "Django includes a testing framework based on the unittest module from Python's standard library, providing a convenient way to test Django views, models, and other components."
  },
  {
    question: "What is Django's built-in caching system used for?",
    a: "To improve the performance of database queries",
    b: "To store user session data",
    c: "To store frequently accessed data in memory",
    d: "To cache HTTP responses",
    correct: "c",
    explanation: "Django's caching framework allows developers to store frequently accessed data in memory, reducing the need to query the database or perform expensive computations."
  },
  {
    question: "What is the name of the Python package that includes Django's built-in authentication system?",
    a: "django-auth",
    b: "django-authentication",
    c: "django.contrib.auth",
    d: "django.security.auth",
    correct: "c",
    explanation: "Django's authentication system is included in the django.contrib.auth package, providing a secure and flexible way to handle user authentication and authorization."
  },
  {
    question: "What is the purpose of Django's middleware?",
    a: "To handle HTTP requests and responses",
    b: "To store user session data",
    c: "To cache frequently accessed data",
    d: "To manage database transactions",
    correct: "a",
    explanation: "Django's middleware is a framework for processing HTTP requests and responses, allowing developers to add functionality such as authentication, caching, and logging to their applications."
  },
  {
    question: "What is the name of the Django package that provides support for sending email?",
    a: "django-email",
    b: "django-mail",
    c: "django.contrib.email",
    d: "django.core.mail",
    correct: "d",
    explanation: "Django's email functionality is included in the django.core.mail package, providing a simple and powerful way to send email from Django applications."
  },
  {
    question: "What is the name of Django's template inheritance feature?",
    a: "Template Inheritance",
    b: "Template Blocks",
    c: "Template Composition",
    d: "Template Overriding",
    correct: "a",
    explanation: "Django's template inheritance allows developers to create reusable templates by defining a base template that can be extended and customized by child templates."
  },
  {
    question: "What is the purpose of Django's 'signals' framework?",
    a: "To allow communication between different parts of the application",
    b: "To manage database transactions",
    c: "To handle HTTP requests and responses",
    d: "To provide a testing environment for the application",
    correct: "a",
    explanation: "Django's signals framework provides a way for different parts of the application to communicate with each other without requiring direct dependencies between them."
  },
  {
    question: "What is the name of the Django package that provides support for working with JSON data?",
    a: "django-json",
    b: "django-jsonfield",
    c: "jsonlib",
    d: "json",
    correct: "b",
    explanation: "The django-jsonfield package provides a JSONField model field and form field for working with JSON data in Django applications."
  },
    {
    question: "What is the purpose of Django's built-in 'signals' framework?",
    a: "To allow communication between different parts of the application",
    b: "To manage database transactions",
    c: "To handle HTTP requests and responses",
    d: "To provide a testing environment for the application",
    correct: "a",
    explanation: "Django's signals framework provides a way for different parts of the application to communicate with each other without requiring direct dependencies between them."
  },
  {
    question: "Which of the following is a popular third-party package for adding REST API support to Django?",
    a: "django-rest",
    b: "django-restful",
    c: "django-rest-framework",
    d: "django-api",
    correct: "c",
    explanation: "Django REST framework is a popular third-party package for building RESTful APIs in Django applications."
  },
  {
    question: "What is the name of the Django package that provides support for working with images?",
    a: "django-images",
    b: "django-imaging",
    c: "django-imagefield",
    d: "django-imagekit",
    correct: "d",
    explanation: "Django ImageKit is a third-party package that provides a powerful and flexible way to work with images in Django applications."
  },
  {
    question: "Which of the following is a common pattern for structuring a Django project?",
    a: "MVC (Model-View-Controller)",
    b: "MVT (Model-View-Template)",
    c: "MVVM (Model-View-ViewModel)",
    d: "MVP (Model-View-Presenter)",
    correct: "b",
    explanation: "Django's MVT (Model-View-Template) pattern is a variation of the classic MVC pattern that separates the presentation logic (Template) from the business logic (Model) and the user interface (View)."
  },
  {
    question: "What is the name of the Django package that provides support for working with CSV data?",
    a: "django-csv",
    b: "django-csvkit",
    c: "django-csvfield",
    d: "django-import-export",
    correct: "d",
    explanation: "Django-import-export is a third-party package that provides support for importing and exporting CSV, JSON, Excel, and other formats in Django applications."
  },
  {
    question: "What is the purpose of Django's 'context processors'?",
    a: "To add extra context variables to templates",
    b: "To manage database transactions",
    c: "To handle HTTP requests and responses",
    d: "To provide a testing environment for the application",
    correct: "a",
    explanation: "Django's context processors are functions that add extra context variables to the context of a template, allowing developers to pass additional data to the template."
  },
  {
    question: "Which of the following is a commonly used database backend for Django?",
    a: "MySQL",
    b: "PostgreSQL",
    c: "SQLite",
    d: "All of the above",
    correct: "d",
    explanation: "Django supports multiple database backends, including MySQL, PostgreSQL, SQLite, and others."
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
            }, 1000)
            
            
            audio.play();
            //second track delay of 5 sec
            setTimeout (function(){
                var audio = new Audio("AHOtro.mp4");
                audio.play();
            }, 2000)
            
          
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
  }, 1000)


  //custom alert  
function alert() {
    var x = document.querySelector(".alert");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    } 
  }
