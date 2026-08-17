document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================================
       1. SHARED NAVIGATION
    ========================================================== */

    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navLinks");
    const mainNav = document.getElementById("mainNav");

    if (navToggle && navMenu) {

        navToggle.addEventListener("click", () => {

            const open =
                navMenu.classList.toggle("active");

            navToggle.classList.toggle(
                "active",
                open
            );

            navToggle.setAttribute(
                "aria-expanded",
                open ? "true" : "false"
            );

        });


        navMenu
            .querySelectorAll("a")
            .forEach((link) => {

                link.addEventListener(
                    "click",
                    () => {

                        navMenu.classList.remove(
                            "active"
                        );

                        navToggle.classList.remove(
                            "active"
                        );

                        navToggle.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }
                );

            });

    }


    const updateNav = () => {

        if (!mainNav) return;

        mainNav.classList.toggle(
            "scrolled",
            window.scrollY > 40
        );

    };


    window.addEventListener(
        "scroll",
        updateNav
    );

    updateNav();


    document
        .querySelectorAll('a[href^="#"]')
        .forEach((link) => {

            link.addEventListener(
                "click",
                (event) => {

                    const id =
                        link.getAttribute("href");

                    if (
                        !id ||
                        id === "#"
                    ) {
                        return;
                    }

                    const target =
                        document.querySelector(id);

                    if (!target) return;

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            );

        });


    /* ==========================================================
       2. SCROLL REVEAL
    ========================================================== */

    const revealItems =
        document.querySelectorAll(
            ".reveal-on-scroll"
        );


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                (entries, obs) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "visible"
                                );

                                obs.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        revealItems.forEach(
            (element) => {

                observer.observe(
                    element
                );

            }
        );

    } else {

        revealItems.forEach(
            (element) => {

                element.classList.add(
                    "visible"
                );

            }
        );

    }


    /* ==========================================================
       3. ESCAPE CLOSES MOBILE NAV
    ========================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key !== "Escape" ||
                !navMenu ||
                !navToggle
            ) {
                return;
            }

            navMenu.classList.remove(
                "active"
            );

            navToggle.classList.remove(
                "active"
            );

            navToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }
    );


    /* ==========================================================
       4. HOMEPAGE 3D GATEWAY
    ========================================================== */

    const gatewayStage =
        document.getElementById(
            "gatewayStage"
        );

    const gatewayScene =
        document.getElementById(
            "gatewayScene"
        );


    if (
        gatewayStage &&
        gatewayScene
    ) {

        gatewayStage.addEventListener(
            "pointermove",
            (event) => {

                const box =
                    gatewayStage
                        .getBoundingClientRect();

                const x =
                    (
                        event.clientX -
                        box.left
                    ) /
                    box.width -
                    0.5;

                const y =
                    (
                        event.clientY -
                        box.top
                    ) /
                    box.height -
                    0.5;


                gatewayScene.style.transform =
                    `rotateY(${x * 16}deg) rotateX(${-y * 13}deg)`;

            }
        );


        gatewayStage.addEventListener(
            "pointerleave",
            () => {

                gatewayScene.style.transform =
                    "rotateY(0deg) rotateX(0deg)";

            }
        );

    }


    /* ==========================================================
       5. HOMEPAGE PARTICLE CANVAS
    ========================================================== */

    const heroCanvas =
        document.getElementById(
            "heroCanvas"
        );


    if (heroCanvas) {

        const ctx =
            heroCanvas.getContext("2d");

        let particles = [];


        function resizeHeroCanvas() {

            const ratio =
                window.devicePixelRatio || 1;

            heroCanvas.width =
                window.innerWidth *
                ratio;

            heroCanvas.height =
                window.innerHeight *
                ratio;

            heroCanvas.style.width =
                window.innerWidth +
                "px";

            heroCanvas.style.height =
                window.innerHeight +
                "px";

            ctx.setTransform(
                ratio,
                0,
                0,
                ratio,
                0,
                0
            );


            particles =
                Array.from(
                    {
                        length:
                            Math.min(
                                45,
                                Math.floor(
                                    window.innerWidth /
                                    28
                                )
                            )
                    },
                    () => ({

                        x:
                            Math.random() *
                            window.innerWidth,

                        y:
                            Math.random() *
                            window.innerHeight,

                        r:
                            Math.random() *
                            1.3 +
                            0.3,

                        vx:
                            (
                                Math.random() -
                                0.5
                            ) *
                            0.12,

                        vy:
                            (
                                Math.random() -
                                0.5
                            ) *
                            0.12

                    })
                );

        }


        function animateHeroCanvas() {

            ctx.clearRect(
                0,
                0,
                window.innerWidth,
                window.innerHeight
            );

            ctx.fillStyle =
                "rgba(255,255,255,.35)";


            particles.forEach(
                (particle) => {

                    particle.x +=
                        particle.vx;

                    particle.y +=
                        particle.vy;


                    if (particle.x < 0) {
                        particle.x =
                            window.innerWidth;
                    }

                    if (
                        particle.x >
                        window.innerWidth
                    ) {
                        particle.x = 0;
                    }

                    if (particle.y < 0) {
                        particle.y =
                            window.innerHeight;
                    }

                    if (
                        particle.y >
                        window.innerHeight
                    ) {
                        particle.y = 0;
                    }


                    ctx.beginPath();

                    ctx.arc(
                        particle.x,
                        particle.y,
                        particle.r,
                        0,
                        Math.PI * 2
                    );

                    ctx.fill();

                }
            );


            requestAnimationFrame(
                animateHeroCanvas
            );

        }


        resizeHeroCanvas();

        window.addEventListener(
            "resize",
            resizeHeroCanvas
        );

        animateHeroCanvas();

    }


    /* ==========================================================
       6. STUDENT ENTRY FORM
    ========================================================== */

    const studentForm =
        document.getElementById(
            "studentForm"
        );


    if (studentForm) {

        const studentName =
            document.getElementById(
                "studentName"
            );

        const studentId =
            document.getElementById(
                "studentId"
            );

        const studentEmail =
            document.getElementById(
                "studentEmail"
            );

        const studyYear =
            document.getElementById(
                "studyYear"
            );

        const consent =
            document.getElementById(
                "reflectionConsent"
            );


        const namePattern =
            /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,60}$/;

        const idPattern =
            /^\d{10}$/;

        const emailPattern =
            /^[A-Za-z0-9._%+-]+@alustudent\.com$/i;


        function setStudentField(
            input,
            valid,
            message
        ) {

            if (!input) return false;

            input.classList.toggle(
                "is-valid",
                valid
            );

            input.classList.toggle(
                "is-invalid",
                !valid
            );


            const error =
                document.getElementById(
                    input.id +
                    "Error"
                );


            if (error) {

                error.textContent =
                    valid
                        ? ""
                        : message;

            }

            return valid;

        }


        function validateStudentName() {

            return setStudentField(

                studentName,

                namePattern.test(
                    studentName
                        .value
                        .trim()
                ),

                "Use letters, spaces, apostrophes or hyphens."

            );

        }


        function validateStudentId() {

            return setStudentField(

                studentId,

                idPattern.test(
                    studentId
                        .value
                        .trim()
                ),

                "Student ID must contain exactly 10 digits."

            );

        }


        function validateStudentEmail() {

            return setStudentField(

                studentEmail,

                emailPattern.test(
                    studentEmail
                        .value
                        .trim()
                ),

                "Use your @alustudent.com email."

            );

        }


        function validateStudyYear() {

            return setStudentField(

                studyYear,

                Boolean(
                    studyYear.value
                ),

                "Choose your year of study."

            );

        }


        studentName?.addEventListener(
            "input",
            validateStudentName
        );

        studentId?.addEventListener(
            "input",
            validateStudentId
        );

        studentEmail?.addEventListener(
            "input",
            validateStudentEmail
        );

        studyYear?.addEventListener(
            "change",
            validateStudyYear
        );


        studentForm.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                const nameOk =
                    validateStudentName();

                const idOk =
                    validateStudentId();

                const emailOk =
                    validateStudentEmail();

                const yearOk =
                    validateStudyYear();

                const consentOk =
                    Boolean(
                        consent?.checked
                    );


                const consentError =
                    document.getElementById(
                        "reflectionConsentError"
                    );


                if (consentError) {

                    consentError.textContent =
                        consentOk
                            ? ""
                            : "Please confirm that you understand the purpose of SpecGateway.";

                }


                if (
                    !(
                        nameOk &&
                        idOk &&
                        emailOk &&
                        yearOk &&
                        consentOk
                    )
                ) {
                    return;
                }


                const studentData = {

                    name:
                        studentName
                            .value
                            .trim(),

                    id:
                        studentId
                            .value
                            .trim(),

                    email:
                        studentEmail
                            .value
                            .trim(),

                    year:
                        studyYear.value

                };


                localStorage.setItem(

                    "specGatewayStudent",

                    JSON.stringify(
                        studentData
                    )

                );


                window.location.href =
                    "quiz.html";

            }
        );

    }


    /* ==========================================================
       7. CONTACT PAGE TERMINAL
    ========================================================== */

    const terminalCursor =
        document.querySelector(
            ".terminal-cursor"
        );


    if (terminalCursor) {

        setInterval(
            () => {

                terminalCursor.style.opacity =
                    terminalCursor.style.opacity ===
                    "0"
                        ? "1"
                        : "0";

            },

            650
        );

    }


    /* ==========================================================
       8. CONTACT FORM
    ========================================================== */

    const contactForm =
        document.getElementById(
            "contactForm"
        );


    if (contactForm) {

        const contactName =
            document.getElementById(
                "contactName"
            );

        const contactEmail =
            document.getElementById(
                "contactEmail"
            );

        const contactSubject =
            document.getElementById(
                "contactSubject"
            );

        const contactMessage =
            document.getElementById(
                "contactMessage"
            );

        const contactWebsite =
            document.getElementById(
                "contactWebsite"
            );

        const messageCount =
            document.getElementById(
                "messageCount"
            );

        const contactSuccess =
            document.getElementById(
                "contactSuccess"
            );

        const sendAnother =
            document.getElementById(
                "sendAnother"
            );


        const contactNamePattern =
            /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,60}$/;

        const contactEmailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;


        function setContactState(
            input,
            valid,
            message
        ) {

            input.classList.toggle(
                "is-valid",
                valid
            );

            input.classList.toggle(
                "is-invalid",
                !valid
            );


            const error =
                document.getElementById(
                    input.id +
                    "Error"
                );


            if (error) {

                error.textContent =
                    valid
                        ? ""
                        : message;

            }


            return valid;

        }


        function validateContactName() {

            return setContactState(

                contactName,

                contactNamePattern.test(
                    contactName
                        .value
                        .trim()
                ),

                "Enter a valid name."

            );

        }


        function validateContactEmail() {

            return setContactState(

                contactEmail,

                contactEmailPattern.test(
                    contactEmail
                        .value
                        .trim()
                ),

                "Enter a valid email address."

            );

        }


        function validateContactSubject() {

            return setContactState(

                contactSubject,

                Boolean(
                    contactSubject.value
                ),

                "Choose a message type."

            );

        }


        function validateContactMessage() {

            const length =
                contactMessage
                    .value
                    .trim()
                    .length;


            return setContactState(

                contactMessage,

                length >= 10 &&
                length <= 1000,

                "Your message must contain at least 10 characters."

            );

        }


        contactName.addEventListener(
            "input",
            validateContactName
        );

        contactEmail.addEventListener(
            "input",
            validateContactEmail
        );

        contactSubject.addEventListener(
            "change",
            validateContactSubject
        );


        contactMessage.addEventListener(
            "input",
            () => {

                if (messageCount) {

                    messageCount.textContent =
                        contactMessage
                            .value
                            .length;

                }

                validateContactMessage();

            }
        );


        contactForm.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                if (
                    contactWebsite &&
                    contactWebsite
                        .value
                        .trim()
                ) {
                    return;
                }


                const valid =
                    validateContactName() &&
                    validateContactEmail() &&
                    validateContactSubject() &&
                    validateContactMessage();


                if (!valid) return;


                contactForm.hidden =
                    true;


                if (contactSuccess) {

                    contactSuccess.hidden =
                        false;

                }

            }
        );


        sendAnother?.addEventListener(
            "click",
            () => {

                contactForm.reset();


                contactForm
                    .querySelectorAll(
                        ".is-valid, .is-invalid"
                    )
                    .forEach(
                        (field) => {

                            field.classList.remove(
                                "is-valid",
                                "is-invalid"
                            );

                        }
                    );


                contactForm
                    .querySelectorAll(
                        ".contact-error"
                    )
                    .forEach(
                        (error) => {

                            error.textContent =
                                "";

                        }
                    );


                if (messageCount) {

                    messageCount.textContent =
                        "0";

                }


                if (contactSuccess) {

                    contactSuccess.hidden =
                        true;

                }


                contactForm.hidden =
                    false;


                contactName.focus();

            }
        );

    }


    /* ==========================================================
       9. FAQ
    ========================================================== */

    document
        .querySelectorAll(".faq-item")
        .forEach((item) => {

            item.addEventListener(
                "toggle",
                () => {

                    if (!item.open) {
                        return;
                    }


                    document
                        .querySelectorAll(
                            ".faq-item"
                        )
                        .forEach(
                            (other) => {

                                if (
                                    other !== item
                                ) {

                                    other.removeAttribute(
                                        "open"
                                    );

                                }

                            }
                        );

                }
            );

        });


    /* ==========================================================
       10. QUIZ ENGINE
    ========================================================== */

    const quizForm =
        document.getElementById(
            "quizForm"
        );


    if (quizForm) {

        const sections =
            [
                ...document.querySelectorAll(
                    ".question-section"
                )
            ];


        const currentQ =
            document.getElementById(
                "currentQ"
            );

        const totalQ =
            document.getElementById(
                "totalQ"
            );

        const progressFill =
            document.getElementById(
                "progressFill"
            );

        const progressPercent =
            document.getElementById(
                "progressPercent"
            );

        const prevBtn =
            document.getElementById(
                "prevBtn"
            );

        const nextBtn =
            document.getElementById(
                "nextBtn"
            );

        const submitBtn =
            document.getElementById(
                "submitBtn"
            );

        const timerDisplay =
            document.getElementById(
                "quizTimer"
            );

        const revisionDisplay =
            document.getElementById(
                "revisionCount"
            );

        const saveStatus =
            document.getElementById(
                "questionSaveStatus"
            );

        const timeoutOverlay =
            document.getElementById(
                "quizTimeoutOverlay"
            );

        const timeoutButton =
            document.getElementById(
                "timeoutResultsButton"
            );

        const q2Slider =
            document.getElementById(
                "q2Slider"
            );

        const q2SliderText =
            document.getElementById(
                "q2SliderText"
            );

        const skillCount =
            document.getElementById(
                "skillCount"
            );

        const scenarioVideo =
            document.getElementById(
                "scenarioVideo"
            );

        const videoPrompt =
            document.getElementById(
                "videoPrompt"
            );

        const rankingContainer =
            document.getElementById(
                "rankingContainer"
            );

        const resetRanking =
            document.getElementById(
                "resetRanking"
            );

        const customGoal =
            document.getElementById(
                "customGoal"
            );

        const charCount =
            document.getElementById(
                "charCount"
            );


        let currentIndex = 0;

        let timeLeft = 600;

        let timerId = null;

        let rankingOrder = [];

        let finished = false;


        const revisionUsed = {};

        const savedSnapshots = {};


        const scores = {

            lowlevel: 0,

            arvr: 0,

            fullstack: 0,

            ml: 0

        };


        function currentSection() {

            return sections[
                currentIndex
            ];

        }


        function questionKey(
            section =
                currentSection()
        ) {

            return (
                "q" +
                section.dataset.question
            );

        }


        function getSnapshot(
            section
        ) {

            const type =
                section.dataset.type;


            if (
                type === "single" ||
                type === "video"
            ) {

                return (
                    section.querySelector(
                        'input[type="radio"]:checked'
                    )?.value ||
                    null
                );

            }


            if (
                type === "slider"
            ) {

                return (
                    q2Slider?.value ||
                    null
                );

            }


            if (
                type === "multi"
            ) {

                return [
                    ...section.querySelectorAll(
                        'input[type="checkbox"]:checked'
                    )
                ]
                    .map(
                        (input) =>
                            input.value
                    )
                    .sort()
                    .join("|");

            }


            if (
                type === "ranking"
            ) {

                return rankingOrder.join(
                    "|"
                );

            }


            return null;

        }


        function updateRevisionDisplay() {

            const used =
                revisionUsed[
                    questionKey()
                ] || 0;


            if (revisionDisplay) {

                revisionDisplay.textContent =
                    Math.max(
                        0,
                        2 - used
                    );

            }

        }


        function registerRevision(
            section
        ) {

            const key =
                questionKey(
                    section
                );

            const snapshot =
                getSnapshot(
                    section
                );


            if (
                !(
                    key in
                    savedSnapshots
                )
            ) {

                savedSnapshots[key] =
                    snapshot;

                return true;

            }


            if (
                savedSnapshots[key] ===
                snapshot
            ) {

                return true;

            }


            const used =
                revisionUsed[key] || 0;


            if (used >= 2) {

                return false;

            }


            revisionUsed[key] =
                used + 1;


            savedSnapshots[key] =
                snapshot;


            if (
                section.classList.contains(
                    "active"
                )
            ) {

                updateRevisionDisplay();

            }


            return true;

        }


        function showQuestionError(
            number,
            message
        ) {

            const error =
                document.getElementById(
                    "error-q" +
                    number
                );


            if (!error) return;


            if (message) {

                error.textContent =
                    message;

            }


            error.classList.add(
                "show"
            );

        }


        function hideQuestionError(
            number
        ) {

            document
                .getElementById(
                    "error-q" +
                    number
                )
                ?.classList
                .remove("show");

        }


        function validateCurrentQuestion() {

            const section =
                currentSection();

            const questionNumber =
                currentIndex + 1;

            const type =
                section.dataset.type;


            hideQuestionError(
                questionNumber
            );


            if (
                type === "single" ||
                type === "video"
            ) {

                const answer =
                    section.querySelector(
                        'input[type="radio"]:checked'
                    );


                if (!answer) {

                    showQuestionError(
                        questionNumber,
                        "Choose one option before continuing."
                    );

                    return false;

                }

            }


            if (
                type === "multi"
            ) {

                const selected =
                    section.querySelectorAll(
                        'input[type="checkbox"]:checked'
                    );


                if (
                    selected.length !== 3
                ) {

                    showQuestionError(
                        questionNumber,
                        "Choose exactly three skills."
                    );

                    return false;

                }

            }


            if (
                type === "ranking" &&
                rankingOrder.length !== 4
            ) {

                showQuestionError(
                    questionNumber,
                    "Rank all four values before continuing."
                );

                return false;

            }


            return true;

        }


        function showQuestion(
            newIndex
        ) {

            currentIndex =
                newIndex;


            sections.forEach(
                (
                    section,
                    index
                ) => {

                    section.classList.toggle(
                        "active",
                        index ===
                        currentIndex
                    );

                }
            );


            const percentage =
                Math.round(
                    (
                        (
                            currentIndex +
                            1
                        ) /
                        sections.length
                    ) *
                    100
                );


            if (currentQ) {

                currentQ.textContent =
                    currentIndex + 1;

            }


            if (totalQ) {

                totalQ.textContent =
                    sections.length;

            }


            if (progressFill) {

                progressFill.style.width =
                    percentage +
                    "%";

            }


            if (progressPercent) {

                progressPercent.textContent =
                    percentage +
                    "%";

            }


            if (prevBtn) {

                prevBtn.disabled =
                    currentIndex === 0;

            }


            if (
                nextBtn &&
                submitBtn
            ) {

                const finalQuestion =
                    currentIndex ===
                    sections.length - 1;


                nextBtn.style.display =
                    finalQuestion
                        ? "none"
                        : "inline-flex";


                submitBtn.style.display =
                    finalQuestion
                        ? "inline-flex"
                        : "none";

            }


            updateRevisionDisplay();


            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }


        /* ================================================
           RADIO ANSWER REVISION LIMIT
        ================================================ */

        sections.forEach(
            (section) => {

                const radios =
                    [
                        ...section.querySelectorAll(
                            'input[type="radio"]'
                        )
                    ];


                radios.forEach(
                    (radio) => {

                        radio.addEventListener(
                            "change",
                            () => {

                                const key =
                                    questionKey(
                                        section
                                    );

                                const previous =
                                    savedSnapshots[
                                        key
                                    ];


                                if (
                                    !registerRevision(
                                        section
                                    )
                                ) {

                                    radios.forEach(
                                        (
                                            item
                                        ) => {

                                            item.checked =
                                                item.value ===
                                                previous;

                                        }
                                    );


                                    alert(
                                        "You have already revised this question twice."
                                    );

                                    return;

                                }


                                hideQuestionError(
                                    section
                                        .dataset
                                        .question
                                );


                                if (saveStatus) {

                                    saveStatus.textContent =
                                        "Answer saved";

                                }

                            }
                        );

                    }
                );

            }
        );


        /* ================================================
           Q2 SLIDER
        ================================================ */

        if (
            q2Slider &&
            q2SliderText
        ) {

            const messages = {

                1:
                    "I prefer tools to handle most implementation details",

                2:
                    "I like abstractions, but I still want some visibility underneath",

                3:
                    "I like understanding enough of both",

                4:
                    "I want strong control over how the system works",

                5:
                    "I want to understand and control the foundations myself"

            };


            function updateSliderText() {

                q2SliderText.textContent =
                    messages[
                        q2Slider.value
                    ];


                if (saveStatus) {

                    saveStatus.textContent =
                        "Preference saved";

                }

            }


            q2Slider.addEventListener(
                "input",
                updateSliderText
            );


            q2Slider.addEventListener(
                "change",
                () => {

                    const section =
                        q2Slider.closest(
                            ".question-section"
                        );


                    if (
                        !registerRevision(
                            section
                        )
                    ) {

                        alert(
                            "You have already revised this question twice."
                        );

                    }

                }
            );


            updateSliderText();

        }


        /* ================================================
           Q6 EXACTLY 3 SKILLS
        ================================================ */

        const q6Inputs =
            [
                ...document.querySelectorAll(
                    'input[name="q6"]'
                )
            ];


        function updateSkillCounter() {

            const selected =
                [
                    ...document.querySelectorAll(
                        'input[name="q6"]:checked'
                    )
                ];


            if (skillCount) {

                skillCount.textContent =
                    selected.length;

            }


            q6Inputs.forEach(
                (input) => {

                    input.disabled =
                        selected.length >=
                            3 &&
                        !input.checked;

                }
            );

        }


        q6Inputs.forEach(
            (input) => {

                input.addEventListener(
                    "change",
                    () => {

                        updateSkillCounter();


                        registerRevision(
                            input.closest(
                                ".question-section"
                            )
                        );


                        hideQuestionError(
                            6
                        );

                    }
                );

            }
        );


        updateSkillCounter();


        /* ================================================
           Q7 VIDEO PAUSE
        ================================================ */

        if (scenarioVideo) {

            let pausedOnce =
                false;


            scenarioVideo.addEventListener(
                "timeupdate",
                () => {

                    const duration =
                        Number.isFinite(
                            scenarioVideo.duration
                        )
                            ? scenarioVideo.duration
                            : 10;


                    const pauseAt =
                        Math.min(
                            5,
                            duration *
                            0.45
                        );


                    if (
                        !pausedOnce &&
                        scenarioVideo.currentTime >=
                            pauseAt
                    ) {

                        pausedOnce =
                            true;


                        scenarioVideo.pause();


                        if (videoPrompt) {

                            videoPrompt.hidden =
                                false;

                        }

                    }

                }
            );


            scenarioVideo.addEventListener(
                "play",
                () => {

                    if (videoPrompt) {

                        videoPrompt.hidden =
                            true;

                    }

                }
            );

        }


        /* ================================================
           Q8 RANKING
        ================================================ */

        if (rankingContainer) {

            const items =
                [
                    ...rankingContainer
                        .querySelectorAll(
                            ".ranking-item"
                        )
                ];


            function refreshRanking() {

                items.forEach(
                    (item) => {

                        const position =
                            rankingOrder.indexOf(
                                item.dataset.id
                            );


                        item.classList.toggle(
                            "ranked",
                            position !== -1
                        );


                        const badge =
                            item.querySelector(
                                ".rank-badge"
                            );


                        if (badge) {

                            badge.textContent =
                                position === -1
                                    ? "-"
                                    : position + 1;

                        }

                    }
                );


                [1, 2, 3, 4].forEach(
                    (number) => {

                        const input =
                            document.getElementById(
                                "q8Rank" +
                                number
                            );


                        if (input) {

                            input.value =
                                rankingOrder[
                                    number - 1
                                ] || "";

                        }

                    }
                );

            }


            items.forEach(
                (item) => {

                    item.addEventListener(
                        "click",
                        () => {

                            const id =
                                item.dataset.id;


                            if (
                                rankingOrder.includes(
                                    id
                                )
                            ) {

                                rankingOrder =
                                    rankingOrder.filter(
                                        (
                                            value
                                        ) =>
                                            value !==
                                            id
                                    );

                            } else if (
                                rankingOrder.length <
                                4
                            ) {

                                rankingOrder.push(
                                    id
                                );

                            }


                            refreshRanking();


                            registerRevision(
                                item.closest(
                                    ".question-section"
                                )
                            );


                            hideQuestionError(
                                8
                            );

                        }
                    );

                }
            );


            resetRanking?.addEventListener(
                "click",
                () => {

                    rankingOrder = [];

                    refreshRanking();

                }
            );


            refreshRanking();

        }


        /* ================================================
           FINAL REFLECTION COUNTER
        ================================================ */

        customGoal?.addEventListener(
            "input",
            () => {

                if (charCount) {

                    charCount.textContent =
                        customGoal
                            .value
                            .length;

                }

            }
        );


        /* ================================================
           NEXT / PREVIOUS
        ================================================ */

        nextBtn?.addEventListener(
            "click",
            () => {

                if (
                    !validateCurrentQuestion()
                ) {
                    return;
                }


                if (
                    currentIndex <
                    sections.length - 1
                ) {

                    showQuestion(
                        currentIndex +
                        1
                    );

                }

            }
        );


        prevBtn?.addEventListener(
            "click",
            () => {

                if (
                    currentIndex > 0
                ) {

                    showQuestion(
                        currentIndex -
                        1
                    );

                }

            }
        );


        /* ================================================
           TIMER
        ================================================ */

        function formatTime(
            seconds
        ) {

            const minutes =
                Math.floor(
                    seconds / 60
                );

            const remaining =
                seconds % 60;


            return (
                String(minutes)
                    .padStart(
                        2,
                        "0"
                    ) +
                ":" +
                String(remaining)
                    .padStart(
                        2,
                        "0"
                    )
            );

        }


        function updateTimer() {

            if (!timerDisplay) {
                return;
            }


            timerDisplay.textContent =
                formatTime(
                    timeLeft
                );


            if (
                timeLeft <= 60
            ) {

                timerDisplay.style.color =
                    "var(--error)";

            }

        }


        function startTimer() {

            updateTimer();


            timerId =
                setInterval(
                    () => {

                        timeLeft--;

                        updateTimer();


                        if (
                            timeLeft <= 0
                        ) {

                            clearInterval(
                                timerId
                            );


                            if (
                                timeoutOverlay
                            ) {

                                timeoutOverlay.hidden =
                                    false;

                            }

                        }

                    },

                    1000
                );

        }


        /* ================================================
           SCORING
        ================================================ */

        function addScore(
            specialisation,
            points
        ) {

            if (
                specialisation in
                scores
            ) {

                scores[
                    specialisation
                ] += points;

            }

        }


        function calculateScores() {

            Object.keys(
                scores
            ).forEach(
                (key) => {

                    scores[key] = 0;

                }
            );


            [1, 3, 4, 5, 7, 9]
                .forEach(
                    (question) => {

                        const answer =
                            quizForm.querySelector(
                                `input[name="q${question}"]:checked`
                            );


                        if (answer) {

                            addScore(
                                answer.value,
                                4
                            );

                        }

                    }
                );


            const q10 =
                quizForm.querySelector(
                    'input[name="q10"]:checked'
                );


            if (q10) {

                addScore(
                    q10.value,
                    5
                );

            }


            const sliderValue =
                Number(
                    q2Slider?.value ||
                    1
                );


            if (sliderValue === 1) {

                addScore(
                    "fullstack",
                    4
                );

                addScore(
                    "ml",
                    1
                );

            }


            if (sliderValue === 2) {

                addScore(
                    "fullstack",
                    3
                );

                addScore(
                    "arvr",
                    1
                );

            }


            if (sliderValue === 3) {

                Object.keys(
                    scores
                ).forEach(
                    (key) => {

                        addScore(
                            key,
                            1
                        );

                    }
                );

            }


            if (sliderValue === 4) {

                addScore(
                    "lowlevel",
                    3
                );

                addScore(
                    "arvr",
                    1
                );

            }


            if (sliderValue === 5) {

                addScore(
                    "lowlevel",
                    4
                );

            }


            q6Inputs
                .filter(
                    (input) =>
                        input.checked
                )
                .forEach(
                    (input) => {

                        const card =
                            input.closest(
                                "[data-spec]"
                            );


                        if (card) {

                            addScore(
                                card.dataset.spec,
                                2
                            );

                        }

                    }
                );


            if (rankingContainer) {

                rankingOrder.forEach(
                    (
                        id,
                        index
                    ) => {

                        const item =
                            rankingContainer.querySelector(
                                `[data-id="${id}"]`
                            );


                        if (item) {

                            addScore(
                                item.dataset.spec,
                                4 - index
                            );

                        }

                    }
                );

            }


            return {
                ...scores
            };

        }


        function buildResult() {

            const rawScores =
                calculateScores();


            const total =
                Object.values(
                    rawScores
                ).reduce(
                    (
                        sum,
                        value
                    ) =>
                        sum +
                        value,
                    0
                );


            const percentages =
                Object.fromEntries(

                    Object.entries(
                        rawScores
                    ).map(
                        (
                            [
                                key,
                                value
                            ]
                        ) => [

                            key,

                            total
                                ? Math.round(
                                    (
                                        value /
                                        total
                                    ) *
                                    100
                                )
                                : 0

                        ]
                    )

                );


            const sorted =
                Object.entries(
                    rawScores
                ).sort(
                    (
                        a,
                        b
                    ) =>
                        b[1] -
                        a[1]
                );


            let student = {};


            try {

                student =
                    JSON.parse(
                        localStorage.getItem(
                            "specGatewayStudent"
                        ) ||
                        "{}"
                    );

            } catch {

                student = {};

            }


            return {

                scores:
                    rawScores,

                percentages:
                    percentages,

                primary:
                    sorted[0]?.[0] ||
                    "fullstack",

                secondary:
                    sorted[1]?.[0] ||
                    "ml",

                student:
                    student,

                customGoal:
                    customGoal
                        ?.value
                        .trim() ||
                    "",

                completedAt:
                    new Date()
                        .toISOString()

            };

        }


        function finishQuiz() {

            if (finished) {
                return;
            }


            finished =
                true;


            if (timerId) {

                clearInterval(
                    timerId
                );

            }


            const result =
                buildResult();


            localStorage.setItem(

                "specGatewayResult",

                JSON.stringify(
                    result
                )

            );


            window.location.href =
                "results.html";

        }


        quizForm.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                if (
                    !validateCurrentQuestion()
                ) {

                    return;

                }


                finishQuiz();

            }
        );


        timeoutButton?.addEventListener(
            "click",
            finishQuiz
        );


        showQuestion(0);

        startTimer();

    }


    /* ==========================================================
       11. RESULTS PAGE
    ========================================================== */

    const resultsPage =
        document.querySelector(
            ".results-page"
        );


    if (resultsPage) {

        let result = {};


        try {

            result =
                JSON.parse(
                    localStorage.getItem(
                        "specGatewayResult"
                    ) ||
                    "{}"
                );

        } catch {

            result = {};

        }


        if (
            !result.primary ||
            !result.percentages
        ) {

            window.location.href =
                "quiz.html";

            return;

        }


        const fullStudentName =
            result.student
                ?.name
                ?.trim() ||
            "Student";


        const firstName =
            fullStudentName
                .split(/\s+/)[0];


        const firstUpper =
            firstName.toUpperCase();


        const percentages =
            result.percentages ||
            {};


        /* ======================================================
           RESULT CONTENT
        ====================================================== */

        const specialisations = {

            lowlevel: {

                name:
                    "LOW-LEVEL PROGRAMMING",

                short:
                    "Low-Level Programming",

                tagline:
                    "You are drawn toward understanding what happens beneath the abstractions.",

                secondary:
                    "Your answers also show meaningful interest in systems, performance and technical foundations.",

                reasons: [

                    [
                        "01",
                        "YOU LOOK BELOW THE SURFACE",
                        "You showed curiosity about what software is actually doing inside the machine."
                    ],

                    [
                        "02",
                        "EFFICIENCY MATTERS TO YOU",
                        "Performance, precision and resource use repeatedly appeared in your choices."
                    ],

                    [
                        "03",
                        "YOU VALUE CONTROL",
                        "You seem to enjoy understanding and controlling technical foundations instead of treating them as a black box."
                    ]

                ],

                steps: [

                    [
                        "01",
                        "EXPLORE",
                        "Learn how memory really works",
                        "Explore stack versus heap memory, processes, pointers and system resources."
                    ],

                    [
                        "02",
                        "BUILD",
                        "Create a systems project",
                        "Build a small command-line or performance-focused project in a systems language."
                    ],

                    [
                        "03",
                        "MEASURE",
                        "Profile before optimizing",
                        "Use timing and profiling tools to locate real bottlenecks."
                    ],

                    [
                        "04",
                        "DOCUMENT",
                        "Explain what changed",
                        "Write a GitHub README showing the problem, investigation and improvement."
                    ]

                ]

            },


            arvr: {

                name:
                    "AR / VR",

                short:
                    "AR / VR",

                tagline:
                    "You are strongly attracted to spatial interaction, immersion and the way technology feels to a user.",

                secondary:
                    "Your answers also show curiosity about immersive systems, movement and interaction.",

                reasons: [

                    [
                        "01",
                        "YOU THINK IN EXPERIENCES",
                        "You care about how people move, react and feel inside a digital environment."
                    ],

                    [
                        "02",
                        "SPACE ATTRACTS YOU",
                        "Movement, perception, presence and spatial interfaces appeared strongly in your choices."
                    ],

                    [
                        "03",
                        "INTERACTION MOTIVATES YOU",
                        "You seem energized by making technology feel intuitive and responsive."
                    ]

                ],

                steps: [

                    [
                        "01",
                        "EXPLORE",
                        "Learn the foundations of 3D space",
                        "Practice transforms, cameras, lighting and spatial interaction."
                    ],

                    [
                        "02",
                        "BUILD",
                        "Prototype one interaction",
                        "Create a small Unity, WebXR or browser-based 3D experience."
                    ],

                    [
                        "03",
                        "OBSERVE",
                        "Test with another person",
                        "Watch where interaction becomes natural or confusing."
                    ],

                    [
                        "04",
                        "REFINE",
                        "Improve comfort and clarity",
                        "Adjust motion, feedback and controls based on what you observed."
                    ]

                ]

            },


            fullstack: {

                name:
                    "FULL-STACK WEB DEVELOPMENT",

                short:
                    "Full-Stack Web Development",

                tagline:
                    "You enjoy connecting separate pieces until they become a complete product people can actually use.",

                secondary:
                    "Your answers also show meaningful interest in connected products and end-to-end digital experiences.",

                reasons: [

                    [
                        "01",
                        "YOU THINK END TO END",
                        "You enjoy seeing how interfaces, logic, services and data fit together."
                    ],

                    [
                        "02",
                        "USEFUL PRODUCTS MOTIVATE YOU",
                        "You care about getting ideas into the hands of real users."
                    ],

                    [
                        "03",
                        "CONNECTIONS MAKE SENSE TO YOU",
                        "Your choices show comfort with integrating several layers into one reliable product."
                    ]

                ],

                steps: [

                    [
                        "01",
                        "EXPLORE",
                        "Trace a complete web request",
                        "Follow a request from button click to API, server, database and back."
                    ],

                    [
                        "02",
                        "BUILD",
                        "Create a small full-stack app",
                        "Use a responsive frontend, server-side logic and persistent data."
                    ],

                    [
                        "03",
                        "SHIP",
                        "Deploy it",
                        "Put the application online and test it outside your development machine."
                    ],

                    [
                        "04",
                        "DOCUMENT",
                        "Turn it into a portfolio project",
                        "Explain architecture, decisions, screenshots and lessons in the README."
                    ]

                ]

            },


            ml: {

                name:
                    "MACHINE LEARNING",

                short:
                    "Machine Learning",

                tagline:
                    "You are drawn toward evidence, patterns and systems that learn useful behaviour from information.",

                secondary:
                    "Your profile also shows interest in data, experimentation and evidence-based problem solving.",

                reasons: [

                    [
                        "01",
                        "YOU LOOK FOR SIGNALS",
                        "When a problem is unclear, you naturally want evidence that reveals a pattern."
                    ],

                    [
                        "02",
                        "EXPERIMENTATION INTERESTS YOU",
                        "You seem comfortable testing ideas, comparing outcomes and improving through experiments."
                    ],

                    [
                        "03",
                        "DATA FEELS USEFUL TO YOU",
                        "You are curious about using information to support better predictions and decisions."
                    ]

                ],

                steps: [

                    [
                        "01",
                        "EXPLORE",
                        "Strengthen data foundations",
                        "Practice Python, NumPy, pandas and basic statistics."
                    ],

                    [
                        "02",
                        "BUILD",
                        "Train one understandable model",
                        "Use a small dataset for a classification or regression project."
                    ],

                    [
                        "03",
                        "EVALUATE",
                        "Measure more than accuracy",
                        "Compare metrics and inspect where the model makes mistakes."
                    ],

                    [
                        "04",
                        "DOCUMENT",
                        "Explain the experiment",
                        "Describe the question, data, model, evaluation and limitations on GitHub."
                    ]

                ]

            }

        };


        const primaryData =
            specialisations[
                result.primary
            ];


        const secondaryData =
            specialisations[
                result.secondary
            ];


        const primaryPercent =
            percentages[
                result.primary
            ] || 0;


        const secondaryPercent =
            percentages[
                result.secondary
            ] || 0;


        function setText(
            id,
            value
        ) {

            const element =
                document.getElementById(
                    id
                );


            if (element) {

                element.textContent =
                    value;

            }

        }


        setText(
            "revealStudentName",
            firstUpper
        );


        setText(
            "resultFirstName",
            firstName
        );


        setText(
            "congratsName",
            firstUpper + "."
        );


        setText(
            "resultPrimaryName",
            primaryData.name
        );


        setText(
            "resultPrimaryTagline",
            primaryData.tagline
        );


        setText(
            "primaryMatchPercent",
            primaryPercent +
            "%"
        );


        setText(
            "secondaryMatchName",
            secondaryData.name
        );


        setText(
            "secondaryMatchPercent",
            secondaryPercent +
            "%"
        );


        setText(
            "secondaryMatchCopy",
            secondaryData.secondary
        );


        setText(
            "scoreLowLevel",
            (
                percentages.lowlevel ||
                0
            ) +
            "%"
        );


        setText(
            "scoreArvr",
            (
                percentages.arvr ||
                0
            ) +
            "%"
        );


        setText(
            "scoreFullstack",
            (
                percentages.fullstack ||
                0
            ) +
            "%"
        );


        setText(
            "scoreMl",
            (
                percentages.ml ||
                0
            ) +
            "%"
        );


        setText(
            "shareResultName",
            primaryData.name
        );


        setText(
            "shareResultText",
            "My strongest BSE specialisation signal is " +
            primaryData.short +
            "."
        );


        /* ======================================================
           WHY IT FITS
        ====================================================== */

        const reasoningList =
            document.getElementById(
                "reasoningList"
            );


        if (reasoningList) {

            reasoningList.innerHTML =
                primaryData.reasons
                    .map(
                        (
                            [
                                number,
                                title,
                                text
                            ]
                        ) => `

                        <article class="reason-card">

                            <span class="reason-number">
                                ${number}
                            </span>

                            <div>

                                <h3>
                                    ${title}
                                </h3>

                                <p>
                                    ${text}
                                </p>

                            </div>

                        </article>

                    `
                    )
                    .join("");

        }


        /* ======================================================
           NEXT STEPS
        ====================================================== */

        const nextStepGrid =
            document.getElementById(
                "nextStepGrid"
            );


        if (nextStepGrid) {

            nextStepGrid.innerHTML =
                primaryData.steps
                    .map(
                        (
                            [
                                number,
                                label,
                                title,
                                text
                            ]
                        ) => `

                        <article class="next-step-card">

                            <div class="next-step-top">

                                <span class="next-step-number">
                                    ${number}
                                </span>

                                <span class="next-step-label">
                                    ${label}
                                </span>

                            </div>

                            <h3>
                                ${title}
                            </h3>

                            <p>
                                ${text}
                            </p>

                        </article>

                    `
                    )
                    .join("");

        }


        /* ======================================================
           OPTIONAL REFLECTION
        ====================================================== */

        const reflection =
            result.customGoal
                ?.trim() ||
            "";


        const reflectionSection =
            document.getElementById(
                "resultReflectionSection"
            );


        const reflectionText =
            document.getElementById(
                "studentReflectionResult"
            );


        if (
            reflection &&
            reflectionText
        ) {

            reflectionText.textContent =
                "“" +
                reflection +
                "”";

        } else if (
            reflectionSection
        ) {

            reflectionSection.style.display =
                "none";

        }


        /* ======================================================
           BALLOON INTRO — EXACTLY 2 SECONDS
        ====================================================== */

        const revealOverlay =
            document.getElementById(
                "resultRevealOverlay"
            );


        if (revealOverlay) {

            setTimeout(
                () => {

                    revealOverlay.classList.add(
                        "hide"
                    );


                    setTimeout(
                        () => {

                            revealOverlay.remove();

                        },

                        900
                    );


                    startConfetti();

                },

                2000
            );

        }


        /* ======================================================
           HTML5 CANVAS RADAR GRAPH
        ====================================================== */

        const radar =
            document.getElementById(
                "specialisationChart"
            );


        if (radar) {

            const ctx =
                radar.getContext("2d");


            const values = [

                percentages.lowlevel ||
                0,

                percentages.arvr ||
                0,

                percentages.fullstack ||
                0,

                percentages.ml ||
                0

            ];


            const labels = [

                "LOW-LEVEL",

                "AR / VR",

                "FULL-STACK",

                "MACHINE LEARNING"

            ];


            const maximum =
                Math.max(
                    ...values,
                    1
                );


            const angles = [

                -Math.PI / 2,

                0,

                Math.PI / 2,

                Math.PI

            ];


            function drawRadar(
                progress
            ) {

                const width =
                    radar.width;

                const height =
                    radar.height;

                const centerX =
                    width / 2;

                const centerY =
                    height / 2;

                const radius =
                    Math.min(
                        width,
                        height
                    ) *
                    0.31;


                ctx.clearRect(
                    0,
                    0,
                    width,
                    height
                );


                ctx.strokeStyle =
                    "rgba(255,255,255,.12)";

                ctx.lineWidth =
                    1;


                for (
                    let level = 1;
                    level <= 4;
                    level++
                ) {

                    const gridRadius =
                        radius *
                        (
                            level /
                            4
                        );


                    ctx.beginPath();


                    angles.forEach(
                        (
                            angle,
                            index
                        ) => {

                            const x =
                                centerX +
                                Math.cos(
                                    angle
                                ) *
                                gridRadius;

                            const y =
                                centerY +
                                Math.sin(
                                    angle
                                ) *
                                gridRadius;


                            if (
                                index === 0
                            ) {

                                ctx.moveTo(
                                    x,
                                    y
                                );

                            } else {

                                ctx.lineTo(
                                    x,
                                    y
                                );

                            }

                        }
                    );


                    ctx.closePath();

                    ctx.stroke();

                }


                angles.forEach(
                    (angle) => {

                        ctx.beginPath();

                        ctx.moveTo(
                            centerX,
                            centerY
                        );

                        ctx.lineTo(

                            centerX +
                            Math.cos(
                                angle
                            ) *
                            radius,

                            centerY +
                            Math.sin(
                                angle
                            ) *
                            radius

                        );

                        ctx.stroke();

                    }
                );


                const gradient =
                    ctx.createLinearGradient(
                        0,
                        0,
                        width,
                        height
                    );


                gradient.addColorStop(
                    0,
                    "rgba(169,140,255,.52)"
                );


                gradient.addColorStop(
                    1,
                    "rgba(121,231,255,.36)"
                );


                ctx.fillStyle =
                    gradient;

                ctx.strokeStyle =
                    "rgba(121,231,255,.95)";

                ctx.lineWidth =
                    2;


                ctx.beginPath();


                values.forEach(
                    (
                        value,
                        index
                    ) => {

                        const animatedRadius =
                            radius *
                            (
                                value /
                                maximum
                            ) *
                            progress;


                        const x =
                            centerX +
                            Math.cos(
                                angles[index]
                            ) *
                            animatedRadius;


                        const y =
                            centerY +
                            Math.sin(
                                angles[index]
                            ) *
                            animatedRadius;


                        if (
                            index === 0
                        ) {

                            ctx.moveTo(
                                x,
                                y
                            );

                        } else {

                            ctx.lineTo(
                                x,
                                y
                            );

                        }

                    }
                );


                ctx.closePath();

                ctx.fill();

                ctx.stroke();


                values.forEach(
                    (
                        value,
                        index
                    ) => {

                        const animatedRadius =
                            radius *
                            (
                                value /
                                maximum
                            ) *
                            progress;


                        const x =
                            centerX +
                            Math.cos(
                                angles[index]
                            ) *
                            animatedRadius;


                        const y =
                            centerY +
                            Math.sin(
                                angles[index]
                            ) *
                            animatedRadius;


                        ctx.beginPath();

                        ctx.arc(
                            x,
                            y,
                            5,
                            0,
                            Math.PI * 2
                        );

                        ctx.fillStyle =
                            "#f3f0e9";

                        ctx.fill();

                    }
                );


                ctx.font =
                    "12px Arial";

                ctx.textAlign =
                    "center";

                ctx.textBaseline =
                    "middle";


                angles.forEach(
                    (
                        angle,
                        index
                    ) => {

                        const labelRadius =
                            radius +
                            58;


                        const x =
                            centerX +
                            Math.cos(
                                angle
                            ) *
                            labelRadius;


                        const y =
                            centerY +
                            Math.sin(
                                angle
                            ) *
                            labelRadius;


                        ctx.fillStyle =
                            "#aaa7b1";


                        ctx.fillText(
                            labels[index],
                            x,
                            y
                        );


                        ctx.fillStyle =
                            "#79e7ff";


                        ctx.fillText(
                            values[index] +
                            "%",
                            x,
                            y + 18
                        );

                    }
                );

            }


            let animationStart =
                null;


            function animateRadar(
                timestamp
            ) {

                if (!animationStart) {

                    animationStart =
                        timestamp;

                }


                const progress =
                    Math.min(
                        (
                            timestamp -
                            animationStart
                        ) /
                        1100,
                        1
                    );


                const eased =
                    1 -
                    Math.pow(
                        1 -
                        progress,
                        3
                    );


                drawRadar(
                    eased
                );


                if (
                    progress < 1
                ) {

                    requestAnimationFrame(
                        animateRadar
                    );

                }

            }


            setTimeout(
                () => {

                    requestAnimationFrame(
                        animateRadar
                    );

                },

                2100
            );

        }


        /* ======================================================
           CONFETTI
        ====================================================== */

        function startConfetti() {

            const canvas =
                document.getElementById(
                    "celebrationCanvas"
                );


            if (!canvas) return;


            const ctx =
                canvas.getContext(
                    "2d"
                );


            const ratio =
                window.devicePixelRatio ||
                1;


            canvas.width =
                window.innerWidth *
                ratio;

            canvas.height =
                window.innerHeight *
                ratio;

            canvas.style.width =
                window.innerWidth +
                "px";

            canvas.style.height =
                window.innerHeight +
                "px";


            ctx.setTransform(
                ratio,
                0,
                0,
                ratio,
                0,
                0
            );


            const palette = [

                "#a98cff",

                "#79e7ff",

                "#f3f0e9",

                "#8cf0c5"

            ];


            const pieces =
                Array.from(
                    {
                        length: 75
                    },
                    () => ({

                        x:
                            Math.random() *
                            window.innerWidth,

                        y:
                            -20 -
                            Math.random() *
                            300,

                        width:
                            4 +
                            Math.random() *
                            6,

                        height:
                            8 +
                            Math.random() *
                            10,

                        speed:
                            1.4 +
                            Math.random() *
                            2.8,

                        drift:
                            (
                                Math.random() -
                                0.5
                            ) *
                            1.2,

                        rotation:
                            Math.random() *
                            Math.PI,

                        rotationSpeed:
                            (
                                Math.random() -
                                0.5
                            ) *
                            0.15,

                        color:
                            palette[
                                Math.floor(
                                    Math.random() *
                                    palette.length
                                )
                            ]

                    })
                );


            const start =
                performance.now();


            function animateConfetti(
                now
            ) {

                ctx.clearRect(
                    0,
                    0,
                    window.innerWidth,
                    window.innerHeight
                );


                pieces.forEach(
                    (piece) => {

                        piece.y +=
                            piece.speed;

                        piece.x +=
                            piece.drift;

                        piece.rotation +=
                            piece.rotationSpeed;


                        ctx.save();


                        ctx.translate(
                            piece.x,
                            piece.y
                        );


                        ctx.rotate(
                            piece.rotation
                        );


                        ctx.fillStyle =
                            piece.color;


                        ctx.fillRect(

                            -piece.width /
                            2,

                            -piece.height /
                            2,

                            piece.width,

                            piece.height

                        );


                        ctx.restore();

                    }
                );


                if (
                    now -
                    start <
                    2300
                ) {

                    requestAnimationFrame(
                        animateConfetti
                    );

                } else {

                    ctx.clearRect(
                        0,
                        0,
                        window.innerWidth,
                        window.innerHeight
                    );

                }

            }


            requestAnimationFrame(
                animateConfetti
            );

        }


        /* ======================================================
           SOCIAL SHARING
        ====================================================== */

        const shareFeedback =
            document.getElementById(
                "shareFeedback"
            );


        const shareMessage =
            "I completed the SpecGateway BSE Specialisation Advisor. " +
            "My strongest specialisation signal is " +
            primaryData.short +
            ". #SpecGateway #BSE";


        const pageUrl =
            window.location.href;


        async function copyResultText() {

            try {

                await navigator.clipboard
                    .writeText(
                        shareMessage
                    );

            } catch {

                const textarea =
                    document.createElement(
                        "textarea"
                    );


                textarea.value =
                    shareMessage;


                textarea.style.position =
                    "fixed";

                textarea.style.opacity =
                    "0";


                document.body.appendChild(
                    textarea
                );


                textarea.select();


                document.execCommand(
                    "copy"
                );


                textarea.remove();

            }


            if (shareFeedback) {

                shareFeedback.textContent =
                    "Result copied to clipboard.";

            }

        }


        document
            .getElementById(
                "shareLinkedIn"
            )
            ?.addEventListener(
                "click",
                () => {

                    window.open(

                        "https://www.linkedin.com/sharing/share-offsite/?url=" +
                        encodeURIComponent(
                            pageUrl
                        ),

                        "_blank",

                        "noopener,noreferrer"

                    );

                }
            );


        document
            .getElementById(
                "shareFacebook"
            )
            ?.addEventListener(
                "click",
                () => {

                    window.open(

                        "https://www.facebook.com/sharer/sharer.php?u=" +
                        encodeURIComponent(
                            pageUrl
                        ),

                        "_blank",

                        "noopener,noreferrer"

                    );

                }
            );


        document
            .getElementById(
                "shareInstagram"
            )
            ?.addEventListener(
                "click",
                async () => {

                    if (
                        navigator.share
                    ) {

                        try {

                            await navigator.share({

                                title:
                                    "My SpecGateway Result",

                                text:
                                    shareMessage,

                                url:
                                    pageUrl

                            });


                            if (shareFeedback) {

                                shareFeedback.textContent =
                                    "Share panel opened.";

                            }


                            return;

                        } catch {
                            // user cancelled
                        }

                    }


                    await copyResultText();


                    window.open(

                        "https://www.instagram.com/",

                        "_blank",

                        "noopener,noreferrer"

                    );


                    if (shareFeedback) {

                        shareFeedback.textContent =
                            "Result copied. Instagram opened in a new tab.";

                    }

                }
            );


        document
            .getElementById(
                "copyResult"
            )
            ?.addEventListener(
                "click",
                copyResultText
            );


        /* ======================================================
           RETAKE — MAXIMUM 2
        ====================================================== */

        const retakeButton =
            document.getElementById(
                "retakeAssessment"
            );


        const retakeMessage =
            document.getElementById(
                "retakeMessage"
            );


        if (retakeButton) {

            let retakeCount =
                Number(
                    localStorage.getItem(
                        "specGatewayRetakeCount"
                    ) ||
                    0
                );


            function refreshRetakeStatus() {

                const remaining =
                    Math.max(
                        0,
                        2 -
                        retakeCount
                    );


                if (
                    remaining === 0
                ) {

                    retakeButton.disabled =
                        true;


                    retakeButton.textContent =
                        "Retake Limit Reached";


                    if (retakeMessage) {

                        retakeMessage.textContent =
                            "You have used both available assessment retakes.";

                    }

                } else if (
                    retakeMessage
                ) {

                    retakeMessage.textContent =
                        remaining +
                        (
                            remaining === 1
                                ? " retake remaining."
                                : " retakes remaining."
                        );

                }

            }


            retakeButton.addEventListener(
                "click",
                () => {

                    if (
                        retakeCount >= 2
                    ) {

                        refreshRetakeStatus();

                        return;

                    }


                    retakeCount++;


                    localStorage.setItem(

                        "specGatewayRetakeCount",

                        String(
                            retakeCount
                        )

                    );


                    localStorage.removeItem(
                        "specGatewayResult"
                    );


                    window.location.href =
                        "quiz.html";

                }
            );


            refreshRetakeStatus();

        }

    }

});