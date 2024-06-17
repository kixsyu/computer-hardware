function toggleIntro() {
    var introText = document.getElementById('intro-text');
    if (introText.style.display === 'none') {
        introText.style.display = 'block';
    } else {
        introText.style.display = 'none';
    }
}

function toggleBinaryInfo() {
    var info = document.getElementById('binary-info');
    if (info.style.display === 'none') {
        info.style.display = 'block';
    } else {
        info.style.display = 'none';
    }

    const image = document.getElementById('myImage');

    // Example: Change image source on button click
    const changeImageButton = document.createElement('button');
    changeImageButton.innerText = 'Change Image';
    changeImageButton.onclick = function() {
        image.src = 'https://www.totalphase.com/media/blog/2022/08/Intel-CPU1.jpg';
    };

    document.body.appendChild(changeImageButton);
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    
    const myQuestions = [
        {
            question: "What does CPU stand for?",
            answers: {
                a: "Central Processing Unit",
                b: "Central Process Unit",
                c: "Computer Personal Unit"
            },
            correctAnswer: "a"
        },
        {
            question: "What is the main circuit board of a computer called?",
            answers: {
                a: "Hard Drive",
                b: "Motherboard",
                c: "Processor"
            },
            correctAnswer: "b"
        },
        {
            question: "Which device is used to store data permanently?",
            answers: {
                a: "RAM",
                b: "SSD",
                c: "ROM"
            },
            correctAnswer: "b"
        }
    ];

    function buildQuiz() {
        const output = [];

        myQuestions.forEach(
            (currentQuestion, questionNumber) => {
                const answers = [];

                for (letter in currentQuestion.answers) {
                    answers.push(
                        `<label>
                            <input type="radio" name="question${questionNumber}" value="${letter}">
                            ${letter} : ${currentQuestion.answers[letter]}
                        </label>`
                    );
                }

                output.push(
                    `<div class="question"> ${currentQuestion.question} </div>
                    <div class="answers"> ${answers.join('')} </div>`
                );
            }
        );

        quizContainer.innerHTML = output.join('');
    }

    function showResults() {
        const answerContainers = quizContainer.querySelectorAll('.answers');

        let numCorrect = 0;

        myQuestions.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;
                answerContainers[questionNumber].style.color = 'green';
            } else {
                answerContainers[questionNumber].style.color = 'red';
            }
        });

        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    buildQuiz();

    submitButton.addEventListener('click', showResults);

}
