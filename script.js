// script.js - نظام عرض الأسئلة المحسن مع إصلاح جميع المشاكل

// بيانات الأسئلة من ملف Excel - معدلة بالكامل
const questionsData = {
    "QUES1": {
        "q1": {
            "p1": {
                count: 40,
                answers: ["C", "C", "B", "C", "A", "D", "A", "A", "D", "D", "C", "D", "D", "C", "C", "C", "B", "A", "B", "A", "C", "A", "A", "A", "C", "A", "D", "D", "C", "B", "A", "C", "D", "D", "B", "C", "D", "A", "C", "C"]
            },
            "p2": {
                count: 30,
                answers: ["A", "D", "C", "A", "B", "A", "A", "B", "B", "C", "B", "C", "B", "B", "C", "D", "B", "A", "A", "C", "C", "A", "A", "B", "B", "D", "A", "B", "A", "A"]
            },
            "p3": {
                count: 40,
                answers: ["B", "D", "C", "B", "C", "D", "C", "A", "B", "D", "C", "C", "D", "B", "D", "D", "C", "C", "A", "D", "B", "A", "B", "C", "B", "C", "A", "B", "D", "C", "D", "D", "B", "B", "C", "B", "D", "B", "A", "C"]
            },
            "p4": {
                count: 30,
                answers: ["B", "B", "A", "A", "D", "A", "D", "B", "A", "B", "C", "D", "A", "B", "B", "A", "D", "B", "A", "B", "B", "A", "B", "C", "B", "D", "C", "A", "C", "C"]
            }
        },
        "q2": {
            "p1": {
                count: 17,
                answers: ["A", "B", "C", "B", "C", "B", "C", "A", "A", "B", "A", "B", "A", "B", "B", "B", "A"]
            },
            "p2": {
                count: 14,
                answers: ["A", "B", "D", "C", "C", "B", "C", "B", "C", "A", "B", "D", "C", "A"]
            },
            "p3": {
                count: 14,
                answers: ["A", "B", "D", "C", "C", "B", "C", "B", "C", "A", "B", "B", "D", "C"]
            },
            "p4": {
                count: 13,
                answers: ["C", "B", "C", "C", "B", "B", "C", "B", "B", "B", "B", "B", "A"]
            },
            "p5": {
                count: 14,
                answers: ["C", "B", "C", "D", "B", "B", "C", "C", "B", "C", "A", "B", "B", "B"]
            },
            "p6": {
                count: 8,
                answers: ["C", "C", "C", "A", "B", "C", "A", "B"]
            },
            "p7": {
                count: 9,
                answers: ["C", "C", "A", "C", "C", "B", "A", "A", "A"]
            }
        }
    },
    "QUES2": {
        "q1": {
            "p1": {
                count: 23,
                answers: ["A", "B", "D", "B", "C", "B", "C", "A", "A", "B", "A", "A", "D", "A", "B", "B", "C", "A", "B", "A", "D", "A", "B"]
            },
            "p2": {
                count: 20,
                answers: ["A", "B", "D", "B", "C", "B", "C", "A", "B", "C", "A", "D", "C", "A", "C", "B", "B", "B", "B", "D"]
            },
            "p3": {
                count: 18,
                answers: ["A", "B", "D", "B", "C", "B", "C", "C", "A", "A", "A", "D", "C", "A", "C", "B", "C", "A"]
            },
            "p4": {
                count: 20,
                answers: ["B", "D", "B", "C", "B", "C", "A", "B", "A", "B", "D", "C", "A", "A", "C", "A", "D", "A", "A", "D"]
            }
        },
        "q2": {
            "p1": {
                count: 8,
                answers: ["A", "B", "B", "D", "B", "A", "B", "B"]
            },
            "p2": {
                count: 22,
                answers: ["B", "C", "C", "A", "B", "C", "B", "C", "B", "C", "A", "A", "B", "A", "B", "B", "A", "B", "B", "A", "B", "A"]
            },
            "p3": {
                count: 12,
                answers: ["A", "B", "C", "B", "B", "B", "C", "A", "B", "B", "A", "B"]
            },
            "p4": {
                count: 19,
                answers: ["A", "B", "C", "B", "A", "B", "C", "A", "A", "B", "B", "A", "B", "A", "B", "B", "A", "B", "B"]
            },
            "p5": {
                count: 49,
                answers: ["C", "A", "A", "D", "B", "C", "D", "D", "C", "A", "B", "D", "A", "B", "C", "D", "A", "C", "D", "A", "B", "C", "D", "A", "C", "A", "B", "D", "C", "D", "B", "A", "B", "A", "A", "A", "B", "C", "D", "A", "A", "D", "B", "A", "C", "D", "A", "A", "C"]
            },
            "p6": {
                count: 16,
                answers: ["A", "B", "C", "B", "A", "B", "C", "A", "B", "A", "B", "A", "A", "B", "A", "B"]
            }
        }
    },
    "QUES3": {
        "p1": {
            count: 16,
            answers: ["B", "A", "B", "C", "B", "C", "B", "C", "A", "A", "B", "A", "B", "A", "B", "B"]
        },
        "p2": {
            count: 21,
            answers: ["B", "A", "A", "B", "C", "B", "C", "B", "A", "C", "A", "B", "A", "B", "B", "A", "B", "B", "A", "B", "A"]
        },
        "p3": {
            count: 20,
            answers: ["B", "B", "C", "B", "B", "A", "D", "B", "B", "B", "A", "D", "B", "C", "B", "B", "B", "B", "C", "B"]
        },
        "p4": {
            count: 15,
            answers: ["A", "B", "C", "B", "C", "B", "C", "A", "B", "A", "B", "A", "B", "B", "B"]
        },
        "p5": {
            count: 13,
            answers: ["A", "B", "C", "B", "C", "C", "A", "A", "A", "C", "B", "B", "B"]
        },
        "p6": {
            count: 12,
            answers: ["D", "B", "A", "C", "B", "C", "C", "B", "A", "D", "D", "B"]
        }
    },
    "QUES4": {
        "p1": {
            count: 19,
            answers: ["A", "B", "A", "C", "C", "B", "B", "B", "A", "A", "B", "B", "B", "D", "C", "C", "D", "D", "C"]
        },
        "p2": {
            count: 13,
            answers: ["A", "B", "A", "C", "B", "B", "B", "B", "A", "A", "B", "B", "B"]
        },
        "p3": {
            count: 27,
            answers: ["A", "B", "A", "C", "C", "B", "B", "B", "A", "C", "A", "B", "B", "B", "D", "C", "C", "D", "D", "C", "D", "A", "D", "A", "B", "B", "A"]
        }
    }
};

// حالة التطبيق الحالية
let currentState = {
    topic: null,
    subtopic: null,
    part: null,
    currentPage: 1,
    questionsPerPage: 5,
    userAnswers: {},
    score: {
        correct: 0,
        total: 0
    }
};

// تهيئة التطبيق - الإصلاح النهائي
document.addEventListener('DOMContentLoaded', function () {
    initNavigation();
    initTestSystem();
    initBiologyAnimations();
});

// ========== نظام الاختبارات المحسن ==========
function initTestSystem() {
    initMainTabs();
    initSubtopicTabs();
    initPartTabs();
}

// تهيئة التبويبات الرئيسية
function initMainTabs() {
    const topicButtons = document.querySelectorAll('.test-tab-btn');

    topicButtons.forEach(button => {
        button.addEventListener('click', function () {
            topicButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const topicId = this.getAttribute('data-topic');
            showTopic(topicId);
        });
    });

    // تفعيل الموضوع الأول تلقائياً
    const firstTopicBtn = document.querySelector('.test-tab-btn');
    if (firstTopicBtn) {
        firstTopicBtn.click();
    }
}

// إظهار الموضوع المحدد
function showTopic(topicId) {
    currentState.topic = topicId;
    currentState.subtopic = null;
    currentState.part = null;
    currentState.currentPage = 1;
    currentState.userAnswers = {};
    currentState.score = { correct: 0, total: 0 };

    // إخفاء جميع محتويات المواضيع
    document.querySelectorAll('.test-topic-content').forEach(content => {
        content.style.display = 'none';
    });

    // إظهار محتوى الموضوع المحدد
    const topicContent = document.getElementById(`topic-${topicId}`);
    if (topicContent) {
        topicContent.style.display = 'block';
        resetSubtopicTabs(topicContent);
    }

    hideTestResults();
}

// إعادة تعيين الأقسام الفرعية
function resetSubtopicTabs(topicContent) {
    const subtopicContents = topicContent.querySelectorAll('.test-subtopic-content');
    const subtopicButtons = topicContent.querySelectorAll('.sub-test-tab-btn');

    subtopicContents.forEach(content => {
        content.style.display = 'none';
    });

    subtopicButtons.forEach(btn => {
        btn.classList.remove('active');
    });

    // تفعيل الزر الأول إذا وجد
    if (subtopicButtons.length > 0) {
        subtopicButtons[0].classList.add('active');
        const firstSubtopicId = subtopicButtons[0].getAttribute('data-subtopic');
        showSubtopic(currentState.topic, firstSubtopicId);
    } else {
        resetPartTabs(topicContent);
    }
}

// إعادة تعيين أزرار الأجزاء
function resetPartTabs(container) {
    const partButtons = container.querySelectorAll('.page-tab-btn');
    const questionsContainers = container.querySelectorAll('.questions-container');
    const selectionGuides = container.querySelectorAll('.selection-guide');
    const testNavigations = container.querySelectorAll('.test-navigation');

    partButtons.forEach(btn => {
        btn.classList.remove('active');
    });

    questionsContainers.forEach(container => {
        container.style.display = 'none';
        container.innerHTML = '';
    });

    testNavigations.forEach(nav => {
        nav.style.display = 'none';
    });

    selectionGuides.forEach(guide => {
        guide.style.display = 'flex';
    });
}

// إظهار القسم الفرعي - الإصلاح النهائي
function showSubtopic(topicId, subtopicId) {
    currentState.subtopic = subtopicId;
    currentState.part = null;
    currentState.currentPage = 1;
    currentState.userAnswers = {};
    currentState.score = { correct: 0, total: 0 };

    const topicContent = document.getElementById(`topic-${topicId}`);
    if (!topicContent) return;

    // إخفاء جميع المحتويات الفرعية
    const subtopicContents = topicContent.querySelectorAll('.test-subtopic-content');
    subtopicContents.forEach(content => {
        content.style.display = 'none';
    });

    // إظهار المحتوى الفرعي المحدد
    const subtopicContent = document.getElementById(`subtopic-${subtopicId}`);
    if (subtopicContent) {
        subtopicContent.style.display = 'block';
        resetPartTabs(subtopicContent);
    }
}

// إخفاء نتائج الاختبار
function hideTestResults() {
    const testResults = document.getElementById('test-results');
    if (testResults) {
        testResults.classList.remove('show');
    }
}

// تهيئة أزرار الأقسام الفرعية
function initSubtopicTabs() {
    document.addEventListener('click', function (e) {
        const button = e.target.closest('.sub-test-tab-btn');
        if (!button) return;

        const topicContent = button.closest('.test-topic-content');
        if (!topicContent) return;

        const topicId = topicContent.id.replace('topic-', '');

        const allButtons = topicContent.querySelectorAll('.sub-test-tab-btn');
        allButtons.forEach(btn => btn.classList.remove('active'));

        button.classList.add('active');

        const subtopicId = button.getAttribute('data-subtopic');
        showSubtopic(topicId, subtopicId);
    });
}

// تهيئة أزرار الأجزاء - الإصلاح الجذري
function initPartTabs() {
    document.addEventListener('click', handlePageTabClick);
    bindPageTabButtonsDirectly();
}

// دالة منفصلة للتعامل مع النقر على أزرار الأجزاء
function handlePageTabClick(e) {
    const button = e.target.closest('.page-tab-btn');
    if (!button) return;

    e.preventDefault();
    e.stopPropagation();

    let container = button.closest('.test-subtopic-content');
    if (!container) {
        container = button.closest('.test-topic-content');
    }

    if (!container) return;

    const allButtons = container.querySelectorAll('.page-tab-btn');
    allButtons.forEach(btn => {
        btn.classList.remove('active');
    });

    button.classList.add('active');

    const partId = button.getAttribute('data-page');
    loadPartQuestions(partId, container);
}

// ربط الأزرار مباشرة كنسخة احتياطية
function bindPageTabButtonsDirectly() {
    const allPageButtons = document.querySelectorAll('.page-tab-btn');

    allPageButtons.forEach((button) => {
        button.addEventListener('click', function (e) {
            handlePageButtonClick(this, e);
        });
    });
}

// معالجة النقر على الأزرار مباشرة - الإصلاح النهائي
function handlePageButtonClick(button, e) {
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }

    let container = button.closest('.test-subtopic-content');
    if (!container) {
        container = button.closest('.test-topic-content');
    }

    if (!container) return;

    const partId = button.getAttribute('data-page');
    currentState.part = partId;

    const allButtons = container.querySelectorAll('.page-tab-btn');
    allButtons.forEach(btn => btn.classList.remove('active'));

    button.classList.add('active');

    loadPartQuestions(partId, container);
}

// تحميل أسئلة الجزء المحدد - الإصلاح النهائي
function loadPartQuestions(partId, container) {
    currentState.part = partId;
    currentState.currentPage = 1;
    currentState.userAnswers = {};
    currentState.score = { correct: 0, total: 0 };

    const selectionGuides = container.querySelectorAll('.selection-guide');
    selectionGuides.forEach(guide => {
        guide.style.display = 'none';
    });

    loadQuestionsForPart(currentState.topic, currentState.subtopic, partId, container);
}

// ========== الإصلاح النهائي: تحميل الأسئلة للجزء المحدد ==========
function loadQuestionsForPart(topicId, subtopicId, partId, container) {
    const questionsContainerId = subtopicId ?
        `questions-container-${topicId}-${subtopicId}-${partId}` :
        `questions-container-${topicId}-${partId}`;

    let questionsContainer = document.getElementById(questionsContainerId);

    if (!questionsContainer) {
        questionsContainer = document.createElement('div');
        questionsContainer.id = questionsContainerId;
        questionsContainer.className = 'questions-container';
        questionsContainer.style.display = 'none';

        const pagesTabs = container.querySelector('.pages-tabs');
        const testNavigation = container.querySelector('.test-navigation');

        if (pagesTabs && testNavigation) {
            container.insertBefore(questionsContainer, testNavigation);
        } else {
            container.appendChild(questionsContainer);
        }
    }

    let testNavigation = container.querySelector('.test-navigation');
    if (!testNavigation) {
        const parentContainer = container.closest('.test-topic-content') || container.closest('.test-subtopic-content');
        if (parentContainer) {
            testNavigation = parentContainer.querySelector('.test-navigation');
        }
    }

    if (!questionsContainer) return;

    const allQuestionContainers = container.querySelectorAll('.questions-container');
    allQuestionContainers.forEach(qc => {
        qc.style.display = 'none';
    });

    questionsContainer.style.display = 'block';
    if (testNavigation) {
        testNavigation.style.display = 'flex';
    }

    const questionsData = getQuestionsData(topicId, subtopicId, partId);
    if (!questionsData) {
        questionsContainer.innerHTML = '<div class="error-message"><p>لا توجد أسئلة متاحة لهذا الجزء حالياً</p></div>';
        return;
    }

    displayQuestionsPage(questionsData, questionsContainer, testNavigation);

    setTimeout(() => {
        questionsContainer.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }, 300);
}

// الحصول على بيانات الأسئلة
function getQuestionsData(topicId, subtopicId, partId) {
    if (subtopicId) {
        return questionsData[topicId]?.[subtopicId]?.[partId];
    } else {
        return questionsData[topicId]?.[partId];
    }
}

// عرض صفحة الأسئلة الحالية - الإصلاح النهائي
function displayQuestionsPage(questionsData, questionsContainer, testNavigation) {
    const { count, answers } = questionsData;

    const startIndex = (currentState.currentPage - 1) * currentState.questionsPerPage;
    const endIndex = Math.min(startIndex + currentState.questionsPerPage, count);

    questionsContainer.innerHTML = '';

    if (count === 0 || !answers || answers.length === 0) {
        questionsContainer.innerHTML = '<div class="error-message"><p>لا توجد أسئلة في هذا الجزء</p></div>';
        return;
    }

    for (let i = startIndex; i < endIndex; i++) {
        const questionNumber = i + 1;
        const correctAnswer = answers[i];

        if (!correctAnswer) continue;

        const questionCard = createQuestionCard(questionNumber, correctAnswer, i);
        questionsContainer.appendChild(questionCard);
    }

    updatePageInfo(testNavigation, count);
    updateNavigationButtons(testNavigation, count);
}

// إنشاء بطاقة سؤال
function createQuestionCard(questionNumber, correctAnswer, questionIndex) {
    const card = document.createElement('div');
    card.className = 'question-card';
    card.setAttribute('data-question-index', questionIndex);

    const imagePath = getQuestionImagePath(questionNumber);

    card.innerHTML = `
        <div class="question-header">
            <div class="question-info">
                <h4 class="question-number">سؤال ${questionNumber}</h4>
                <div class="question-score">-/-</div>
            </div>
        </div>
        <div class="question-content">
            <div class="question-image">
                <img src="${imagePath}" alt="سؤال ${questionNumber}" loading="lazy" 
                     onerror="this.style.display='none'">
            </div>
            <div class="question-options">
                <button class="option-btn" data-option="A">
                    <span class="option-text">الخيار A</span>
                    <span class="option-label">A</span>
                </button>
                <button class="option-btn" data-option="B">
                    <span class="option-text">الخيار B</span>
                    <span class="option-label">B</span>
                </button>
                <button class="option-btn" data-option="C">
                    <span class="option-text">الخيار C</span>
                    <span class="option-label">C</span>
                </button>
                <button class="option-btn" data-option="D">
                    <span class="option-text">الخيار D</span>
                    <span class="option-label">D</span>
                </button>
            </div>
        </div>
    `;

    const optionButtons = card.querySelectorAll('.option-btn');
    optionButtons.forEach(button => {
        button.addEventListener('click', function () {
            handleAnswerSelection(this, correctAnswer, card, questionIndex);
        });
    });

    return card;
}

// الحصول على مسار صورة السؤال - الإصلاح النهائي
function getQuestionImagePath(questionNumber) {
    const { topic, subtopic, part } = currentState;

    if (topic === "QUES2") {
        return `QUES/QUES2/${subtopic}/${part}/Slide${questionNumber}.PNG`;
    } else if (subtopic) {
        return `QUES/${topic}/${subtopic}/${part}/Slide${questionNumber}.PNG`;
    } else {
        return `QUES/${topic}/${part}/Slide${questionNumber}.PNG`;
    }
}

// التعامل مع اختيار الإجابة
function handleAnswerSelection(selectedButton, correctAnswer, questionCard, questionIndex) {
    const optionButtons = questionCard.querySelectorAll('.option-btn');
    const questionScore = questionCard.querySelector('.question-score');
    const selectedOption = selectedButton.getAttribute('data-option');

    if (!correctAnswer) return;

    currentState.userAnswers[questionIndex] = selectedOption;

    optionButtons.forEach(button => {
        button.disabled = true;
        button.classList.add('disabled');
    });

    selectedButton.classList.add('selected');

    if (selectedOption === correctAnswer) {
        selectedButton.classList.add('correct');
        questionScore.textContent = '1/1';
        questionScore.classList.add('correct');
        questionScore.classList.remove('incorrect');
        currentState.score.correct++;
    } else {
        selectedButton.classList.add('incorrect');
        questionScore.textContent = '0/1';
        questionScore.classList.add('incorrect');
        questionScore.classList.remove('correct');

        optionButtons.forEach(button => {
            if (button.getAttribute('data-option') === correctAnswer) {
                button.classList.add('correct');
            }
        });
    }

    currentState.score.total++;
}

// تحديث معلومات الصفحة
function updatePageInfo(testNavigation, totalQuestions) {
    const currentPageElement = testNavigation.querySelector('.current-page');
    const totalPagesElement = testNavigation.querySelector('.total-pages');
    const totalPages = Math.ceil(totalQuestions / currentState.questionsPerPage);

    if (currentPageElement) {
        currentPageElement.textContent = currentState.currentPage;
    }

    if (totalPagesElement) {
        totalPagesElement.textContent = totalPages;
    }
}

// تحديث أزرار التنقل
function updateNavigationButtons(testNavigation, totalQuestions) {
    const prevButton = testNavigation.querySelector('.prev-btn');
    const nextButton = testNavigation.querySelector('.next-btn');
    const totalPages = Math.ceil(totalQuestions / currentState.questionsPerPage);

    if (prevButton) {
        prevButton.disabled = currentState.currentPage === 1;
        prevButton.onclick = () => {
            if (currentState.currentPage > 1) {
                currentState.currentPage--;
                reloadCurrentQuestions();
            }
        };
    }

    if (nextButton) {
        if (currentState.currentPage === totalPages) {
            nextButton.textContent = 'إنهاء الاختبار';
            nextButton.onclick = () => {
                showTestResults();
            };
        } else {
            nextButton.textContent = 'التالي';
            nextButton.onclick = () => {
                if (currentState.currentPage < totalPages) {
                    currentState.currentPage++;
                    reloadCurrentQuestions();
                }
            };
        }
        nextButton.disabled = false;
    }
}

// إعادة تحميل الأسئلة الحالية
function reloadCurrentQuestions() {
    const { topic, subtopic, part } = currentState;
    const container = subtopic ?
        document.getElementById(`subtopic-${subtopic}`) :
        document.getElementById(`topic-${topic}`);

    if (container) {
        loadQuestionsForPart(topic, subtopic, part, container);
    }
}

// عرض نتائج الاختبار
function showTestResults() {
    const finalScore = calculateFinalScore();

    const testResults = document.getElementById('test-results');
    const scoreValue = testResults.querySelector('.score-value');
    const scoreCircle = testResults.querySelector('.score-circle');
    const correctAnswers = testResults.querySelector('.correct-answers');
    const totalQuestions = testResults.querySelector('.total-questions');

    if (scoreValue) scoreValue.textContent = finalScore.percentage;
    if (correctAnswers) correctAnswers.textContent = finalScore.correct;
    if (totalQuestions) totalQuestions.textContent = finalScore.total;

    if (scoreCircle) {
        scoreCircle.style.background = `conic-gradient(var(--primary-color) ${finalScore.percentage}%, #e9ecef ${finalScore.percentage}%)`;
    }

    const retryBtn = testResults.querySelector('.retry-btn');
    const reviewBtn = testResults.querySelector('.review-btn');

    if (retryBtn) {
        retryBtn.onclick = function () {
            location.reload();
        };
    }

    if (reviewBtn) {
        reviewBtn.onclick = function () {
            testResults.classList.remove('show');
        };
    }

    testResults.classList.add('show');
}

// حساب النتيجة النهائية
function calculateFinalScore() {
    const questionsData = getQuestionsData(currentState.topic, currentState.subtopic, currentState.part);
    if (!questionsData) return { correct: 0, total: 0, percentage: 0 };

    const { count, answers } = questionsData;
    let correct = 0;

    for (let i = 0; i < count; i++) {
        if (currentState.userAnswers[i] === answers[i]) {
            correct++;
        }
    }

    const percentage = Math.round((correct / count) * 100);

    return {
        correct: correct,
        total: count,
        percentage: percentage
    };
}

// ========== الدوال المساعدة ==========
function initNavigation() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

function initBiologyAnimations() {
    // يمكن إضافة الأنيميشنز هنا لاحقاً
}
