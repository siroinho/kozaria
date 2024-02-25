
let currentQuestionA = 0;
let currentQuestionB = 0;
let currentQuestionC = 0;
let currentQuestionD = 0;
let userAnswersA = [];
let userAnswersB = [];
let userAnswersC = [];
let userAnswersD = [];





 // 퀴즈 데이터를 로드하는 함수 수정
function loadQuestion(data, questionTextElem, optionsListElem, koreanMeaningElem, quizType) {
            let currentQuestion;

            if (quizType === 'A') {
                currentQuestion = currentQuestionA;
            } else if (quizType === 'B') {
                currentQuestion = currentQuestionB;
            } else if (quizType === 'C') {
                currentQuestion = currentQuestionC;
            } else if (quizType === 'D') {
                currentQuestion = currentQuestionD;
            }

            questionTextElem.textContent = data[currentQuestion].question;
            const koreanMeaningText = data[currentQuestion].koreanMeaning;
            koreanMeaningElem.textContent = koreanMeaningText ? ` ${koreanMeaningText}` : '';

            optionsListElem.innerHTML = '';

            for (let i = 0; i < data[currentQuestion].options.length; i++) {
        const option = document.createElement('li');
        option.textContent = data[currentQuestion].options[i];
        updateMeaning(quizType, false);
        
        option.classList.remove('correct-answer_a', 'wrong-answer', 'selected-answer');

        option.addEventListener('click', function () {
        if (quizType === 'A') {
            userAnswersA[currentQuestionA] = data[currentQuestionA].options[i];
        } else if (quizType === 'B') {
            userAnswersB[currentQuestionB] = data[currentQuestionB].options[i];
        } else if (quizType === 'C') {
            userAnswersC[currentQuestionC] = data[currentQuestionC].options[i];
        } else if (quizType === 'D') {
            userAnswersD[currentQuestionD] = data[currentQuestionD].options[i];
        }
        loadQuestion(data, questionTextElem, optionsListElem, koreanMeaningElem, quizType);
    });

            if (quizType === 'A' && userAnswersA[currentQuestionA] === data[currentQuestionA].options[i]) {
                option.classList.add('selected-answer');
                if (data[currentQuestionA].options[i] === data[currentQuestionA]) {
                    option.classList.add('correct-answer_a');
                } else {
                    option.classList.add('wrong-answer');
                }
            } else if (quizType === 'B' && userAnswersB[currentQuestionB] === data[currentQuestionB].options[i]) {
                option.classList.add('selected-answer');
                if (data[currentQuestionB].options[i] === data[currentQuestionB]) {
                    option.classList.add('correct-answer_b');
                } else {
                    option.classList.add('wrong-answer');
                }
            } else if (quizType === 'C' && userAnswersC[currentQuestionC] === data[currentQuestionC].options[i]) {
                option.classList.add('selected-answer');
                if (data[currentQuestionC].options[i] === data[currentQuestionC]) {
                    option.classList.add('correct-answer_c');
                } else {
                    option.classList.add('wrong-answer');
                }
            }
            else if (quizType === 'D' && userAnswersD[currentQuestionD] === data[currentQuestionD].options[i]) {
                option.classList.add('selected-answer');
                if (data[currentQuestionD].options[i] === data[currentQuestionD]) {
                    option.classList.add('correct-answer_d');
                } else {
                    option.classList.add('wrong-answer');
                }
            }
                optionsListElem.appendChild(option);
            }
        }

        


        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
        
        // 퀴즈 데이터 배열 섞기
        shuffleArray(kanjiQuizDataA);
        shuffleArray(kanjiQuizDataB);
        shuffleArray(kanjiQuizDataC);
        shuffleArray(kanjiQuizDataD);



        // 한자 쓰기 퀴즈 질문 로드
        loadQuestion(kanjiQuizDataA,
            document.querySelector('.category-a .question'),
            document.querySelector('.category-a .options'),
            document.querySelector('.category-a .korean-meaning'),
            'A'
        );

        // 한자 쓰기 퀴즈 질문 로드
        loadQuestion(kanjiQuizDataB,
            document.querySelector('.category-b .questionb'),
            document.querySelector('.category-b .optionsb'),
            document.querySelector('.category-b .korean-meaningb'),
            'B'
        );

        // 한자 쓰기 퀴즈 질문 로드
        loadQuestion(kanjiQuizDataC,
            document.querySelector('.category-c .questionc'),
            document.querySelector('.category-c .optionsc'),
            document.querySelector('.category-c .korean-meaningc'),
            'C'
        );
        // 한자 쓰기 퀴즈 질문 로드
        loadQuestion(kanjiQuizDataD,
            document.querySelector('.category-d .questiond'),
            document.querySelector('.category-d .optionsd'),
            document.querySelector('.category-d .korean-meaningd'),
            'D'
        );
// --------------------------------



// 뜻보기 함수
function updateMeaning(quizType, shouldShow) {
    let koreanMeaningElem;
    
    if (quizType === 'A') {
        koreanMeaningElem = document.querySelector('.category-a .korean-meaning');
        koreanMeaningElem.textContent = shouldShow ? kanjiQuizDataA[currentQuestionA].koreanMeaning : '';
    } else if (quizType === 'B') {
        koreanMeaningElem = document.querySelector('.category-b .korean-meaningb');
        koreanMeaningElem.textContent = shouldShow ? kanjiQuizDataB[currentQuestionB].koreanMeaning : '';
    } else if (quizType === 'C') {
        koreanMeaningElem = document.querySelector('.category-c .korean-meaningc');
        koreanMeaningElem.textContent = shouldShow ? kanjiQuizDataC[currentQuestionC].koreanMeaning : '';
    } else if (quizType === 'D') {
        koreanMeaningElem = document.querySelector('.category-d .korean-meaningd');
        koreanMeaningElem.textContent = shouldShow ? kanjiQuizDataD[currentQuestionD].koreanMeaning : '';
    }
}

        document.addEventListener('DOMContentLoaded', function () {
            // 페이지 로드 시 초기화 함수 호출
            updateMeaning('A', false);
            updateMeaning('B', false);
            updateMeaning('C', false);
            updateMeaning('D', false);
            updateRemainingQuestionCount('A'); // Quiz A
            updateRemainingQuestionCount('B');
            updateRemainingQuestionCount('C');
            updateRemainingQuestionCount('D');
        });

        // 뜻 보기 버튼 클릭 시 호출되는 함수
        function showMeaning(quizType) {
            updateMeaning(quizType, true);
        }

        // 뜻 숨기기 버튼 클릭 시 호출되는 함수
        function hideMeaning(quizType) {
            updateMeaning(quizType, false);
        }
// -----------------------------


// 이전버튼/다음버튼
    document.addEventListener('DOMContentLoaded', function () {
        const nextButtonA = document.querySelector('.category-a .slide_btn_next');
        const prevButtonA = document.querySelector('.category-a .slide_btn_prev');

        const nextButtonB = document.querySelector('.category-b .slide_btn_next');
        const prevButtonB = document.querySelector('.category-b .slide_btn_prev');

        const nextButtonC = document.querySelector('.category-c .slide_btn_next');
        const prevButtonC = document.querySelector('.category-c .slide_btn_prev');

        const nextButtonD = document.querySelector('.category-d .slide_btn_next');
        const prevButtonD = document.querySelector('.category-d .slide_btn_prev');

        nextButtonA.addEventListener('click', function () {
            handleNextClick('A');
        });

        prevButtonA.addEventListener('click', function () {
            handlePrevClick('A');
        });

        nextButtonB.addEventListener('click', function () {
            handleNextClick('B');
        });

        prevButtonB.addEventListener('click', function () {
            handlePrevClick('B');
        });

        nextButtonC.addEventListener('click', function () {
            handleNextClick('C');
        });

        prevButtonC.addEventListener('click', function () {
            handlePrevClick('C');
        });

        nextButtonD.addEventListener('click', function () {
            handleNextClick('D');
        });

        prevButtonD.addEventListener('click', function () {
            handlePrevClick('D');
        });
        });

    function handleNextClick(quizType) {
        if (quizType === 'A') {
            if (currentQuestionA < kanjiQuizDataA.length - 1) {
                currentQuestionA++;
                updateRemainingQuestionCount('A');
                loadQuestion(kanjiQuizDataA,
                    document.querySelector('.category-a .question'),
                    document.querySelector('.category-a .options'),
                    document.querySelector('.category-a .korean-meaning'),
                    'A'
                );
                updateMeaning('A', false);
            }
        } else if (quizType === 'B') {
            if (currentQuestionB < kanjiQuizDataB.length - 1) {
                currentQuestionB++;
                updateRemainingQuestionCount('B');
                loadQuestion(kanjiQuizDataB,
                    document.querySelector('.category-b .questionb'),
                    document.querySelector('.category-b .optionsb'),
                    document.querySelector('.category-b .korean-meaningb'),
                    'B'
                );
                updateMeaning('B', false);
            }
        } else if (quizType === 'C') {
            if (currentQuestionC < kanjiQuizDataC.length - 1) {
                currentQuestionC++;
                updateRemainingQuestionCount('C');
                loadQuestion(kanjiQuizDataC,
                    document.querySelector('.category-c .questionc'),
                    document.querySelector('.category-c .optionsc'),
                    document.querySelector('.category-c .korean-meaningc'),
                    'C'
                );
                updateMeaning('C', false);
            }
        } else if (quizType === 'D') {
            if (currentQuestionD < kanjiQuizDataC.length - 1) {
                currentQuestionD++;
                updateRemainingQuestionCount('D');
                loadQuestion(kanjiQuizDataD,
                    document.querySelector('.category-d .questiond'),
                    document.querySelector('.category-d .optionsd'),
                    document.querySelector('.category-d .korean-meaningd'),
                    'D'
                );
                updateMeaning('D', false);
            }
        }
        updateButtonVisibility();
        loadComboBoxQuestion();
        // saveUserProgress(quizType);
    }

    function handlePrevClick(quizType) {
        if (quizType === 'A') {
            if (currentQuestionA > 0) {
                currentQuestionA--;
                updateRemainingQuestionCount('A');
                loadQuestion(kanjiQuizDataA,
                    document.querySelector('.category-a .question'),
                    document.querySelector('.category-a .options'),
                    document.querySelector('.category-a .korean-meaning'),
                    'A'
                );
                updateMeaning('A', false);
            }
        } else if (quizType === 'B') {
            if (currentQuestionB > 0) {
                currentQuestionB--;
                updateRemainingQuestionCount('B');
                loadQuestion(kanjiQuizDataB,
                    document.querySelector('.category-b .questionb'),
                    document.querySelector('.category-b .optionsb'),
                    document.querySelector('.category-b .korean-meaningb'),
                    'B'
                );
                updateMeaning('B', false);
            }
        } else if (quizType === 'C') {
            if (currentQuestionC > 0) {
                currentQuestionC--;
                updateRemainingQuestionCount('C');
                loadQuestion(kanjiQuizDataC,
                    document.querySelector('.category-c .questionc'),
                    document.querySelector('.category-c .optionsc'),
                    document.querySelector('.category-c .korean-meaningc'),
                    'C'
                );
                updateMeaning('C', false);
            }
        }
        else if (quizType === 'D') {
            if (currentQuestionD > 0) {
                currentQuestionD--;
                updateRemainingQuestionCount('D');
                loadQuestion(kanjiQuizDataD,
                    document.querySelector('.category-d .questiond'),
                    document.querySelector('.category-d .optionsd'),
                    document.querySelector('.category-d .korean-meaningd'),
                    'D'
                );
                updateMeaning('D', false);
            }
        }
        updateButtonVisibility();
        loadComboBoxQuestion();
        // saveUserProgress(quizType);
    }

    function updateButtonVisibility() {
        const prevButtonA = document.querySelector('.category-a .slide_btn_prev');
        const nextButtonA = document.querySelector('.category-a .slide_btn_next');
        const prevButtonB = document.querySelector('.category-b .slide_btn_prev');
        const nextButtonB = document.querySelector('.category-b .slide_btn_next');
        const prevButtonC = document.querySelector('.category-c .slide_btn_prev');
        const nextButtonC = document.querySelector('.category-c .slide_btn_next');
        const prevButtonD = document.querySelector('.category-d .slide_btn_prev');
        const nextButtonD = document.querySelector('.category-d .slide_btn_next');

        // Check and update visibility for Quiz A buttons
        prevButtonA.disabled = currentQuestionA === 0;
        nextButtonA.disabled = currentQuestionA === kanjiQuizDataA.length - 1;

        // Check and update visibility for Quiz B buttons
        prevButtonB.disabled = currentQuestionB === 0;
        nextButtonB.disabled = currentQuestionB === kanjiQuizDataB.length - 1;

        prevButtonC.disabled = currentQuestionC === 0;
        nextButtonC.disabled = currentQuestionC === kanjiQuizDataC.length - 1;

        prevButtonD.disabled = currentQuestionD === 0;
        nextButtonD.disabled = currentQuestionD === kanjiQuizDataD.length - 1;

        
    }
// -----------------------------

// 다음 이전 버튼 클릭시 콤보박스이동
function loadComboBoxQuestion() {
    const questionNumberSelectA = document.querySelector('.question-number-a');
    const questionNumberSelectB = document.querySelector('.question-number-b');
    const questionNumberSelectC = document.querySelector('.question-number-c');
    const questionNumberSelectD = document.querySelector('.question-number-d');



    questionNumberSelectA.selectedIndex = currentQuestionA;
    questionNumberSelectB.selectedIndex = currentQuestionB;
    questionNumberSelectC.selectedIndex = currentQuestionC;
    questionNumberSelectD.selectedIndex = currentQuestionD;


}

// 콤보박스 문제 클릭시 이동
document.addEventListener('DOMContentLoaded', function () {
    const questionNumberSelectA = document.querySelector('.question-number-a');
    const questionNumberSelectB = document.querySelector('.question-number-b');
    const questionNumberSelectC = document.querySelector('.question-number-c');
    const questionNumberSelectD = document.querySelector('.question-number-d');


    // 문제 번호 드롭다운 메뉴를 채우는 함수
    function populateQuestionNumberSelect(quizData, selectElement) {
        for (let i = 0; i < quizData.length; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.text = `문제 ${i + 1}`;
            selectElement.appendChild(option);
        }
    }

    // 문제 번호 드롭다운 메뉴 이벤트 리스너 추가
    questionNumberSelectA.addEventListener('change', function () {
        handleQuestionNumberChange(questionNumberSelectA.selectedIndex, 'A');
    });

    questionNumberSelectB.addEventListener('change', function () {
        handleQuestionNumberChange(questionNumberSelectB.selectedIndex, 'B');
    });

    questionNumberSelectC.addEventListener('change', function () {
        handleQuestionNumberChange(questionNumberSelectC.selectedIndex, 'C');
    });

    questionNumberSelectD.addEventListener('change', function () {
        handleQuestionNumberChange(questionNumberSelectD.selectedIndex, 'D');
    });

    function handleQuestionNumberChange(selectedIndex, quizType) {
    if (quizType === 'A') {
        currentQuestionA = selectedIndex;
        loadQuestion(kanjiQuizDataA,
            document.querySelector('.category-a .question'),
            document.querySelector('.category-a .options'),
            document.querySelector('.category-a .korean-meaning'),
            'A'
        );
        updateMeaning('A', false);
        updateRemainingQuestionCount('A');
    } else if (quizType === 'B') {
        currentQuestionB = selectedIndex;
        loadQuestion(kanjiQuizDataB,
            document.querySelector('.category-b .questionb'),
            document.querySelector('.category-b .optionsb'),
            document.querySelector('.category-b .korean-meaningb'),
            'B'
        );
        updateMeaning('B', false);
        updateRemainingQuestionCount('B');
    } else if (quizType === 'C') {
        currentQuestionC = selectedIndex;
        loadQuestion(kanjiQuizDataC,
            document.querySelector('.category-c .questionc'),
            document.querySelector('.category-c .optionsc'),
            document.querySelector('.category-c .korean-meaningc'),
            'C'
        );
        updateMeaning('C', false);
        updateRemainingQuestionCount('C');
    } else if (quizType === 'D') {
        currentQuestionD = selectedIndex;
        loadQuestion(kanjiQuizDataD,
            document.querySelector('.category-d .questiond'),
            document.querySelector('.category-d .optionsd'),
            document.querySelector('.category-d .korean-meaningd'),
            'D'
        );
        updateMeaning('D', false);
        updateRemainingQuestionCount('D');
    }
    updateButtonVisibility();
}



    // Quiz A의 문제 번호 드롭다운 메뉴 채우기
    populateQuestionNumberSelect(kanjiQuizDataA, questionNumberSelectA);

    // Quiz B의 문제 번호 드롭다운 메뉴 채우기
    populateQuestionNumberSelect(kanjiQuizDataB, questionNumberSelectB);

        // Quiz B의 문제 번호 드롭다운 메뉴 채우기
    populateQuestionNumberSelect(kanjiQuizDataC, questionNumberSelectC);

    // Quiz B의 문제 번호 드롭다운 메뉴 채우기
    populateQuestionNumberSelect(kanjiQuizDataD, questionNumberSelectD);

});

// 페이지 로드 시 loadComboBoxQuestion 호출
document.addEventListener('DOMContentLoaded', function () {
    loadComboBoxQuestion();
});
// -----------------------------

// 총문제 남은문제
document.getElementById('totalQuestionA').textContent = `총문제 ${kanjiQuizDataA.length} 문제`;
document.getElementById('totalQuestionB').textContent = `총문제 ${kanjiQuizDataB.length} 문제`;
document.getElementById('totalQuestionC').textContent = `총문제 ${kanjiQuizDataC.length} 문제`;
document.getElementById('totalQuestionD').textContent = `총문제 ${kanjiQuizDataD.length} 문제`;

function updateRemainingQuestionCount(quizType) {
    const remainingQuestionElem = document.getElementById(`remainingQuestion${quizType}`);
    let totalQuestions, currentQuestion;

    switch (quizType) {
        case 'A':
            totalQuestions = kanjiQuizDataA.length;
            currentQuestion = currentQuestionA;
            break;
        case 'B':
            totalQuestions = kanjiQuizDataB.length;
            currentQuestion = currentQuestionB;
            break;
        case 'C':
            totalQuestions = kanjiQuizDataC.length;
            currentQuestion = currentQuestionC;
            break;
        case 'D':
            totalQuestions = kanjiQuizDataD.length;
            currentQuestion = currentQuestionD;
            break;
        default:
            console.error(`Invalid quiz type: ${quizType}`);
            return;
    }

    const remainingCount = totalQuestions - currentQuestion;
    remainingQuestionElem.textContent = `남은문제 ${remainingCount - 1} 문제`;
}

// -----------------------------

// 결과보기
function showTotalResulta() {
    const resultContainerA = document.querySelector('#result-container_a');
    const questionContainerA = document.querySelector('.category-a');
    const goBackBtn = document.querySelector('.goBackBtn_a');
    const resetBtn = document.querySelector('.resetBtn_a');
    const userAnswerSection = document.getElementById('user-answer_a');
    const questionNumberSelectA = document.querySelector('.question-number-a');

    // 현재 활성화된 퀴즈 유형을 결정
    const kanjiQuizData = kanjiQuizDataA;
    const userAnswers = userAnswersA;

    // 질문 컨테이너를 숨김
    questionContainerA.style.display = 'none';

    // 결과 컨테이너를 표시
    resultContainerA.classList.add('show');
    resultContainerA.style.opacity = 1;
    resultContainerA.style.display = 'block';

    // "돌아가기" 및 "초기화" 버튼을 표시
    goBackBtn.style.display = 'block';
    resetBtn.style.display = 'block';
    questionNumberSelectA.style.display = 'none';

   // '문제 번호: 사용자 답안 (정답)' 형식의 문자열 배열 생성
    const userAnswerTextArray = kanjiQuizData.map((quiz, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer !== null && userAnswer === quiz.correctAnswer;
        const symbol = userAnswer !== null ? (isCorrect ? '정답' : 'X') : '미응답';
        return `<p>문제 ${index + 1}: ${symbol}</p>`;
    });

    const userAnswerText = userAnswerTextArray.join('');
    userAnswerSection.innerHTML = userAnswerText;
}
function showTotalResultb() {
    const resultContainerB = document.querySelector('#result-container_b');
    const questionContainerB = document.querySelector('.category-b');
    const goBackBtn = document.querySelector('.goBackBtn_b');
    const resetBtn = document.querySelector('.resetBtn_b');
    const userAnswerSection = document.getElementById('user-answer_b');
    const questionNumberSelectB = document.querySelector('.question-number-b');


    // 현재 활성화된 퀴즈 유형을 결정
    const kanjiQuizData = kanjiQuizDataB;
    const userAnswers = userAnswersB;
    // 질문 컨테이너를 숨김
    questionContainerB.style.display = 'none';
    questionContainerB.style.display = 'none';
    questionNumberSelectB.style.display = 'none';
    // 결과 컨테이너를 표시
    resultContainerB.classList.add('show');
    resultContainerB.style.opacity = 1;
    resultContainerB.style.display = 'block';

    // "돌아가기" 및 "초기화" 버튼을 표시
    goBackBtn.style.display = 'block';
    resetBtn.style.display = 'block';

  // '문제 번호: 사용자 답안 (정답)' 형식의 문자열 배열 생성
        const userAnswerTextArray = kanjiQuizData.map((quiz, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer !== null && userAnswer === quiz.correctAnswer;
        const symbol = userAnswer !== null ? (isCorrect ? '정답' : 'X') : '미응답';
        return `<p>문제 ${index + 1}: ${symbol}</p>`;
    });

    const userAnswerText = userAnswerTextArray.join('');
    userAnswerSection.innerHTML = userAnswerText;
}
function showTotalResultc() {
    const resultContainerC = document.querySelector('#result-container_c');
    const questionContainerC = document.querySelector('.category-c');
    const goBackBtn = document.querySelector('.goBackBtn_c');
    const resetBtn = document.querySelector('.resetBtn_c');
    const userAnswerSection = document.getElementById('user-answer_c');
    const questionNumberSelectC = document.querySelector('.question-number-c');


    // 현재 활성화된 퀴즈 유형을 결정
    const kanjiQuizData = kanjiQuizDataC;
    const userAnswers = userAnswersC;
    // 질문 컨테이너를 숨김
    questionContainerC.style.display = 'none';
    questionContainerC.style.display = 'none';
    questionNumberSelectC.style.display = 'none';
    // 결과 컨테이너를 표시
    resultContainerC.classList.add('show');
    resultContainerC.style.opacity = 1;
    resultContainerC.style.display = 'block';

    // "돌아가기" 및 "초기화" 버튼을 표시
    goBackBtn.style.display = 'block';
    resetBtn.style.display = 'block';

  // '문제 번호: 사용자 답안 (정답)' 형식의 문자열 배열 생성
        const userAnswerTextArray = kanjiQuizData.map((quiz, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer !== null && userAnswer === quiz.correctAnswer;
        const symbol = userAnswer !== null ? (isCorrect ? '정답' : 'X') : '미응답';
        return `<p>문제 ${index + 1}: ${symbol}</p>`;
    });

    const userAnswerText = userAnswerTextArray.join('');
    userAnswerSection.innerHTML = userAnswerText;
}
function showTotalResultd() {
    const resultContainerD = document.querySelector('#result-container_d');
    const questionContainerD = document.querySelector('.category-d');
    const resultAreaD = document.querySelector('.result-area-d');
    const goBackBtn = document.querySelector('.goBackBtn_d');
    const resetBtn = document.querySelector('.resetBtn_d');
    const userAnswerSection = document.getElementById('user-answer_d');
    const questionNumberSelectD = document.querySelector('.question-number-d');


    // 현재 활성화된 퀴즈 유형을 결정
    const activeQuizType = 'D';
    const kanjiQuizData = kanjiQuizDataD;
    const userAnswers = userAnswersD;
    // 질문 컨테이너를 숨김
    questionContainerD.style.display = 'none';
    questionContainerD.style.display = 'none';
    questionNumberSelectD.style.display = 'none';
    // 결과 컨테이너를 표시
    resultContainerD.classList.add('show');
    resultContainerD.style.opacity = 1;
    resultContainerD.style.display = 'block';

    // "돌아가기" 및 "초기화" 버튼을 표시
    goBackBtn.style.display = 'block';
    resetBtn.style.display = 'block';

  // '문제 번호: 사용자 답안 (정답)' 형식의 문자열 배열 생성
        const userAnswerTextArray = kanjiQuizData.map((quiz, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer !== null && userAnswer === quiz.correctAnswer;
        const symbol = userAnswer !== null ? (isCorrect ? '정답' : 'X') : '미응답';
        return `<p>문제 ${index + 1}: ${symbol}</p>`;
    });

    const userAnswerText = userAnswerTextArray.join('');
    userAnswerSection.innerHTML = userAnswerText;
}
// -----------------------------


// 문제로돌아가기
function goBackToQuiza() {
            const resultContainerA = document.querySelector('#result-container_a');
            const questionContainerA = document.querySelector('.category-a');
            const goBackBtnA = document.querySelector('.goBackBtn_a');
            const resetBtnA = document.querySelector('.resetBtn_a');
            const questionNumberSelectA = document.querySelector('.question-number-a');

            // Hide result containers
            resultContainerA.style.display = 'none';

            // Show question containers
            questionContainerA.style.display = 'block';

            questionNumberSelectA.style.display = 'block';

            // Show "문제풀기" button
            goBackBtnA.style.display = 'none';
            resetBtnA.style.display = 'none';
        }
function goBackToQuizb() {
            const resultContainerB = document.querySelector('#result-container_b');
            const questionContainerB = document.querySelector('.category-b');
            const goBackBtnB = document.querySelector('.goBackBtn_b');
            const resetBtnB = document.querySelector('.resetBtn_b');
            const questionNumberSelectB = document.querySelector('.question-number-b');

            // Hide result containers
            resultContainerB.style.display = 'none';
            // Show question containers
            questionContainerB.style.display = 'block';

            questionNumberSelectB.style.display = 'block';

            // Show "문제풀기" button
            goBackBtnB.style.display = 'none';
            resetBtnB.style.display = 'none';
        }
function goBackToQuizc() {
            const resultContainerC = document.querySelector('#result-container_c');
            const questionContainerC = document.querySelector('.category-c');
            const goBackBtnC = document.querySelector('.goBackBtn_c');
            const resetBtnC = document.querySelector('.resetBtn_c');
            const questionNumberSelectC = document.querySelector('.question-number-c');

            // Hide result containers
            resultContainerC.style.display = 'none';
            // Show question containers
            questionContainerC.style.display = 'block';

            questionNumberSelectC.style.display = 'block';

            // Show "문제풀기" button
            goBackBtnC.style.display = 'none';
            resetBtnC.style.display = 'none';
        }
function goBackToQuizd() {
            const resultContainerD = document.querySelector('#result-container_d');
            const questionContainerD = document.querySelector('.category-d');
            const goBackBtnD = document.querySelector('.goBackBtn_d');
            const resetBtnD = document.querySelector('.resetBtn_d');
            const questionNumberSelectD = document.querySelector('.question-number-d');

            // Hide result containers
            resultContainerD.style.display = 'none';
            // Show question containers
            questionContainerD.style.display = 'block';

            questionNumberSelectD.style.display = 'block';

            // Show "문제풀기" button
            goBackBtnD.style.display = 'none';
            resetBtnD.style.display = 'none';
}
// -----------------------------
// 초기화 버튼
function resetAnswersa() {

    const isConfirmed = confirm("정말 초기화 하시겠습니까?");

    if (isConfirmed) {
        const goBackBtnA = document.querySelector('.goBackBtn_a');
        const resetBtnA = document.querySelector('.resetBtn_a');
        const questionNumberSelectA = document.querySelector('.question-number-a');
        goBackBtnA.style.display = 'none';
        resetBtnA.style.display = 'none';
        questionNumberSelectA.style.display = 'block';

        // Reset user answers and current question index for Quiz A
        currentQuestionA = 0;
        userAnswersA = [];

        // Reset user answers and current question index for Quiz B

        // Load the first question for Quiz A
        loadQuestion(kanjiQuizDataA,
            document.querySelector('.category-a .question'),
            document.querySelector('.category-a .options'),
            document.querySelector('.category-a .korean-meaning'),
            'A'
        );

     // 버튼 가시성 업데이트
        updateButtonVisibility();

// 콤보박스에 문제 번호 로드
            loadComboBoxQuestion();

// 퀴즈 A와 퀴즈 B의 남은 문제 수 초기화
updateRemainingQuestionCount('A');

    // Hide the result container
    const resultContainerA = document.querySelector('#result-container_a');
    resultContainerA.style.display = 'none';

    // Show the question container
    const questionContainerA = document.querySelector('.category-a');
    questionContainerA.style.display = 'block';
}
}

function resetAnswersb() {
    const isConfirmed = confirm("정말 초기화 하시겠습니까?");

    if (isConfirmed) {
            const goBackBtnB = document.querySelector('.goBackBtn_b');
            const resetBtnB = document.querySelector('.resetBtn_b')
            const questionNumberSelectB = document.querySelector('.question-number-b');

            goBackBtnB.style.display = 'none';
            resetBtnB.style.display = 'none';
            questionNumberSelectB.style.display = 'block';


    // Reset user answers and current question index for Quiz B
    currentQuestionB = 0;
    userAnswersB = [];


    // Load the first question for Quiz B
    loadQuestion(kanjiQuizDataB,
        document.querySelector('.category-b .questionb'),
        document.querySelector('.category-b .optionsb'),
        document.querySelector('.category-b .korean-meaningb'),
        'B'
    );


     // 버튼 가시성 업데이트
        updateButtonVisibility();

// 콤보박스에 문제 번호 로드
            loadComboBoxQuestion();

// 퀴즈 A와 퀴즈 B의 남은 문제 수 초기화
updateRemainingQuestionCount('B');

    // Hide the result container
    const resultContainerB = document.querySelector('#result-container_b');
    resultContainerB.style.display = 'none';

    // Show the question container
    const questionContainerB = document.querySelector('.category-b');
    questionContainerB.style.display = 'block';
}
}

function resetAnswersc() {
    const isConfirmed = confirm("정말 초기화 하시겠습니까?");

    if (isConfirmed) {
            const goBackBtnC = document.querySelector('.goBackBtn_c');
            const resetBtnC = document.querySelector('.resetBtn_c')
            const questionNumberSelectC = document.querySelector('.question-number-c');

            goBackBtnC.style.display = 'none';
            resetBtnC.style.display = 'none';
            questionNumberSelectC.style.display = 'block';


    // Reset user answers and current question index for Quiz B
    currentQuestionC = 0;
    userAnswersC = [];


    // Load the first question for Quiz B
    loadQuestion(kanjiQuizDataC,
        document.querySelector('.category-c .questionc'),
        document.querySelector('.category-c .optionsc'),
        document.querySelector('.category-c .korean-meaningc'),
        'C'
    );


     // 버튼 가시성 업데이트
        updateButtonVisibility();

// 콤보박스에 문제 번호 로드
            loadComboBoxQuestion();

// 퀴즈 A와 퀴즈 B의 남은 문제 수 초기화
updateRemainingQuestionCount('C');

    // Hide the result container
    const resultContainerC = document.querySelector('#result-container_c');
    resultContainerC.style.display = 'none';

    // Show the question container
    const questionContainerC = document.querySelector('.category-c');
    questionContainerC.style.display = 'block';
}
}

function resetAnswersd() {
    const isConfirmed = confirm("정말 초기화 하시겠습니까?");

    if (isConfirmed) {
            const goBackBtnD = document.querySelector('.goBackBtn_d');
            const resetBtnD = document.querySelector('.resetBtn_d')
            const questionNumberSelectD = document.querySelector('.question-number-d');

            goBackBtnD.style.display = 'none';
            resetBtnD.style.display = 'none';
            questionNumberSelectD.style.display = 'block';


    // Reset user answers and current question index for Quiz B
    currentQuestionD = 0;
    userAnswersD = [];


    // Load the first question for Quiz B
    loadQuestion(kanjiQuizDataD,
        document.querySelector('.category-d .questiond'),
        document.querySelector('.category-d .optionsd'),
        document.querySelector('.category-d .korean-meaningd'),
        'D'
    );


     // 버튼 가시성 업데이트
        updateButtonVisibility();

// 콤보박스에 문제 번호 로드
            loadComboBoxQuestion();

// 퀴즈 A와 퀴즈 B의 남은 문제 수 초기화
updateRemainingQuestionCount('D');

    // Hide the result container
    const resultContainerD = document.querySelector('#result-container_d');
    resultContainerD.style.display = 'none';

    // Show the question container
    const questionContainerD = document.querySelector('.category-d');
    questionContainerD.style.display = 'block';
}
}

// -----------------------------
// 슬라이드
document.addEventListener("DOMContentLoaded", function() {
    const buttonLeft = document.querySelector('.button-left');
    const buttonRight = document.querySelector('.button-right');
    const mainSections = document.querySelectorAll('main');

let currentIndex = 0;

// 초기에 첫 번째 섹션만 보이도록 설정
mainSections[currentIndex].classList.add('active');

buttonLeft.addEventListener('click', function() {
    if (currentIndex > 0) {
        mainSections[currentIndex].classList.remove('active');
        currentIndex--;
        mainSections[currentIndex].classList.add('active');
    }
});

buttonRight.addEventListener('click', function() {
    if (currentIndex < mainSections.length - 1) {
        mainSections[currentIndex].classList.remove('active');
        currentIndex++;
        mainSections[currentIndex].classList.add('active');
    }
});


});


const animationMove = function(selector){
    const target = document.querySelector(selector);
    const browserScrollY = window.pageYOffset;
    const targetScorllY = target.getBoundingClientRect().top + browserScrollY - 220;
    window.scrollTo({ top: targetScorllY, behavior: 'smooth' });


}

const scrollMoveE1 =document.querySelectorAll("[data-animation-scroll='true']");
console.log(scrollMoveE1);
for(let i = 0; i< scrollMoveE1.length; i++){
    scrollMoveE1[i].addEventListener('click', function(e){
    animationMove(this.dataset.target);
    });
}







