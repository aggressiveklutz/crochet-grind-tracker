/* ========================================
   CGT v0.2
   Crochet Grind Tracker
======================================== */

const SAVE_KEY = "cgt-save-v02";
const SAVE_VERSION = 2;

/* ========================================
   COURSE DATA
======================================== */

const lessons = [
    {
        id: "slip-knot",
        kind: "Lesson",
        number: "01",
        category: "Basics I",
        title: "Slip Knot",
        description: "Grind the starting loop until your hands can make it without thinking.",
        materials: "Smooth light/medium yarn · 4–5 mm hook",
        xp: 100,
        suggestedTutorial: "https://sarahmaker.com/how-to-crochet/",
        sticker: {
            icon: "🪢",
            title: "Knot Today",
            description: "You survived the first crochet knot grind."
        },
        tasks: [
            {
                id: "learn",
                type: "checkbox",
                text: "Learn one slip knot method"
            },
            {
                id: "memory",
                type: "checkbox",
                text: "Make 5 slip knots without checking the tutorial"
            },
            {
                id: "count",
                type: "number",
                text: "Make 20 slip knots",
                goal: 20,
                label: "Slip knots made"
            }
        ],
        mastery: [
            { id: "bronze", icon: "🥉", title: "Bronze", goal: 10, label: "Extra slip knots", xp: 25 },
            { id: "silver", icon: "🥈", title: "Silver", goal: 20, label: "Extra slip knots", xp: 50 },
            { id: "gold", icon: "🥇", title: "Gold", goal: 30, label: "Extra slip knots", xp: 100 }
        ],
        freestyle: {
            label: "Extra slip knots",
            xpEvery: 25,
            xpAmount: 1
        }
    },

    {
        id: "chain",
        kind: "Lesson",
        number: "02",
        category: "Basics I",
        title: "Chain Stitch",
        description: "Grind the foundation stitch until the movement becomes low-effort and consistent.",
        materials: "Smooth light/medium yarn · 4–5 mm hook",
        xp: 150,
        suggestedTutorial: "https://sarahmaker.com/how-to-crochet/",
        sticker: {
            icon: "⛓️",
            title: "Chain Reaction",
            description: "Your first proper crochet repetition grind."
        },
        tasks: [
            {
                id: "learn",
                type: "checkbox",
                text: "Learn how to make one chain stitch"
            },
            {
                id: "ten",
                type: "checkbox",
                text: "Make one chain of 10 stitches"
            },
            {
                id: "memory",
                type: "checkbox",
                text: "Make a chain without replaying the tutorial"
            },
            {
                id: "count",
                type: "number",
                text: "Make 100 chain stitches total",
                goal: 100,
                label: "Chains made"
            }
        ],
        mastery: [
            { id: "bronze", icon: "🥉", title: "Bronze", goal: 50, label: "Extra chains", xp: 40 },
            { id: "silver", icon: "🥈", title: "Silver", goal: 100, label: "Extra chains", xp: 75 },
            { id: "gold", icon: "🥇", title: "Gold", goal: 250, label: "Extra chains", xp: 150 }
        ],
        freestyle: {
            label: "Extra chains",
            xpEvery: 50,
            xpAmount: 1
        }
    },

    {
        id: "recognition",
        kind: "Lesson",
        number: "03",
        category: "Basics I",
        title: "Find the Damn Stitch",
        description: "Grind stitch recognition until yarn stops looking like random spaghetti.",
        materials: "Use your chain practice yarn · same hook",
        xp: 150,
        suggestedTutorial: "https://sarahmaker.com/how-to-crochet/",
        sticker: {
            icon: "👁️",
            title: "Loop Detective",
            description: "Random yarn spaghetti has started becoming readable."
        },
        tasks: [
            {
                id: "v",
                type: "checkbox",
                text: "Recognize the V shapes in a chain"
            },
            {
                id: "first-last",
                type: "checkbox",
                text: "Identify the first and last stitch"
            },
            {
                id: "insert",
                type: "checkbox",
                text: "Understand where the hook enters a stitch"
            },
            {
                id: "count",
                type: "number",
                text: "Practice inserting into 20 stitches",
                goal: 20,
                label: "Stitch insertions"
            }
        ],
        mastery: [
            { id: "bronze", icon: "🥉", title: "Bronze", goal: 25, label: "Extra stitch insertions", xp: 30 },
            { id: "silver", icon: "🥈", title: "Silver", goal: 50, label: "Extra stitch insertions", xp: 60 },
            { id: "gold", icon: "🥇", title: "Gold", goal: 100, label: "Extra stitch insertions", xp: 120 }
        ],
        freestyle: {
            label: "Extra stitch insertions",
            xpEvery: 25,
            xpAmount: 1
        }
    },

    {
        id: "single-crochet",
        kind: "Lesson",
        number: "04",
        category: "Basics I",
        title: "Single Crochet",
        description: "Grind your first major stitch until you can repeat it reliably across rows.",
        materials: "Smooth light/medium yarn · 4–5 mm hook",
        xp: 250,
        suggestedTutorial: "https://sarahmaker.com/single-crochet/",
        sticker: {
            icon: "🧶",
            title: "Single and Dangerous",
            description: "Single crochet technology successfully acquired."
        },
        tasks: [
            {
                id: "learn",
                type: "checkbox",
                text: "Learn how to make one single crochet"
            },
            {
                id: "row",
                type: "checkbox",
                text: "Complete one full row"
            },
            {
                id: "turn",
                type: "checkbox",
                text: "Turn the work and start another row"
            },
            {
                id: "stable",
                type: "checkbox",
                text: "Complete a row without changing the stitch count"
            },
            {
                id: "count",
                type: "number",
                text: "Make 200 single crochet stitches total",
                goal: 200,
                label: "Single crochet stitches"
            }
        ],
        mastery: [
            { id: "bronze", icon: "🥉", title: "Bronze", goal: 200, label: "Extra single crochet", xp: 60 },
            { id: "silver", icon: "🥈", title: "Silver", goal: 400, label: "Extra single crochet", xp: 120 },
            { id: "gold", icon: "🥇", title: "Gold", goal: 800, label: "Extra single crochet", xp: 250 }
        ],
        freestyle: {
            label: "Extra single crochet",
            xpEvery: 100,
            xpAmount: 1
        }
    },

    {
        id: "rectangle",
        kind: "Lesson",
        number: "05",
        category: "Basics I",
        title: "Rectangle Training",
        description: "Grind rows, turning and tension until your fabric stops accidentally changing shape.",
        materials: "Smooth light/medium yarn · 4–5 mm hook",
        xp: 250,
        suggestedTutorial: "https://sarahmaker.com/how-to-crochet/",
        sticker: {
            icon: "▭",
            title: "Straight-ish",
            description: "Your crochet is now vaguely obeying geometry."
        },
        tasks: [
            {
                id: "five",
                type: "checkbox",
                text: "Make a 10 stitch × 5 row rectangle"
            },
            {
                id: "ten",
                type: "checkbox",
                text: "Make a 10 stitch × 10 row rectangle"
            },
            {
                id: "count-stable",
                type: "checkbox",
                text: "Start and finish a row with the same stitch count"
            },
            {
                id: "tension",
                type: "checkbox",
                text: "Experiment with looser and tighter tension"
            },
            {
                id: "count",
                type: "number",
                text: "Complete 2 deliberate practice rectangles",
                goal: 2,
                label: "Practice rectangles"
            }
        ],
        mastery: [
            { id: "bronze", icon: "🥉", title: "Bronze", goal: 2, label: "Extra rectangles", xp: 50 },
            { id: "silver", icon: "🥈", title: "Silver", goal: 3, label: "Extra rectangles", xp: 100 },
            { id: "gold", icon: "🥇", title: "Gold", goal: 5, label: "Extra rectangles", xp: 200 }
        ],
        freestyle: {
            label: "Extra rectangles",
            xpEvery: 2,
            xpAmount: 1
        }
    },

    {
        id: "slip-stitch",
        kind: "Lesson",
        number: "06",
        category: "Basics I",
        title: "Slip Stitch",
        description: "Grind the low-profile stitch used for joining, moving and finishing crochet work.",
        materials: "Smooth light/medium yarn · 4–5 mm hook",
        xp: 200,
        suggestedTutorial: "https://sarahmaker.com/how-to-crochet/",
        sticker: {
            icon: "🛝",
            title: "Smooth Operator",
            description: "You learned the stitch that sneaks around without adding much height."
        },
        tasks: [
            {
                id: "learn",
                type: "checkbox",
                text: "Learn how to make one slip stitch"
            },
            {
                id: "row",
                type: "checkbox",
                text: "Make a short row of slip stitches"
            },
            {
                id: "join",
                type: "checkbox",
                text: "Use a slip stitch to join two points"
            },
            {
                id: "count",
                type: "number",
                text: "Make 100 slip stitches total",
                goal: 100,
                label: "Slip stitches"
            }
        ],
        mastery: [
            { id: "bronze", icon: "🥉", title: "Bronze", goal: 100, label: "Extra slip stitches", xp: 50 },
            { id: "silver", icon: "🥈", title: "Silver", goal: 200, label: "Extra slip stitches", xp: 100 },
            { id: "gold", icon: "🥇", title: "Gold", goal: 400, label: "Extra slip stitches", xp: 200 }
        ],
        freestyle: {
            label: "Extra slip stitches",
            xpEvery: 100,
            xpAmount: 1
        }
    },

    {
        id: "double-crochet",
        kind: "Lesson",
        number: "07",
        category: "Basics I",
        title: "Double Crochet",
        description: "Grind a taller stitch that appears constantly in accessories, wearables and scrunchies.",
        materials: "Smooth light/medium yarn · 4–5 mm hook",
        xp: 250,
        suggestedTutorial: "https://sarahmaker.com/how-to-crochet/",
        sticker: {
            icon: "‼️",
            title: "Double Trouble",
            description: "One yarn-over was apparently not enough."
        },
        tasks: [
            {
                id: "learn",
                type: "checkbox",
                text: "Learn how to make one US double crochet"
            },
            {
                id: "row",
                type: "checkbox",
                text: "Complete one full row"
            },
            {
                id: "memory",
                type: "checkbox",
                text: "Make a row without replaying the tutorial"
            },
            {
                id: "count",
                type: "number",
                text: "Make 150 double crochet stitches total",
                goal: 150,
                label: "Double crochet stitches"
            }
        ],
        mastery: [
            { id: "bronze", icon: "🥉", title: "Bronze", goal: 150, label: "Extra double crochet", xp: 60 },
            { id: "silver", icon: "🥈", title: "Silver", goal: 300, label: "Extra double crochet", xp: 120 },
            { id: "gold", icon: "🥇", title: "Gold", goal: 600, label: "Extra double crochet", xp: 250 }
        ],
        freestyle: {
            label: "Extra double crochet",
            xpEvery: 100,
            xpAmount: 1
        }
    },

    {
        id: "scrunchie",
        kind: "Project",
        number: "01",
        category: "First Project",
        title: "Scrunchie",
        description: "Grind a forgiving first object until making one stops feeling like a major event.",
        materials: "Hair elastic · smooth acrylic/cotton-blend yarn · 4–5 mm hook",
        xp: 500,
        boss: true,
        suggestedTutorial: "",
        sticker: {
            icon: "🎀",
            title: "Industrial Scrunchification",
            description: "The Scrunchie Production Facility is operational."
        },
        tasks: [
            {
                id: "tutorial",
                type: "checkbox",
                text: "Choose a beginner scrunchie tutorial using skills you know"
            },
            {
                id: "understand",
                type: "checkbox",
                text: "Understand the stitches required by the tutorial"
            },
            {
                id: "elastic",
                type: "checkbox",
                text: "Successfully crochet around the hair elastic"
            },
            {
                id: "count",
                type: "number",
                text: "Complete your first scrunchie",
                goal: 1,
                label: "Scrunchies completed"
            }
        ],
        mastery: [
            { id: "bronze", icon: "🥉", title: "Bronze", goal: 4, label: "More scrunchies", xp: 100 },
            { id: "silver", icon: "🥈", title: "Silver", goal: 5, label: "More scrunchies", xp: 200 },
            { id: "gold", icon: "🥇", title: "Gold", goal: 10, label: "More scrunchies", xp: 400 }
        ],
        freestyle: {
            label: "Extra scrunchies after 20",
            xpEvery: 1,
            xpAmount: 1
        }
    }
];

/* ========================================
   LEVEL DATA
======================================== */

const levels = [
    { level: 1, xp: 0, title: "Yarn Noob" },
    { level: 2, xp: 250, title: "Loop Apprentice" },
    { level: 3, xp: 500, title: "Stitch Grinder" },
    { level: 4, xp: 900, title: "Hook Wielder" },
    { level: 5, xp: 1400, title: "Crochet Menace" },
    { level: 6, xp: 2200, title: "Tension Tamer" },
    { level: 7, xp: 3200, title: "Yarn Veteran" },
    { level: 8, xp: 4500, title: "Stitch Machine" },
    { level: 9, xp: 6200, title: "Grind Goblin" },
    { level: 10, xp: 8500, title: "Hook Final Boss" }
];

/* ========================================
   STATE
======================================== */

function createDefaultState() {
    const lessonStates = {};

    lessons.forEach(lesson => {
        const tasks = {};
        const counters = {};
        const mastery = {};

        lesson.tasks.forEach(task => {
            if (task.type === "checkbox") {
                tasks[task.id] = false;
            }

            if (task.type === "number") {
                counters[task.id] = 0;
            }
        });

        lesson.mastery.forEach(tier => {
            mastery[tier.id] = 0;
        });

        lessonStates[lesson.id] = {
            tasks,
            counters,
            mastery,
            freestyle: 0,
            personalTutorial: ""
        };
    });

    return {
        version: SAVE_VERSION,
        name: "",
        equippedSticker: null,
        lessons: lessonStates
    };
}

function loadState() {
    const raw = localStorage.getItem(SAVE_KEY);

    if (!raw) {
        return createDefaultState();
    }

    try {
        const parsed = JSON.parse(raw);

        if (parsed.version !== SAVE_VERSION) {
            return createDefaultState();
        }

        return parsed;
    }
    catch {
        return createDefaultState();
    }
}

let state = loadState();

function saveState() {
    localStorage.setItem(SAVE_KEY, JSON.stringify(state));
}

/* ========================================
   CORE TASKS
======================================== */

function taskIsComplete(lesson, task) {
    const lessonState = state.lessons[lesson.id];

    if (task.type === "checkbox") {
        return Boolean(lessonState.tasks[task.id]);
    }

    if (task.type === "number") {
        return Number(lessonState.counters[task.id] || 0) >= task.goal;
    }

    return false;
}

function coreIsComplete(lesson) {
    return lesson.tasks.every(task => taskIsComplete(lesson, task));
}

function lessonHasStarted(lesson) {
    const lessonState = state.lessons[lesson.id];

    const checkedTask = Object.values(lessonState.tasks).some(Boolean);
    const coreCounter = Object.values(lessonState.counters).some(value => Number(value) > 0);
    const masteryCounter = Object.values(lessonState.mastery).some(value => Number(value) > 0);
    const freestyleCounter = Number(lessonState.freestyle) > 0;
    const tutorialSaved = lessonState.personalTutorial.trim() !== "";

    return checkedTask || coreCounter || masteryCounter || freestyleCounter || tutorialSaved;
}

function getCompletedCoreTasks(lesson) {
    return lesson.tasks.filter(task => taskIsComplete(lesson, task)).length;
}

/* ========================================
   MASTERY
======================================== */

function masteryTierIsComplete(lesson, tierIndex) {
    const tier = lesson.mastery[tierIndex];
    const value = Number(state.lessons[lesson.id].mastery[tier.id] || 0);
    return value >= tier.goal;
}

function masteryTierIsUnlocked(lesson, tierIndex) {
    if (!coreIsComplete(lesson)) {
        return false;
    }

    if (tierIndex === 0) {
        return true;
    }

    return masteryTierIsComplete(lesson, tierIndex - 1);
}

function getMasteryRank(lesson) {
    let rank = -1;

    lesson.mastery.forEach((tier, index) => {
        if (masteryTierIsComplete(lesson, index)) {
            rank = index;
        }
    });

    return rank;
}

function allMasteriesComplete(lesson) {
    return lesson.mastery.every((tier, index) => masteryTierIsComplete(lesson, index));
}

/* ========================================
   XP
======================================== */

function calculateLessonXP(lesson) {
    const lessonState = state.lessons[lesson.id];
    let xp = 0;

    if (coreIsComplete(lesson)) {
        xp += lesson.xp;
    }

    lesson.mastery.forEach((tier, index) => {
        if (masteryTierIsComplete(lesson, index)) {
            xp += tier.xp;
        }
    });

    if (allMasteriesComplete(lesson)) {
        const freestyle = Number(lessonState.freestyle || 0);
        const units = Math.floor(freestyle / lesson.freestyle.xpEvery);
        xp += units * lesson.freestyle.xpAmount;
    }

    return xp;
}

function calculateXP() {
    return lessons.reduce((sum, lesson) => sum + calculateLessonXP(lesson), 0);
}

function getLevelData(xp) {
    let current = levels[0];

    levels.forEach(level => {
        if (xp >= level.xp) {
            current = level;
        }
    });

    const currentIndex = levels.indexOf(current);
    const next = levels[currentIndex + 1] || null;

    return { current, next };
}

/* ========================================
   CARD STATUS
======================================== */

function getLessonStatus(lesson) {
    if (allMasteriesComplete(lesson)) {
        return {
            label: "🥇 100%",
            icon: "🥇",
            className: "mastery-gold"
        };
    }

    const rank = getMasteryRank(lesson);

    if (rank === 1) {
        return {
            label: "🥈 Silver Mastery",
            icon: "🥈",
            className: "mastery-silver"
        };
    }

    if (rank === 0) {
        return {
            label: "🥉 Bronze Mastery",
            icon: "🥉",
            className: "mastery-bronze"
        };
    }

    if (coreIsComplete(lesson)) {
        return {
            label: "✓ Core complete",
            icon: "✓",
            className: "core-complete"
        };
    }

    if (lessonHasStarted(lesson)) {
        return {
            label: "◔ In progress",
            icon: "◔",
            className: "in-progress"
        };
    }

    return {
        label: "○ Not started",
        icon: lesson.boss ? "★" : "○",
        className: ""
    };
}

/* ========================================
   HUD
======================================== */

function renderHUD() {
    const xp = calculateXP();
    const levelData = getLevelData(xp);

    document.querySelector("#player-level").textContent =
        `Lv. ${levelData.current.level} — ${levelData.current.title}`;

    const xpLabel = document.querySelector("#player-xp");
    const xpFill = document.querySelector("#xp-fill");

    if (levelData.next) {
        xpLabel.textContent = `${xp} / ${levelData.next.xp}`;

        const levelStart = levelData.current.xp;
        const range = levelData.next.xp - levelStart;
        const progress = xp - levelStart;
        const percent = Math.min(100, Math.max(0, (progress / range) * 100));

        xpFill.style.width = `${percent}%`;
    }
    else {
        xpLabel.textContent = `${xp} XP`;
        xpFill.style.width = "100%";
    }

    const badge = document.querySelector("#equipped-badge");

    if (!state.equippedSticker) {
        badge.textContent = "Badge: none equipped";
        return;
    }

    const lesson = lessons.find(item => item.id === state.equippedSticker);

    if (!lesson || !coreIsComplete(lesson)) {
        state.equippedSticker = null;
        saveState();
        badge.textContent = "Badge: none equipped";
        return;
    }

    badge.textContent = `Badge: ${lesson.sticker.icon} ${lesson.sticker.title}`;
}

/* ========================================
   HOME
======================================== */

function renderHome() {
    const container = document.querySelector("#course-container");
    container.innerHTML = "";

    const categories = [...new Set(lessons.map(lesson => lesson.category))];

    categories.forEach(category => {
        const categoryLessons = lessons.filter(lesson => lesson.category === category);
        const coreCompleteCount = categoryLessons.filter(coreIsComplete).length;

        const section = document.createElement("section");
        section.className = "course-section";

        section.innerHTML = `
            <div class="section-heading">
                <div>
                    <p class="eyebrow">${category === "Basics I" ? "Arc 01" : "Boss Project"}</p>
                    <h2>${category}</h2>
                </div>

                <span class="section-progress">
                    ${coreCompleteCount} / ${categoryLessons.length} core
                </span>
            </div>

            <div class="course-cards"></div>
        `;

        const cardContainer = section.querySelector(".course-cards");

        categoryLessons.forEach(lesson => {
            const lessonState = state.lessons[lesson.id];
            const completedTasks = getCompletedCoreTasks(lesson);
            const status = getLessonStatus(lesson);

            const card = document.createElement("article");
            card.className = `lesson-card ${status.className}`.trim();

            if (lesson.boss) {
                card.classList.add("boss");
            }

            const freestyleInfo = allMasteriesComplete(lesson)
                ? `<span>Freestyle: ${lessonState.freestyle}</span>`
                : "";

            card.innerHTML = `
                <div class="card-top">
                    <div>
                        <span class="lesson-number">
                            ${lesson.kind.toUpperCase()} ${lesson.number}
                        </span>

                        <h3>${lesson.title}</h3>
                    </div>

                    <span class="complete-mark">${status.icon}</span>
                </div>

                <p class="lesson-summary">${lesson.description}</p>

                <div class="card-status-row">
                    <span>${status.label}</span>
                    ${freestyleInfo}
                </div>

                <div class="card-meta">
                    <span>${completedTasks} / ${lesson.tasks.length} core tasks</span>
                    <span>+${lesson.xp} core XP</span>
                </div>

                <button class="card-button" type="button">
                    View ${lesson.kind.toLowerCase()}
                </button>
            `;

            card.querySelector(".card-button").addEventListener("click", () => {
                openLesson(lesson.id);
            });

            cardContainer.appendChild(card);
        });

        container.appendChild(section);
    });
}

/* ========================================
   LESSON DETAIL
======================================== */

function openLesson(id) {
    const lesson = lessons.find(item => item.id === id);

    if (!lesson) {
        return;
    }

    document.querySelector("#lesson-number").textContent =
        `${lesson.kind} ${lesson.number}`;

    renderLessonDetail(lesson);
    showView("lesson-view");
}

function renderLessonDetail(lesson) {
    const container = document.querySelector("#lesson-content");
    const lessonState = state.lessons[lesson.id];
    const coreComplete = coreIsComplete(lesson);
    const fullMastery = allMasteriesComplete(lesson);

    container.innerHTML = `
        <p class="eyebrow">${lesson.category} · ${lesson.kind}</p>

        <h2>${lesson.title}</h2>

        <p>${lesson.description}</p>

        <section class="detail-block">
            <h3>Materials</h3>
            <p class="materials-line">${lesson.materials}</p>
        </section>

        <section class="detail-block">
            <h3>Core Grind</h3>
            <div id="lesson-task-list"></div>
        </section>

        <section class="detail-block">
            <h3>Tutorial</h3>

            ${lesson.suggestedTutorial
                ? `<p><a href="${lesson.suggestedTutorial}" target="_blank" rel="noopener noreferrer">Suggested tutorial ↗</a></p>`
                : `<p>No suggested tutorial selected yet.</p>`
            }

            <div class="tutorial-box">
                <strong>My tutorial</strong>
                <p class="mastery-note">Save one resource that actually works for you. Replace it anytime.</p>

                <div class="tutorial-input-row">
                    <input
                        id="personal-tutorial-input"
                        type="url"
                        inputmode="url"
                        placeholder="https://..."
                        value="${escapeHtmlAttribute(lessonState.personalTutorial)}"
                    >

                    <button id="save-personal-tutorial" type="button">Save</button>
                </div>

                <div id="saved-tutorial-output"></div>
            </div>
        </section>

        <section class="detail-block">
            <h3>Core Reward</h3>

            <div class="reward-box ${coreComplete ? "" : "locked"}">
                <strong>+${lesson.xp} XP</strong>

                <p>
                    ${coreComplete
                        ? `${lesson.sticker.icon} ${lesson.sticker.title}`
                        : "🔒 Sticker locked"
                    }
                </p>
            </div>
        </section>

        <section class="detail-block">
            <h3>Mastery</h3>

            <p>
                Core completion proves you can do it. Mastery is optional extra grind.
                Each tier unlocks only after the previous one is complete.
            </p>

            <div id="mastery-list" class="mastery-stack"></div>
        </section>

        ${fullMastery
            ? `
                <section class="detail-block">
                    <h3>Freestyle</h3>

                    <div id="freestyle-container"></div>
                </section>
            `
            : ""
        }
    `;

    renderLessonTasks(lesson);
    renderPersonalTutorial(lesson);
    renderMastery(lesson);

    if (fullMastery) {
        renderFreestyle(lesson);
    }
}

/* ========================================
   CORE TASK RENDERING
======================================== */

function renderLessonTasks(lesson) {
    const container = document.querySelector("#lesson-task-list");
    const lessonState = state.lessons[lesson.id];

    lesson.tasks.forEach(task => {
        if (task.type === "checkbox") {
            const label = document.createElement("label");
            label.className = "task-row";

            if (taskIsComplete(lesson, task)) {
                label.classList.add("complete");
            }

            label.innerHTML = `
                <input
                    type="checkbox"
                    ${lessonState.tasks[task.id] ? "checked" : ""}
                >

                <span>${task.text}</span>
            `;

            const checkbox = label.querySelector("input");

            checkbox.addEventListener("change", () => {
                lessonState.tasks[task.id] = checkbox.checked;
                saveState();
                renderEverything();
                renderLessonDetail(lesson);
            });

            container.appendChild(label);
        }

        if (task.type === "number") {
            const value = Number(lessonState.counters[task.id] || 0);
            const complete = value >= task.goal;

            const block = document.createElement("div");
            block.className = "numeric-task";

            if (complete) {
                block.classList.add("complete");
            }

            block.innerHTML = `
                <div class="numeric-heading">
                    <div>
                        <strong>${complete ? "✓ " : ""}${task.text}</strong>
                        <p>${task.label}</p>
                    </div>

                    <span>${value} / ${task.goal}</span>
                </div>

                <div class="counter">
                    <button type="button" data-change="-1">−1</button>

                    <input
                        type="number"
                        min="0"
                        max="${task.goal}"
                        value="${value}"
                    >

                    <button type="button" data-change="1">+1</button>
                    <button type="button" data-change="5">+5</button>
                    <button type="button" data-change="10">+10</button>
                </div>
            `;

            wireCounter({
                container: block,
                getValue: () => Number(lessonState.counters[task.id] || 0),
                setValue: newValue => {
                    lessonState.counters[task.id] = clamp(newValue, 0, task.goal);
                },
                max: task.goal,
                onChange: () => {
                    saveState();
                    renderEverything();
                    renderLessonDetail(lesson);
                }
            });

            container.appendChild(block);
        }
    });
}

/* ========================================
   PERSONAL TUTORIAL
======================================== */

function renderPersonalTutorial(lesson) {
    const lessonState = state.lessons[lesson.id];
    const input = document.querySelector("#personal-tutorial-input");
    const saveButton = document.querySelector("#save-personal-tutorial");
    const output = document.querySelector("#saved-tutorial-output");

    function drawSavedLink(message = "") {
        const value = lessonState.personalTutorial.trim();

        if (!value) {
            output.innerHTML = message
                ? `<p class="saved-note">${message}</p>`
                : "";
            return;
        }

        const safeUrl = normalizeHttpUrl(value);

        output.innerHTML = `
            ${safeUrl
                ? `<a class="saved-tutorial-link" href="${escapeHtmlAttribute(safeUrl)}" target="_blank" rel="noopener noreferrer">Open saved tutorial ↗</a>`
                : `<p class="saved-note">Saved. Add http:// or https:// to make it clickable.</p>`
            }
            ${message ? `<p class="saved-note">${message}</p>` : ""}
        `;
    }

    drawSavedLink();

    saveButton.addEventListener("click", () => {
        lessonState.personalTutorial = input.value.trim();
        saveState();
        renderHome();
        drawSavedLink("Saved.");
    });
}

/* ========================================
   MASTERY
======================================== */

function renderMastery(lesson) {
    const container = document.querySelector("#mastery-list");
    const lessonState = state.lessons[lesson.id];

    lesson.mastery.forEach((tier, index) => {
        const unlocked = masteryTierIsUnlocked(lesson, index);
        const value = Number(lessonState.mastery[tier.id] || 0);
        const complete = value >= tier.goal;

        const block = document.createElement("div");
        block.className = "mastery-card";

        if (!unlocked) {
            block.classList.add("locked");
        }

        if (complete) {
            block.classList.add("complete");
        }

        block.innerHTML = `
            <div class="mastery-heading">
                <div>
                    <div class="mastery-tier">
                        ${unlocked ? tier.icon : "🔒"} ${tier.title} Mastery
                    </div>

                    <p>${tier.label}</p>
                </div>

                <span>${value} / ${tier.goal}</span>
            </div>

            <div class="counter">
                <button type="button" data-change="-1" ${unlocked && !complete ? "" : "disabled"}>−1</button>

                <input
                    type="number"
                    min="0"
                    max="${tier.goal}"
                    value="${value}"
                    ${unlocked && !complete ? "" : "disabled"}
                >

                <button type="button" data-change="1" ${unlocked && !complete ? "" : "disabled"}>+1</button>
                <button type="button" data-change="5" ${unlocked && !complete ? "" : "disabled"}>+5</button>
                <button type="button" data-change="10" ${unlocked && !complete ? "" : "disabled"}>+10</button>
            </div>

            <p class="mastery-note">
                ${complete
                    ? `✓ Complete · +${tier.xp} XP`
                    : unlocked
                        ? `+${tier.xp} XP when complete`
                        : index === 0
                            ? "Complete every core goal to unlock."
                            : `Complete ${lesson.mastery[index - 1].title} Mastery to unlock.`
                }
            </p>
        `;

        if (unlocked && !complete) {
            wireCounter({
                container: block,
                getValue: () => Number(lessonState.mastery[tier.id] || 0),
                setValue: newValue => {
                    lessonState.mastery[tier.id] = clamp(newValue, 0, tier.goal);
                },
                max: tier.goal,
                onChange: () => {
                    saveState();
                    renderEverything();
                    renderLessonDetail(lesson);
                }
            });
        }

        container.appendChild(block);
    });
}

/* ========================================
   FREESTYLE
======================================== */

function renderFreestyle(lesson) {
    const container = document.querySelector("#freestyle-container");
    const lessonState = state.lessons[lesson.id];
    const value = Number(lessonState.freestyle || 0);

    container.innerHTML = `
        <div class="freestyle-box">
            <div class="freestyle-heading">
                <div>
                    <strong>Infinite Grind</strong>
                    <p>${lesson.freestyle.label}</p>
                </div>

                <span>${value}</span>
            </div>

            <div class="counter">
                <button type="button" data-change="-1">−1</button>

                <input
                    type="number"
                    min="0"
                    value="${value}"
                >

                <button type="button" data-change="1">+1</button>
                <button type="button" data-change="5">+5</button>
                <button type="button" data-change="10">+10</button>
            </div>

            <p class="freestyle-note">
                No cap. +${lesson.freestyle.xpAmount} XP every ${lesson.freestyle.xpEvery} tracked.
            </p>
        </div>
    `;

    const box = container.querySelector(".freestyle-box");

    wireCounter({
        container: box,
        getValue: () => Number(lessonState.freestyle || 0),
        setValue: newValue => {
            lessonState.freestyle = Math.max(0, Math.floor(newValue));
        },
        max: Infinity,
        onChange: () => {
            saveState();
            renderEverything();
            renderLessonDetail(lesson);
        }
    });
}

/* ========================================
   COUNTER HELPER
======================================== */

function wireCounter({ container, getValue, setValue, max, onChange }) {
    const input = container.querySelector("input[type='number']");

    input.addEventListener("change", () => {
        let newValue = Math.max(0, Math.floor(Number(input.value) || 0));

        if (Number.isFinite(max)) {
            newValue = Math.min(max, newValue);
        }

        setValue(newValue);
        onChange();
    });

    container.querySelectorAll("button[data-change]").forEach(button => {
        button.addEventListener("click", () => {
            if (button.disabled) {
                return;
            }

            const change = Number(button.dataset.change);
            let newValue = getValue() + change;

            if (Number.isFinite(max)) {
                newValue = clamp(newValue, 0, max);
            }
            else {
                newValue = Math.max(0, newValue);
            }

            setValue(newValue);
            onChange();
        });
    });
}

/* ========================================
   STICKER BOOK
======================================== */

function renderStickerBook() {
    const container = document.querySelector("#sticker-grid");
    container.innerHTML = "";

    lessons.forEach(lesson => {
        const unlocked = coreIsComplete(lesson);
        const equipped = state.equippedSticker === lesson.id;

        const sticker = document.createElement("article");
        sticker.className = "sticker";

        if (unlocked) {
            sticker.classList.add("unlocked");
        }

        if (equipped) {
            sticker.classList.add("equipped");
        }

        if (unlocked) {
            sticker.innerHTML = `
                <div class="sticker-icon">${lesson.sticker.icon}</div>

                <strong>${lesson.sticker.title}</strong>

                <p>${lesson.sticker.description}</p>

                <p>${equipped ? "Tap to unequip" : "Tap to equip"}</p>
            `;

            sticker.addEventListener("click", () => {
                state.equippedSticker = equipped ? null : lesson.id;
                saveState();
                renderEverything();
            });
        }
        else {
            sticker.innerHTML = `
                <div class="sticker-icon">?</div>
                <strong>Locked</strong>
                <p>Complete ${lesson.kind.toLowerCase()} ${lesson.number}</p>
            `;
        }

        container.appendChild(sticker);
    });
}

/* ========================================
   VIEW SWITCHING
======================================== */

function showView(id) {
    document.querySelectorAll(".full-view").forEach(view => {
        view.classList.add("hidden");
    });

    const target = document.querySelector(`#${id}`);

    if (target) {
        target.classList.remove("hidden");
    }
}

function closeViews() {
    document.querySelectorAll(".full-view").forEach(view => {
        view.classList.add("hidden");
    });
}

/* ========================================
   HELPERS
======================================== */

function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
}

function normalizeHttpUrl(value) {
    const trimmed = value.trim();

    if (!/^https?:\/\//i.test(trimmed)) {
        return null;
    }

    try {
        const url = new URL(trimmed);
        return url.href;
    }
    catch {
        return null;
    }
}

function escapeHtmlAttribute(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll('"', "&quot;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;");
}

/* ========================================
   PLAYER NAME
======================================== */

const playerName = document.querySelector("#player-name");
playerName.value = state.name;

playerName.addEventListener("input", () => {
    state.name = playerName.value;
    saveState();
});

/* ========================================
   BUTTONS
======================================== */

document.querySelector("#lesson-back").addEventListener("click", closeViews);

document.querySelector("#sticker-button").addEventListener("click", () => {
    renderStickerBook();
    showView("sticker-view");
});

document.querySelector("#sticker-back").addEventListener("click", closeViews);

document.querySelector("#dictionary-button").addEventListener("click", () => {
    showView("dictionary-view");
});

document.querySelector("#dictionary-back").addEventListener("click", closeViews);

document.querySelector("#reset-progress").addEventListener("click", () => {
    const confirmed = confirm("Delete all Crochet Grind Tracker v0.2 progress?");

    if (!confirmed) {
        return;
    }

    state = createDefaultState();
    localStorage.removeItem(SAVE_KEY);
    playerName.value = "";
    closeViews();
    renderEverything();
});

/* ========================================
   RENDER
======================================== */

function renderEverything() {
    saveState();
    renderHUD();
    renderHome();
    renderStickerBook();
}

renderEverything();
