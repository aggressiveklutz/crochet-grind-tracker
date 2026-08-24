/* ========================================
   COURSE DATA
======================================== */

const lessons = [

    {
        id: "slip-knot",

        number: "01",

        category: "Basics",

        title: "Slip Knot",

        description:
            "Learn how to create the starting loop used for crochet.",

        xp: 100,

        tutorial:
            "https://sarahmaker.com/how-to-crochet/",

        sticker: {
            icon: "🪢",
            title: "Knot Today",
            description:
                "You survived the first crochet knot grind."
        },

        tasks: [

            {
                id: "learn",
                type: "checkbox",
                text:
                    "Learn one slip knot method"
            },

            {
                id: "memory",
                type: "checkbox",
                text:
                    "Make 5 slip knots without checking the tutorial"
            },

            {
                id: "count",
                type: "number",
                text:
                    "Make 20 slip knots",
                goal: 20,
                label:
                    "Slip knots made"
            }

        ],

        milestones: [
            25,
            50,
            100
        ]

    },


    {
        id: "chain",

        number: "02",

        category: "Basics",

        title: "Chain Stitch",

        description:
            "Learn how to create a crochet chain and recognize individual chain stitches.",

        xp: 150,

        tutorial:
            "https://sarahmaker.com/how-to-crochet/",

        sticker: {
            icon: "⛓️",
            title: "Chain Reaction",
            description:
                "Your first proper crochet repetition grind."
        },

        tasks: [

            {
                id: "learn",
                type: "checkbox",
                text:
                    "Learn how to make one chain stitch"
            },

            {
                id: "ten",
                type: "checkbox",
                text:
                    "Make one chain of 10 stitches"
            },

            {
                id: "memory",
                type: "checkbox",
                text:
                    "Make a chain without replaying the tutorial"
            },

            {
                id: "count",
                type: "number",
                text:
                    "Make 100 chain stitches total",
                goal: 100,
                label:
                    "Chains made"
            }

        ],

        milestones: [
            150,
            250,
            500
        ]

    },


    {
        id: "recognition",

        number: "03",

        category: "Basics",

        title: "Find the Damn Stitch",

        description:
            "Learn what an actual crochet stitch looks like and where your hook needs to go.",

        xp: 150,

        tutorial:
            "https://sarahmaker.com/how-to-crochet/",

        sticker: {
            icon: "👁️",
            title: "Loop Detective",
            description:
                "Random yarn spaghetti has started becoming readable."
        },

        tasks: [

            {
                id: "v",
                type: "checkbox",
                text:
                    "Recognize the V shapes in a chain"
            },

            {
                id: "first",
                type: "checkbox",
                text:
                    "Identify the first stitch"
            },

            {
                id: "last",
                type: "checkbox",
                text:
                    "Identify the last stitch"
            },

            {
                id: "insert",
                type: "checkbox",
                text:
                    "Understand where the hook enters a stitch"
            },

            {
                id: "work",
                type: "checkbox",
                text:
                    "Successfully work back into a chain"
            }

        ],

        milestones: []

    },


    {
        id: "single-crochet",

        number: "04",

        category: "Basics",

        title: "Single Crochet",

        description:
            "Learn your first major crochet stitch and begin making actual fabric.",

        xp: 250,

        tutorial:
            "https://sarahmaker.com/single-crochet/",

        sticker: {
            icon: "🧶",
            title: "Single and Dangerous",
            description:
                "Single crochet technology successfully acquired."
        },

        tasks: [

            {
                id: "learn",
                type: "checkbox",
                text:
                    "Learn how to make one single crochet"
            },

            {
                id: "row",
                type: "checkbox",
                text:
                    "Complete one full row"
            },

            {
                id: "turn",
                type: "checkbox",
                text:
                    "Turn the work and start another row"
            },

            {
                id: "stable",
                type: "checkbox",
                text:
                    "Complete a row without accidentally changing the stitch count"
            },

            {
                id: "count",
                type: "number",
                text:
                    "Make 200 single crochet stitches total",
                goal: 200,
                label:
                    "Single crochet stitches"
            }

        ],

        milestones: [
            250,
            500,
            1000
        ]

    },


    {
        id: "rectangle",

        number: "05",

        category: "Basics",

        title: "Rectangle Training",

        description:
            "Practice tension, turning and keeping your work approximately rectangular.",

        xp: 250,

        tutorial:
            "https://sarahmaker.com/how-to-crochet/",

        sticker: {
            icon: "▭",
            title: "Straight-ish",
            description:
                "Your crochet is now vaguely obeying geometry."
        },

        tasks: [

            {
                id: "five",
                type: "checkbox",
                text:
                    "Make a 10 stitch × 5 row rectangle"
            },

            {
                id: "ten",
                type: "checkbox",
                text:
                    "Make a 10 stitch × 10 row rectangle"
            },

            {
                id: "count",
                type: "checkbox",
                text:
                    "Start and finish a row with the same stitch count"
            },

            {
                id: "loose",
                type: "checkbox",
                text:
                    "Experiment intentionally with looser tension"
            },

            {
                id: "tight",
                type: "checkbox",
                text:
                    "Experiment intentionally with tighter tension"
            },

            {
                id: "rectangle",
                type: "checkbox",
                text:
                    "Produce one rectangle that is reasonably straight"
            }

        ],

        milestones: []

    },


    {
        id: "scrunchie",

        number: "06",

        category: "First Project",

        title: "First Scrunchie",

        description:
            "Use your basic skills to produce your first actual crochet object.",

        xp: 500,

        boss: true,

        tutorial:
            "",

        sticker: {
            icon: "🎀",
            title: "Industrial Scrunchification",
            description:
                "The Scrunchie Production Facility is operational."
        },

        tasks: [

            {
                id: "tutorial",
                type: "checkbox",
                text:
                    "Choose a beginner-friendly scrunchie tutorial"
            },

            {
                id: "understand",
                type: "checkbox",
                text:
                    "Understand the stitches required by the tutorial"
            },

            {
                id: "elastic",
                type: "checkbox",
                text:
                    "Successfully crochet around the hair elastic"
            },

            {
                id: "count",
                type: "number",
                text:
                    "Complete your first scrunchie",
                goal: 1,
                label:
                    "Scrunchies completed"
            }

        ],

        milestones: [
            5,
            10,
            20,
            50
        ]

    }

];



/* ========================================
   LEVEL DATA
======================================== */

const levels = [

    {
        level: 1,
        xp: 0,
        title: "Yarn Noob"
    },

    {
        level: 2,
        xp: 250,
        title: "Loop Apprentice"
    },

    {
        level: 3,
        xp: 500,
        title: "Stitch Grinder"
    },

    {
        level: 4,
        xp: 900,
        title: "Hook Wielder"
    },

    {
        level: 5,
        xp: 1400,
        title: "Crochet Menace"
    }

];



/* ========================================
   STATE
======================================== */

function createDefaultState() {

    const lessonStates = {};

    lessons.forEach(lesson => {

        lessonStates[lesson.id] = {

            completed: false,

            tasks: {},

            counters: {}

        };


        lesson.tasks.forEach(task => {

            if (task.type === "checkbox") {

                lessonStates[lesson.id]
                    .tasks[task.id] = false;

            }


            if (task.type === "number") {

                lessonStates[lesson.id]
                    .counters[task.id] = 0;

            }

        });

    });


    return {

        name: "",

        equippedSticker: null,

        lessons: lessonStates

    };

}



function loadState() {

    const saved =
        localStorage.getItem("cgt-save");


    if (!saved) {

        return createDefaultState();

    }


    try {

        const parsed =
            JSON.parse(saved);


        const defaults =
            createDefaultState();


        return mergeState(
            defaults,
            parsed
        );

    }

    catch {

        return createDefaultState();

    }

}



function mergeState(defaults, saved) {

    const merged =
        structuredClone(defaults);


    merged.name =
        saved.name || "";


    merged.equippedSticker =
        saved.equippedSticker || null;


    lessons.forEach(lesson => {

        const savedLesson =
            saved.lessons?.[lesson.id];


        if (!savedLesson) {

            return;

        }


        lesson.tasks.forEach(task => {

            if (task.type === "checkbox") {

                merged.lessons[lesson.id]
                    .tasks[task.id] =
                    savedLesson.tasks?.[task.id]
                    ?? false;

            }


            if (task.type === "number") {

                merged.lessons[lesson.id]
                    .counters[task.id] =
                    savedLesson.counters?.[task.id]
                    ?? 0;

            }

        });

    });


    return merged;

}



let state =
    loadState();



function saveState() {

    localStorage.setItem(
        "cgt-save",
        JSON.stringify(state)
    );

}



/* ========================================
   COMPLETION
======================================== */

function taskIsComplete(
    lesson,
    task
) {

    const lessonState =
        state.lessons[lesson.id];


    if (task.type === "checkbox") {

        return lessonState
            .tasks[task.id];

    }


    if (task.type === "number") {

        return (
            lessonState
                .counters[task.id]
            >= task.goal
        );

    }

}



function lessonIsComplete(lesson) {

    return lesson.tasks.every(task =>
        taskIsComplete(
            lesson,
            task
        )
    );

}



function updateLessonCompletion() {

    lessons.forEach(lesson => {

        state.lessons[lesson.id]
            .completed =
            lessonIsComplete(lesson);

    });


    saveState();

}



/* ========================================
   XP
======================================== */

function calculateXP() {

    let xp = 0;


    lessons.forEach(lesson => {

        if (
            state.lessons[lesson.id]
                .completed
        ) {

            xp += lesson.xp;

        }

    });


    return xp;

}



function getLevelData(xp) {

    let current =
        levels[0];


    levels.forEach(level => {

        if (xp >= level.xp) {

            current = level;

        }

    });


    const currentIndex =
        levels.indexOf(current);


    const next =
        levels[currentIndex + 1]
        || null;


    return {
        current,
        next
    };

}



/* ========================================
   HUD
======================================== */

function renderHUD() {

    const xp =
        calculateXP();


    const levelData =
        getLevelData(xp);


    document
        .querySelector("#player-level")
        .textContent =
        `Lv. ${levelData.current.level} — ${levelData.current.title}`;


    const xpLabel =
        document.querySelector(
            "#player-xp"
        );


    const xpFill =
        document.querySelector(
            "#xp-fill"
        );


    if (levelData.next) {

        xpLabel.textContent =
            `${xp} / ${levelData.next.xp}`;


        const levelStart =
            levelData.current.xp;


        const range =
            levelData.next.xp -
            levelStart;


        const progress =
            xp -
            levelStart;


        const percent =
            Math.min(
                100,
                Math.max(
                    0,
                    (progress / range) * 100
                )
            );


        xpFill.style.width =
            `${percent}%`;

    }

    else {

        xpLabel.textContent =
            `${xp} XP`;


        xpFill.style.width =
            "100%";

    }


    const badge =
        document.querySelector(
            "#equipped-badge"
        );


    if (!state.equippedSticker) {

        badge.textContent =
            "Badge: none equipped";

        return;

    }


    const lesson =
        lessons.find(
            item =>
                item.id ===
                state.equippedSticker
        );


    if (!lesson) {

        badge.textContent =
            "Badge: none equipped";

        return;

    }


    badge.textContent =
        `Badge: ${lesson.sticker.icon} ${lesson.sticker.title}`;

}



/* ========================================
   HOME
======================================== */

function renderHome() {

    const container =
        document.querySelector(
            "#course-container"
        );


    container.innerHTML = "";


    const categories =
        [...new Set(
            lessons.map(
                lesson =>
                    lesson.category
            )
        )];


    categories.forEach(
        (
            category,
            categoryIndex
        ) => {

            const categoryLessons =
                lessons.filter(
                    lesson =>
                        lesson.category ===
                        category
                );


            const completed =
                categoryLessons.filter(
                    lesson =>
                        state.lessons[
                            lesson.id
                        ].completed
                ).length;


            const section =
                document.createElement(
                    "section"
                );


            section.className =
                "course-section";


            section.innerHTML = `

                <div class="section-heading">

                    <div>

                        <p class="eyebrow">
                            ${
                                category ===
                                "Basics"
                                    ? "Arc 01"
                                    : "Boss Project"
                            }
                        </p>

                        <h2>
                            ${category}
                        </h2>

                    </div>

                    <span class="section-progress">
                        ${completed} / ${categoryLessons.length}
                    </span>

                </div>

                <div class="course-cards"></div>

            `;


            const cardContainer =
                section.querySelector(
                    ".course-cards"
                );


            categoryLessons.forEach(
                lesson => {

                    const lessonState =
                        state.lessons[
                            lesson.id
                        ];


                    const completedTasks =
                        lesson.tasks.filter(
                            task =>
                                taskIsComplete(
                                    lesson,
                                    task
                                )
                        ).length;


                    const card =
                        document.createElement(
                            "article"
                        );


                    card.className =
                        "lesson-card";


                    if (
                        lessonState.completed
                    ) {

                        card.classList.add(
                            "completed"
                        );

                    }


                    if (lesson.boss) {

                        card.classList.add(
                            "boss"
                        );

                    }


                    card.innerHTML = `

                        <div class="card-top">

                            <div>

                                <span class="lesson-number">
                                    ${lesson.number}
                                </span>

                                <h3>
                                    ${lesson.title}
                                </h3>

                            </div>

                            <span class="complete-mark">
                                ${
                                    lessonState.completed
                                        ? "✓"
                                        : lesson.boss
                                            ? "★"
                                            : "—"
                                }
                            </span>

                        </div>


                        <p class="lesson-summary">
                            ${lesson.description}
                        </p>


                        <div class="card-meta">

                            <span>
                                ${completedTasks} / ${lesson.tasks.length} tasks
                            </span>

                            <span>
                                +${lesson.xp} XP
                            </span>

                        </div>


                        <button
                            class="card-button"
                            type="button"
                        >
                            ${
                                lessonState.completed
                                    ? "View completed lesson"
                                    : lesson.boss
                                        ? "View project"
                                        : "View lesson"
                            }
                        </button>

                    `;


                    card
                        .querySelector(
                            ".card-button"
                        )
                        .addEventListener(
                            "click",
                            () =>
                                openLesson(
                                    lesson.id
                                )
                        );


                    cardContainer
                        .appendChild(card);

                }
            );


            container.appendChild(
                section
            );

        }
    );

}



/* ========================================
   LESSON DETAIL
======================================== */

function openLesson(id) {

    const lesson =
        lessons.find(
            item =>
                item.id === id
        );


    if (!lesson) {

        return;

    }


    document
        .querySelector(
            "#lesson-number"
        )
        .textContent =
        `Lesson ${lesson.number}`;


    renderLessonDetail(
        lesson
    );


    showView(
        "lesson-view"
    );

}



function renderLessonDetail(
    lesson
) {

    const container =
        document.querySelector(
            "#lesson-content"
        );


    const lessonState =
        state.lessons[
            lesson.id
        ];


    container.innerHTML = `

        <p class="eyebrow">
            ${lesson.category}
        </p>

        <h2>
            ${lesson.title}
        </h2>

        <p>
            ${lesson.description}
        </p>

        <section class="detail-block">

            <h3>
                Tasks
            </h3>

            <div id="lesson-task-list">
            </div>

        </section>


        <section class="detail-block">

            <h3>
                Tutorial
            </h3>

            ${
                lesson.tutorial

                    ? `
                        <a
                            href="${lesson.tutorial}"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Open tutorial ↗
                        </a>
                    `

                    : `
                        <p>
                            No tutorial selected yet.
                        </p>
                    `
            }

        </section>


        <section class="detail-block">

            <h3>
                Reward
            </h3>

            <div
                class="
                    reward-box
                    ${
                        lessonState.completed
                            ? ""
                            : "locked"
                    }
                "
            >

                <strong>
                    +${lesson.xp} XP
                </strong>

                <p>
                    ${
                        lessonState.completed

                            ? `
                                ${lesson.sticker.icon}
                                ${lesson.sticker.title}
                            `

                            : `
                                🔒 Sticker locked
                            `
                    }
                </p>

            </div>

        </section>


        ${
            lesson.milestones.length > 0

                ? `
                    <section class="detail-block">

                        <h3>
                            Optional Milestones
                        </h3>

                        <p>
                            These are optional.
                            Your lesson completion does not depend on them.
                        </p>

                        <ul
                            id="milestone-list"
                            class="milestone-list"
                        ></ul>

                    </section>
                `

                : ""
        }

    `;


    renderLessonTasks(
        lesson
    );


    renderMilestones(
        lesson
    );

}



function renderLessonTasks(
    lesson
) {

    const container =
        document.querySelector(
            "#lesson-task-list"
        );


    const lessonState =
        state.lessons[
            lesson.id
        ];


    lesson.tasks.forEach(
        task => {

            if (
                task.type ===
                "checkbox"
            ) {

                const label =
                    document.createElement(
                        "label"
                    );


                label.className =
                    "task-row";


                if (
                    taskIsComplete(
                        lesson,
                        task
                    )
                ) {

                    label.classList.add(
                        "complete"
                    );

                }


                label.innerHTML = `

                    <input
                        type="checkbox"
                        ${
                            lessonState
                                .tasks[
                                    task.id
                                ]
                                ? "checked"
                                : ""
                        }
                    >

                    <span>
                        ${task.text}
                    </span>

                `;


                const checkbox =
                    label.querySelector(
                        "input"
                    );


                checkbox.addEventListener(
                    "change",
                    () => {

                        lessonState
                            .tasks[
                                task.id
                            ] =
                            checkbox.checked;


                        updateLessonCompletion();


                        renderLessonDetail(
                            lesson
                        );


                        renderEverything();

                    }
                );


                container.appendChild(
                    label
                );

            }


            if (
                task.type ===
                "number"
            ) {

                const value =
                    lessonState
                        .counters[
                            task.id
                        ];


                const complete =
                    value >= task.goal;


                const block =
                    document.createElement(
                        "div"
                    );


                block.className =
                    "numeric-task";


                if (complete) {

                    block.classList.add(
                        "complete"
                    );

                }


                block.innerHTML = `

                    <div class="numeric-heading">

                        <div>

                            <strong>
                                ${
                                    complete
                                        ? "✓ "
                                        : ""
                                }
                                ${task.text}
                            </strong>

                            <p>
                                ${task.label}
                            </p>

                        </div>

                        <span>
                            ${value} / ${task.goal}
                        </span>

                    </div>


                    <div class="counter">

                        <button
                            type="button"
                            data-change="-1"
                        >
                            −1
                        </button>

                        <input
                            type="number"
                            min="0"
                            value="${value}"
                        >

                        <button
                            type="button"
                            data-change="1"
                        >
                            +1
                        </button>

                        <button
                            type="button"
                            data-change="5"
                        >
                            +5
                        </button>

                        <button
                            type="button"
                            data-change="10"
                        >
                            +10
                        </button>

                    </div>

                `;


                const input =
                    block.querySelector(
                        "input"
                    );


                input.addEventListener(
                    "change",
                    () => {

                        const newValue =
                            Math.max(
                                0,
                                Number(
                                    input.value
                                ) || 0
                            );


                        lessonState
                            .counters[
                                task.id
                            ] =
                            newValue;


                        updateLessonCompletion();


                        renderLessonDetail(
                            lesson
                        );


                        renderEverything();

                    }
                );


                block
                    .querySelectorAll(
                        "button[data-change]"
                    )
                    .forEach(
                        button => {

                            button.addEventListener(
                                "click",
                                () => {

                                    const change =
                                        Number(
                                            button.dataset.change
                                        );


                                    lessonState
                                        .counters[
                                            task.id
                                        ] =
                                        Math.max(
                                            0,
                                            lessonState
                                                .counters[
                                                    task.id
                                                ]
                                            + change
                                        );


                                    updateLessonCompletion();


                                    renderLessonDetail(
                                        lesson
                                    );


                                    renderEverything();

                                }
                            );

                        }
                    );


                container.appendChild(
                    block
                );

            }

        }
    );

}



/* ========================================
   MILESTONES
======================================== */

function getPrimaryCounter(
    lesson
) {

    const numericTask =
        lesson.tasks.find(
            task =>
                task.type ===
                "number"
        );


    if (!numericTask) {

        return null;

    }


    return {

        task: numericTask,

        value:
            state.lessons[
                lesson.id
            ].counters[
                numericTask.id
            ]

    };

}



function renderMilestones(
    lesson
) {

    const list =
        document.querySelector(
            "#milestone-list"
        );


    if (!list) {

        return;

    }


    const counter =
        getPrimaryCounter(
            lesson
        );


    if (!counter) {

        return;

    }


    list.innerHTML = "";


    lesson.milestones.forEach(
        milestone => {

            const achieved =
                counter.value >=
                milestone;


            const item =
                document.createElement(
                    "li"
                );


            if (achieved) {

                item.classList.add(
                    "done"
                );

            }


            item.textContent =
                achieved
                    ? `✓ ${milestone}`
                    : `○ ${milestone}`;


            list.appendChild(
                item
            );

        }
    );

}



/* ========================================
   STICKER BOOK
======================================== */

function renderStickerBook() {

    const container =
        document.querySelector(
            "#sticker-grid"
        );


    container.innerHTML = "";


    lessons.forEach(
        lesson => {

            const unlocked =
                state.lessons[
                    lesson.id
                ].completed;


            const sticker =
                document.createElement(
                    "article"
                );


            sticker.className =
                "sticker";


            if (unlocked) {

                sticker.classList.add(
                    "unlocked"
                );

            }


            if (
                state.equippedSticker ===
                lesson.id
            ) {

                sticker.classList.add(
                    "equipped"
                );

            }


            if (unlocked) {

                sticker.innerHTML = `

                    <div class="sticker-icon">
                        ${lesson.sticker.icon}
                    </div>

                    <strong>
                        ${lesson.sticker.title}
                    </strong>

                    <p>
                        ${lesson.sticker.description}
                    </p>

                    <p>
                        ${
                            state.equippedSticker ===
                            lesson.id

                                ? "Equipped"

                                : "Tap to equip"
                        }
                    </p>

                `;


                sticker.addEventListener(
                    "click",
                    () => {

                        state.equippedSticker =
                            lesson.id;


                        saveState();


                        renderEverything();

                    }
                );

            }

            else {

                sticker.innerHTML = `

                    <div class="sticker-icon">
                        ?
                    </div>

                    <strong>
                        Locked
                    </strong>

                    <p>
                        Complete lesson ${lesson.number}
                    </p>

                `;

            }


            container.appendChild(
                sticker
            );

        }
    );

}



/* ========================================
   VIEW SWITCHING
======================================== */

function showView(id) {

    document
        .querySelectorAll(
            ".full-view"
        )
        .forEach(
            view =>
                view.classList.add(
                    "hidden"
                )
        );


    const target =
        document.querySelector(
            `#${id}`
        );


    if (target) {

        target.classList.remove(
            "hidden"
        );

    }

}



function closeViews() {

    document
        .querySelectorAll(
            ".full-view"
        )
        .forEach(
            view =>
                view.classList.add(
                    "hidden"
                )
        );

}



/* ========================================
   PLAYER NAME
======================================== */

const playerName =
    document.querySelector(
        "#player-name"
    );


playerName.value =
    state.name;


playerName.addEventListener(
    "input",
    () => {

        state.name =
            playerName.value;


        saveState();

    }
);



/* ========================================
   BUTTONS
======================================== */

document
    .querySelector(
        "#lesson-back"
    )
    .addEventListener(
        "click",
        closeViews
    );


document
    .querySelector(
        "#sticker-button"
    )
    .addEventListener(
        "click",
        () => {

            renderStickerBook();

            showView(
                "sticker-view"
            );

        }
    );


document
    .querySelector(
        "#sticker-back"
    )
    .addEventListener(
        "click",
        closeViews
    );


document
    .querySelector(
        "#dictionary-button"
    )
    .addEventListener(
        "click",
        () => {

            showView(
                "dictionary-view"
            );

        }
    );


document
    .querySelector(
        "#dictionary-back"
    )
    .addEventListener(
        "click",
        closeViews
    );



/* ========================================
   RESET
======================================== */

document
    .querySelector(
        "#reset-progress"
    )
    .addEventListener(
        "click",
        () => {

            const confirmed =
                confirm(
                    "Delete all Crochet Grind Tracker progress?"
                );


            if (!confirmed) {

                return;

            }


            state =
                createDefaultState();


            localStorage.removeItem(
                "cgt-save"
            );


            playerName.value =
                "";


            renderEverything();

        }
    );



/* ========================================
   RENDER
======================================== */

function renderEverything() {

    updateLessonCompletion();

    renderHUD();

    renderHome();

    renderStickerBook();

}



renderEverything();