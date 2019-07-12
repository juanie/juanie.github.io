// render quiz app ??

$(document).ready(function() {
    $('.quiz-questions').hide();
    $("#nextQuestion").hide();
    $("#quiz-results").hide();


});


// when user clicks submit button new layout with all questions will show 



// store questions and answers

const state = {
    correctAnswers: 0,

    questions: [{
            title: "What year was the first Academy Awards ceremony held?",
            choices: [
                '1924',
                '1929', //correct 1.
                '1935',
                '1941',
            ],


            quesNum: 1,
            correctAns: 1929
        },


        {
            title: "What organization is responsible for the Academy Awards?",
            choices: [
                'screen actors guild',
                'American Film Institute',
                'Academy of Motion Pictures Arts and sciences', //corrct 2.
                'American academy of stage and Screen',
            ],
            quesNum: 2,
            correctAns: "Academy of Motion Pictures Arts and sciences",

        },

        {
            title: "What two actresses tied for Best Actress at the 1969 Academy Awards?",
            choices: [
                'joann woodward and vanessa Redgrave',
                'Liza Minnelli and Genevieve Bujold',
                'Katharine Hepburn and Barbara Streisand', //correct 3.
                'Anne Bancroft  and Gaudry Hepburn',
            ],
            quesNum: 3,
            correctAns: "Katharine Hepburn and Barbara Streisand"
        },
        {
            title: 'What was the first film to win Academy Awards for Best PictureBest DirectorBest ActorBest Actress-and Best Screenplay?',
            choices: [

                'Gone with the wind',
                'It Happened one night', // correct 4
                'Silence of the lambs',
                'One flew over the cuckoo nest',
            ],
            quesNum: 4,
            correctAns: 'It Happened one night',
        },


        {
            title: "Who hosted or co-hosted the Academy Awards 18 times during his career?",
            choices: [
                'Billy Crystal',
                'Bob Hope', //correct 5.
                'Johnny Carson',
                'Whoopie Goldberg',
            ],
            quesNum: 5,
            correctAns: 'Bob Hope'
        },

        {
            title: "What two films have the most Academy Award nominations?",
            choices: [
                'All About Eve and Gone With the Wind',
                'Gone With The Wind and Titanic',
                'Titanic and All About Eve', //correct 6
                'Shakespeare in Love and Forest Gump',
            ],
            quesNum: 6,
            correctAns: 'Titanic and All About Eve',
        },

        {
            title: 'Who has won the most directing Academy Awards?',
            choices: [
                'Frank Capra',
                'Steven Spielberg',
                'William Wyler',
                'John Ford', //correct7
            ],
            quesNum: 7,
            correctAns: 'John Ford'
        },

        {
            title: 'Who is the only woman to win three catogories Oscars',
            choices: [
                'Sofia Coppola',
                'Fran Walsh', //correct 8
                'Meryl Streep',
                'Edith Head',
            ],
            quesNum: 8,
            correctAns: 'Fran Walsh'
        },

        {
            title: 'Who has won the most Academy Awards?',
            choices: [
                'Meryl Streep',
                'Jack Nicholson',
                'Walt Disney', //correct 9
                'Katharine Hepburn',
            ],
            quesNum: 9,
            correctAns: 'Walt Disney',
        },

        {
            title: 'Who was the first woman to win an Academy Award for Best Director?',
            choices: [
                'Kathryn Bigelow', // correct 10
                'Lina Wertmüller',
                'Jane Campion',
                'Sofia Coppola',
            ],
            quesNum: 10,
            correctAns: 'Kathryn Bigelow'
        },
    ],
    feedback: '',
    currentQuestionIndex: 0,
}

$("#start").on("click", function() {
    event.preventDefault();
    $("#start-quiz").hide();
    $(".quiz-questions").show();


    renderQuestion();

});
// will render Question
function renderQuestion() {

    let question = state.questions[state.currentQuestionIndex];

    $(".questionTitle").text(question.title);

    //clear out previous questions and answers
    $(".choices").html("");

    question.choices.forEach(function(choice) {
        $(".choices").append(`<div class="answer-one">
                                  <label>
                                  <input type="radio" name="radio" value="${choice}"/>
                                    <span>${choice}</span>
                                  </label>
                             </div>`);
    });
};

// this will listen for when user selects answer and clicks submits  
$("#submitUserGuess").on("click", function() {

    let checkedAnswer = $('input[name=radio]:checked').val();
    if (checkedAnswer) {

        if (checkedAnswer == (state.questions[state.currentQuestionIndex].correctAns)) {
            $(".feedback").text("That is the correct answer");
            $("#submitUserGuess").hide();

            state.correctAnswers++;
            $(".answeredCorrectly").html(" You have answered " + state.correctAnswers + " correctly");
            $(".questionNumber").html(state.questions[state.currentQuestionIndex].quesNum + " out of 10");
            $("#nextQuestion").show();
            $(".feedback").show();

        } else {
            $(".feedback").text("That is the incorrect answer. The correct answer is" + " " + (state.questions[state.currentQuestionIndex].correctAns));
            $("#submitUserGuess").hide();

            $(".answeredCorrectly").html(" You have answered " + state.correctAnswers + " correctly");
            $(".questionNumber").html("Question " + state.questions[state.currentQuestionIndex].quesNum + " out of 10");
            $("#nextQuestion").show();
            $(".feedback").show();
        }
    } else {
        alert("Please Select An Answer");
    }

});

// user clicks next question and will bring up next series of Q and A

$("#nextQuestion").on("click", function() {
    $(".feedback").hide();
    $("#submitUserGuess").show();
    $("#nextQuestion").hide();
    state.currentQuestionIndex.length;
    state.currentQuestionIndex++;
    if (state.currentQuestionIndex < 10) {
        renderQuestion();
    } else {
        $('.quiz-questions').hide();
        $("#nextQuestion").hide();
        $("#quiz-results").append(`<div id="quiz-results">
                                    <h1> Quiz Results</h1>
                                    <h2> You Got </h2>
                                    ${state.correctAnswers}
                                    <h2> Correct! </h2>
                                    </div>`)
        if (state.correctAnswers > 7) {
            alert("You are a winner!")
        } else {
            alert("Better Luck Next Time!")
        }
        $("#quiz-results").show();


        $("#startOver").on("click", function() {
            $("#start-quiz").show();
            $('.quiz-questions').hide();
            $("#nextQuestion").hide();
            $("#quiz-results").hide();
            state.currentQuestionIndex = 0
        });




    }
});


// user will select answer from radio button 
//have event listener and update index property so it 

// if answer is correct details on answer will return



// if answer is wrong = it will tell user answer is wrong




// stats will be recorded based on how many questions user has gotten correct and what questions user is on



//user will submit to go to next questions


// on last question user can submit to finish quiz and will bring up new layout with quiz results



// results pages- user will see how well he or she did and have option to start over