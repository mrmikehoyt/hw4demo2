"use strict";


//arrays below line
let questions = ['What does the concept of diversity in the workplace refer to?', 'The UK Equality Act was promulgated in', 'In which country was the Black Economic Empowerment (BEE) Programme launched in 2001:','The ‘Liberal Approach’ to Equal Opportunities advocates:']
let wrongAnswers = ['Physical differences among employees','Historical differences among groups','Managerial difference among employees', '1970', '2000', '2005', 'Japan', 'India', 'China', 'Positive discrimination', 'The quota system', 'Policies concerned with the specific needs of traditionally disadvantaged groups'];
let correctAnswers = ['Social differences among employees','2010','South Africa','The possibility for individuals to compete for social rewards without constraints'];
let indexOfCurrentQ=[0]
window.questionSlice1 = 0
window.questionSlice2 = 1
let answerSlice1 = 0
let answerSlice2 = 1
let wrongAnswerSlice1 = 0
let wrongAnswerSlice2 = 1
let wrongAnswersCurrent = wrongAnswers.slice(wrongAnswerSlice1, wrongAnswerSlice2);
let answerCurrent = correctAnswers.slice(answerSlice1,answerSlice2) ;
let questionCurrent  = questions.slice(window.questionSlice1,window.questionSlice2) ;
 window.points = []
let score = []
let wrongAnswers2 = [0]
let correctAnswers2 = [0]
let interval;
//arrays above line

//below used for declaring where tags are for buttons
let Button1 = document.querySelector("#button1");
let Button2 = document.querySelector("#button2");
let Button3 = document.querySelector("#button3");
let Button4 = document.querySelector("#button4");
document.getElementById("button1").style.visibility = "hidden";
document.getElementById("button2").style.visibility = "hidden";
document.getElementById("button3").style.visibility = "hidden";
document.getElementById("button4").style.visibility = "hidden";
//let GenerateBtn = document.querySelector("#generate");
let quizbox=document.getElementById("body");
let answerbox=document.getElementById("answerbox");
//above used for declaring where tags are for buttons
//below used for removing (hiding) answer buttons from main page
function Visibility(){
      document.getElementById("button1").style.visibility = "visible";
      document.getElementById("button2").style.visibility = "visible";
      document.getElementById("button3").style.visibility = "visible";
      document.getElementById("button4").style.visibility = "visible";
      document.getElementById("submit").style.visibility = "hidden";
      
}
//above function used for removing (hiding) submit / start button from main page
//function loads highscore page when game over
      function loadHighScore(){
           
         
      }
      
 
      
//function load highscore page when game over

 let submitStartBtn = document.querySelector("#submit"); // declared varible twice for troubleshooting issues // 
      // below is the code for displaying question 1
      submitStartBtn.addEventListener("click", function question1(){

      timerCountdown(); // code for starting timer //
 //     window.questionSlice1 = window.questionSlice1 + 1
 //     window.questionSlice2 = window.questionSlice2 + 1     
      quizbox.innerHTML = ((questions.slice(window.questionSlice1,window.questionSlice2)))
      Visibility()
      Button1.innerHTML = (wrongAnswers[0]);    
      wrongAnswerSlice1 = wrongAnswerSlice1 +1
      wrongAnswerSlice2 = wrongAnswerSlice2 +1
      Button2.innerHTML = (wrongAnswers.slice(wrongAnswerSlice1, wrongAnswerSlice2));
      wrongAnswerSlice1 = wrongAnswerSlice1 +1
      wrongAnswerSlice2 = wrongAnswerSlice2 +1    
      Button3.innerHTML = (wrongAnswers.slice(wrongAnswerSlice1, wrongAnswerSlice2));    
      Button4.innerHTML = (correctAnswers.slice(answerSlice1,answerSlice2));    
      Button1.addEventListener("click", function() {
            answerbox.innerHTML = ("Incorrect");
            timeLeft = timeLeft-10; //code to penalize user by deducting time from timer
            window.questionSlice1 = window.questionSlice1 + 1
            window.questionSlice2 = window.questionSlice2 + 1 
            answerSlice1 = answerSlice1 +1
            answerSlice2 = answerSlice2 +1
            quizbox.innerHTML = ((questions.slice(window.questionSlice1,window.questionSlice2)))
            Visibility()
            wrongAnswerSlice1 = wrongAnswerSlice1 +1
            wrongAnswerSlice2 = wrongAnswerSlice2 +1
            Button1.innerHTML = (wrongAnswers.slice(wrongAnswerSlice1, wrongAnswerSlice2));
            wrongAnswerSlice1 = wrongAnswerSlice1 +1
            wrongAnswerSlice2 = wrongAnswerSlice2 +1
            Button2.innerHTML = (wrongAnswers.slice(wrongAnswerSlice1, wrongAnswerSlice2));
            wrongAnswerSlice1 = wrongAnswerSlice1 +1
            wrongAnswerSlice2 = wrongAnswerSlice2 +1
            Button3.innerHTML = (wrongAnswers.slice(wrongAnswerSlice1, wrongAnswerSlice2));    
            Button4.innerHTML = (correctAnswers.slice(answerSlice1,answerSlice2));   
      })
      Button2.addEventListener("click", function () {
            answerbox.innerHTML = ("Incorrect");
            timeLeft = timeLeft-10; //code to penalize user by deducting time from timer
            window.questionSlice1 = window.questionSlice1 + 1
            window.questionSlice2 = window.questionSlice2 + 1 
            answerSlice1 = answerSlice1 +1
            answerSlice2 = answerSlice2 +1
            quizbox.innerHTML = ((questions.slice(window.questionSlice1,window.questionSlice2)))
            Visibility()
            wrongAnswerSlice1 = wrongAnswerSlice1 +1
            wrongAnswerSlice2 = wrongAnswerSlice2 +1
            Button1.innerHTML = (wrongAnswers.slice(wrongAnswerSlice1, wrongAnswerSlice2));
            wrongAnswerSlice1 = wrongAnswerSlice1 +1
            wrongAnswerSlice2 = wrongAnswerSlice2 +1
            Button2.innerHTML = (wrongAnswers.slice(wrongAnswerSlice1, wrongAnswerSlice2));
            wrongAnswerSlice1 = wrongAnswerSlice1 +1
            wrongAnswerSlice2 = wrongAnswerSlice2 +1
            Button3.innerHTML = (wrongAnswers.slice(wrongAnswerSlice1, wrongAnswerSlice2));    
            Button4.innerHTML = (correctAnswers.slice(answerSlice1,answerSlice2));   
      })
      Button3.addEventListener("click", function () {
            answerbox.innerHTML = ("Incorrect");
            timeLeft = timeLeft-10; //code to penalize user by deducting time from timer
            window.questionSlice1 = window.questionSlice1 + 1
            window.questionSlice2 = window.questionSlice2 + 1 
            answerSlice1 = answerSlice1 +1
            answerSlice2 = answerSlice2 +1
            quizbox.innerHTML = ((questions.slice(window.questionSlice1,window.questionSlice2)))
            Visibility()
            wrongAnswerSlice1 = wrongAnswerSlice1 +1
            wrongAnswerSlice2 = wrongAnswerSlice2 +1
            Button1.innerHTML = (wrongAnswers.slice(wrongAnswerSlice1, wrongAnswerSlice2));    
            wrongAnswerSlice1 = wrongAnswerSlice1 +1
            wrongAnswerSlice2 = wrongAnswerSlice2 +1
            Button2.innerHTML = (wrongAnswers.slice(wrongAnswerSlice1, wrongAnswerSlice2));    
            wrongAnswerSlice1 = wrongAnswerSlice1 +1
            wrongAnswerSlice2 = wrongAnswerSlice2 +1
            Button3.innerHTML = (wrongAnswers.slice(wrongAnswerSlice1, wrongAnswerSlice2));    
            Button4.innerHTML = (correctAnswers.slice(answerSlice1,answerSlice2));   
      })
      Button4.addEventListener("click", function () {
            answerbox.innerHTML = ("Correct");
            window.questionSlice1 = window.questionSlice1 + 1
            window.questionSlice2 = window.questionSlice2 + 1 
            answerSlice1 = answerSlice1 +1
            answerSlice2 = answerSlice2 +1
            quizbox.innerHTML = ((questions.slice(window.questionSlice1,window.questionSlice2)))
            Visibility()
            wrongAnswerSlice1 = wrongAnswerSlice1 +1
            wrongAnswerSlice2 = wrongAnswerSlice2 +1
            Button1.innerHTML = (wrongAnswers.slice(wrongAnswerSlice1, wrongAnswerSlice2));    
            wrongAnswerSlice1 = wrongAnswerSlice1 +1
            wrongAnswerSlice2 = wrongAnswerSlice2 +1
            Button2.innerHTML = (wrongAnswers.slice(wrongAnswerSlice1, wrongAnswerSlice2));    
            wrongAnswerSlice1 = wrongAnswerSlice1 +1
            wrongAnswerSlice2 = wrongAnswerSlice2 +1
            Button3.innerHTML = (wrongAnswers.slice(wrongAnswerSlice1, wrongAnswerSlice2));    
            Button4.innerHTML = (correctAnswers.slice(answerSlice1,answerSlice2));   
      })                    
            
      })     
     
      //above is the code for displaying question 1
                  //below is code if user answers question 1 correctly *4th button*
      
      
      let timerEl = document.getElementById("countdown");
      function timerCountdown() {
      //timeleft is global variable so it can be updated outside function when questions are answered incorrectly 
            window.timeLeft = 60;
    
            let timeInterval = setInterval(function() {
            timerEl.innerHTML = timeLeft + " seconds remaining";
            timeLeft--;
    
            if (timeLeft <= 0 || answerSlice2 >4) {
            timerEl.textContent = "Game Over";
            points.push(timeLeft);
            score=[points.slice(0,1)];
            timeInterval === 0;
            //alert (clearInterval(setInterval))
            loadHighScore()
            document.getElementById("button1").style.visibility = "hidden";
            document.getElementById("button2").style.visibility = "hidden";
            document.getElementById("button3").style.visibility = "hidden";
            document.getElementById("button4").style.visibility = "hidden";
            localStorage.clear();
            localStorage.setItem("score", JSON.stringify(score));

            clearInterval(interval);
            
                        }
            
            }, 1000);
      }
      let points=[]
      //above is function that is for timer
    
