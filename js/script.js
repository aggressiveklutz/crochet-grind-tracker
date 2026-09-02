/* ========================================
   CGT v0.4
   Crochet Grind Tracker
======================================== */

const SAVE_KEY = "cgt-save-v02";
const SAVE_VERSION = 4;

/* ========================================
   COURSE DATA
======================================== */

const lessons = [
    {
        id: "slip-knot", kind: "Lesson", number: "01", category: "Foundations",
        title: "Slip Knot", description: "Build a reliable starting loop you can make without overthinking it.", xp: 100,
        sticker: { icon: "🪢", title: "First Loop", description: "The starting loop is officially under control." },
        tasks: [
            { id: "learn", type: "checkbox", text: "Learn one slip knot method" },
            { id: "memory", type: "checkbox", text: "Make 5 slip knots without checking your tutorial" },
            { id: "count", type: "number", text: "Make 10 slip knots", goal: 10, label: "Slip knots made", statKey: "slipKnots" }
        ],
        mastery: [
            { id: "bronze", icon: "🥉", title: "Bronze", goal: 10, label: "Extra slip knots", xp: 25, statKey: "slipKnots" },
            { id: "silver", icon: "🥈", title: "Silver", goal: 20, label: "Extra slip knots", xp: 50, statKey: "slipKnots" },
            { id: "gold", icon: "🥇", title: "Gold", goal: 30, label: "Extra slip knots", xp: 100, statKey: "slipKnots" }
        ],
        freestyle: { label: "Extra slip knots", xpEvery: 25, xpAmount: 1, statKey: "slipKnots" }
    },
    {
        id: "chain", kind: "Lesson", number: "02", category: "Foundations",
        title: "Chain Stitch", description: "Grind the foundation stitch until the movement becomes low-effort and consistent.", xp: 150,
        sticker: { icon: "⛓️", title: "Chain Reaction", description: "Your first real repetition grind is complete." },
        tasks: [
            { id: "learn", type: "checkbox", text: "Learn how to make one chain stitch" },
            { id: "ten", type: "checkbox", text: "Make one chain of 10 stitches" },
            { id: "memory", type: "checkbox", text: "Make a chain of 10 stitches without replaying your tutorial" },
            { id: "count", type: "number", text: "Make 100 chain stitches total", goal: 100, label: "Chains made", statKey: "chains" }
        ],
        mastery: [
            { id: "bronze", icon: "🥉", title: "Bronze", goal: 50, label: "Extra chains", xp: 40, statKey: "chains" },
            { id: "silver", icon: "🥈", title: "Silver", goal: 100, label: "Extra chains", xp: 75, statKey: "chains" },
            { id: "gold", icon: "🥇", title: "Gold", goal: 250, label: "Extra chains", xp: 150, statKey: "chains" }
        ],
        freestyle: { label: "Extra chains", xpEvery: 50, xpAmount: 1, statKey: "chains" }
    },
    {
        id: "single-crochet", kind: "Lesson", number: "03", category: "Foundations",
        title: "Single Crochet", description: "Learn stitch finding, counting and turning while building steady single-crochet rows.", xp: 300,
        sticker: { icon: "🧱", title: "Row Keeper", description: "Your rows are holding their shape and their stitch count." },
        tasks: [
            { id: "learn", type: "checkbox", text: "Learn how to make one single crochet" },
            { id: "steady-row", type: "checkbox", text: "Make one row of at least 10 single crochets without losing stitches" },
            { id: "square-one", type: "checkbox", text: "Make one 10 × 10 single-crochet square while counting and turning" },
            { id: "square-two", type: "checkbox", text: "Make a second 10 × 10 square without a tutorial. Keep both for the next lesson" },
            { id: "count", type: "number", text: "Track 200 single crochet stitches total", goal: 200, label: "Single crochet stitches", statKey: "sc" }
        ],
        mastery: [
            { id: "bronze", icon: "🥉", title: "Bronze", goal: 150, label: "Extra single crochet", xp: 60, statKey: "sc" },
            { id: "silver", icon: "🥈", title: "Silver", goal: 300, label: "Extra single crochet", xp: 120, statKey: "sc" },
            { id: "gold", icon: "🥇", title: "Gold", goal: 400, label: "Extra single crochet", xp: 250, statKey: "sc" }
        ],
        freestyle: { label: "Extra single crochet", xpEvery: 100, xpAmount: 1, statKey: "sc" }
    },
    {
        id: "slip-stitch", kind: "Lesson", number: "04", category: "Foundations",
        title: "Slip Stitch", description: "Use the low-profile stitch for moving, finishing and joining pieces together.", xp: 220,
        sticker: { icon: "🧷", title: "Seam Starter", description: "Separate pieces can now become one piece." },
        tasks: [
            { id: "learn", type: "checkbox", text: "Learn how to make one slip stitch" },
            { id: "circle", type: "checkbox", text: "Make a chain of at least 10 stitches and join the ends with a slip stitch to form a circle" },
            { id: "join", type: "checkbox", text: "Slip stitch your two saved 10 × 10 single-crochet squares together" },
            { id: "count", type: "number", text: "Track 50 slip stitches total", goal: 50, label: "Slip stitches", statKey: "slst" }
        ],
        mastery: [
            { id: "bronze", icon: "🥉", title: "Bronze", goal: 50, label: "Extra slip stitches", xp: 50, statKey: "slst" },
            { id: "silver", icon: "🥈", title: "Silver", goal: 100, label: "Extra slip stitches", xp: 100, statKey: "slst" },
            { id: "gold", icon: "🥇", title: "Gold", goal: 150, label: "Extra slip stitches", xp: 200, statKey: "slst" }
        ],
        freestyle: { label: "Extra slip stitches", xpEvery: 100, xpAmount: 1, statKey: "slst" }
    },
    {
        id: "tall-stitches", kind: "Lesson", number: "05", category: "Foundations",
        title: "Tall Stitches", description: "Compare half double, double and treble crochet, then grind the taller stitch structure until it clicks.", xp: 350,
        sticker: { icon: "🏗️", title: "Height Unlocked", description: "You can build crochet stitches at more than one height." },
        tasks: [
            { id: "learn", type: "checkbox", text: "Learn US half double, double and treble crochet" },
            { id: "hdc-count", type: "number", text: "Make 50 half double crochet stitches", goal: 50, label: "HDC stitches", statKey: "hdc" },
            { id: "dc-count", type: "number", text: "Make 100 double crochet stitches", goal: 100, label: "DC stitches", statKey: "dc" },
            { id: "tr-count", type: "number", text: "Make 100 treble crochet stitches", goal: 100, label: "TR stitches", statKey: "tr" },
            { id: "ladder", type: "checkbox", text: "Make one stitch-ladder swatch with HDC, DC and TR rows without a tutorial" }
        ],
        mastery: [
            { id: "bronze", icon: "🥉", title: "Bronze", goal: 100, label: "Extra tall stitches", xp: 75, statKey: "tall" },
            { id: "silver", icon: "🥈", title: "Silver", goal: 250, label: "Extra tall stitches", xp: 150, statKey: "tall" },
            { id: "gold", icon: "🥇", title: "Gold", goal: 500, label: "Extra tall stitches", xp: 300, statKey: "tall" }
        ],
        freestyle: { label: "Extra tall stitches", xpEvery: 100, xpAmount: 1, statKey: "tall" }
    },
    {
        id: "scrunchie", kind: "Project", number: "01", category: "Foundations",
        title: "Scrunchie", description: "Use familiar stitches in a forgiving real object, then experiment with how extra rounds and stitch placement change the ruffle.", xp: 500, boss: true,
        sticker: { icon: "🎀", title: "Ruffle Rookie", description: "Your first repeatable crochet accessory is complete." },
        tasks: [
            { id: "tutorial", type: "checkbox", text: "Choose a beginner scrunchie tutorial that uses at least 3 main stitches you already know (for example SC, DC and TR; joining slip stitches do not count)" },
            { id: "rounds", type: "checkbox", text: "Crochet one base round around the hair elastic, then add at least 2 more rounds using familiar stitches" },
            { id: "experiment", type: "checkbox", text: "On your second scrunchie, experiment on your own: add another round or place more stitches into some stitches and observe how the ruffle changes" },
            { id: "count", type: "number", text: "Complete 2 scrunchies", goal: 2, label: "Scrunchies completed", statKey: "scrunchies" }
        ],
        mastery: [
            { id: "bronze", icon: "🥉", title: "Bronze", goal: 5, label: "More scrunchies", xp: 100, statKey: "scrunchies" },
            { id: "silver", icon: "🥈", title: "Silver", goal: 10, label: "More scrunchies", xp: 200, statKey: "scrunchies" },
            { id: "gold", icon: "🥇", title: "Gold", goal: 15, label: "More scrunchies", xp: 400, statKey: "scrunchies" }
        ],
        freestyle: { label: "Extra scrunchies", xpEvery: 1, xpAmount: 1, statKey: "scrunchies" }
    },
    {
        id: "magic-ring", kind: "Lesson", number: "06", category: "Rounds & Shaping",
        title: "Magic Ring", description: "Start circular crochet from an adjustable center and get comfortable working into it.", xp: 200,
        sticker: { icon: "⭕", title: "Ring Summoner", description: "Circular crochet now has a clean starting point." },
        tasks: [
            { id: "learn", type: "checkbox", text: "Learn one magic ring method" },
            { id: "work-into", type: "checkbox", text: "Work stitches into the ring and close the center" },
            { id: "count", type: "number", text: "Make 5 usable magic rings", goal: 5, label: "Magic rings made", statKey: "magicRings" }
        ],
        mastery: [
            { id: "bronze", icon: "🥉", title: "Bronze", goal: 10, label: "Extra magic rings", xp: 40, statKey: "magicRings" },
            { id: "silver", icon: "🥈", title: "Silver", goal: 20, label: "Extra magic rings", xp: 80, statKey: "magicRings" },
            { id: "gold", icon: "🥇", title: "Gold", goal: 40, label: "Extra magic rings", xp: 160, statKey: "magicRings" }
        ],
        freestyle: { label: "Extra magic rings", xpEvery: 10, xpAmount: 1, statKey: "magicRings" }
    },
    {
        id: "increase-decrease", kind: "Lesson", number: "07", category: "Rounds & Shaping",
        title: "Increase & Decrease", description: "Control stitch count deliberately so crochet can expand or contract instead of staying flat by accident.", xp: 300,
        sticker: { icon: "↕️", title: "Shape Control", description: "You can now add and remove width on purpose." },
        tasks: [
            { id: "increase", type: "checkbox", text: "Learn how to make an increase" },
            { id: "decrease", type: "checkbox", text: "Learn how to make a decrease" },
            { id: "inc-count", type: "number", text: "Practice 20 increases", goal: 20, label: "Increases", statKey: "increases" },
            { id: "dec-count", type: "number", text: "Practice 20 decreases", goal: 20, label: "Decreases", statKey: "decreases" }
        ],
        mastery: [
            { id: "bronze", icon: "🥉", title: "Bronze", goal: 25, label: "Extra shaping reps", xp: 50 },
            { id: "silver", icon: "🥈", title: "Silver", goal: 50, label: "Extra shaping reps", xp: 100 },
            { id: "gold", icon: "🥇", title: "Gold", goal: 100, label: "Extra shaping reps", xp: 200 }
        ],
        freestyle: { label: "Extra shaping reps", xpEvery: 25, xpAmount: 1 }
    },
    {
        id: "circular-control", kind: "Lesson", number: "08", category: "Rounds & Shaping",
        title: "Circular Control", description: "Use increase frequency to see why one circle lies flat while another begins turning into a bowl.", xp: 300,
        sticker: { icon: "🌀", title: "Circle Tamer", description: "Flat, curved and ruffled rounds are starting to make sense." },
        tasks: [
            { id: "flat", type: "checkbox", text: "Make a small circle that stays reasonably flat" },
            { id: "bowl", type: "checkbox", text: "Make a small bowl by reducing how often you increase" },
            { id: "compare", type: "checkbox", text: "Compare both pieces and explain what changed the shape" }
        ],
        mastery: [
            { id: "bronze", icon: "🥉", title: "Bronze", goal: 2, label: "Extra circular samples", xp: 50 },
            { id: "silver", icon: "🥈", title: "Silver", goal: 4, label: "Extra circular samples", xp: 100 },
            { id: "gold", icon: "🥇", title: "Gold", goal: 8, label: "Extra circular samples", xp: 200 }
        ],
        freestyle: { label: "Extra circular samples", xpEvery: 2, xpAmount: 1 }
    },
    {
        id: "basic-forms", kind: "Lesson", number: "09", category: "Rounds & Shaping",
        title: "Basic Forms", description: "Move beyond rectangles by shaping simple forms with stitch placement, increases and decreases.", xp: 300,
        sticker: { icon: "🔺", title: "Form Finder", description: "Crochet no longer has to stay rectangular." },
        tasks: [
            { id: "triangle", type: "checkbox", text: "Make one small triangle" },
            { id: "second-form", type: "checkbox", text: "Make one other simple shaped piece using increases or decreases" },
            { id: "petals", type: "number", text: "Practice 10 simple petals", goal: 10, label: "Petals made" },
            { id: "memory", type: "checkbox", text: "Repeat one form or petal without following the tutorial step by step" }
        ],
        mastery: [
            { id: "bronze", icon: "🥉", title: "Bronze", goal: 2, label: "Extra shaped pieces", xp: 50 },
            { id: "silver", icon: "🥈", title: "Silver", goal: 4, label: "Extra shaped pieces", xp: 100 },
            { id: "gold", icon: "🥇", title: "Gold", goal: 8, label: "Extra shaped pieces", xp: 200 }
        ],
        freestyle: { label: "Extra shaped pieces", xpEvery: 2, xpAmount: 1 }
    },
    {
        id: "coaster", kind: "Project", number: "02", category: "Rounds & Shaping",
        title: "Flower Coaster", description: "Finish the chapter with a flat circular coaster, then turn the edge into a simple flower with repeated petals.", xp: 450, boss: true,
        sticker: { icon: "🌼", title: "Bloom Builder", description: "A controlled flat round has grown its first decorative petal edge." },
        tasks: [
            { id: "plan", type: "checkbox", text: "Choose a simple one-color circular coaster pattern" },
            { id: "flat", type: "checkbox", text: "Keep the coaster reasonably flat while growing the circle" },
            { id: "petal-edge", type: "checkbox", text: "Add a simple petal edge using the petal technique from Basic Forms" },
            { id: "finish", type: "checkbox", text: "Finish the flower coaster and weave in the ends" },
            { id: "count", type: "number", text: "Complete one coaster", goal: 1, label: "Coasters completed", statKey: "coasters" }
        ],
        mastery: [
            { id: "bronze", icon: "🥉", title: "Bronze", goal: 2, label: "More coasters", xp: 75, statKey: "coasters" },
            { id: "silver", icon: "🥈", title: "Silver", goal: 4, label: "More coasters", xp: 150, statKey: "coasters" },
            { id: "gold", icon: "🥇", title: "Gold", goal: 8, label: "More coasters", xp: 300, statKey: "coasters" }
        ],
        freestyle: { label: "Extra coasters", xpEvery: 1, xpAmount: 1, statKey: "coasters" }
    },
    {
        id: "sphere", kind: "Lesson", number: "10", category: "3D / Amigurumi",
        title: "Sphere", description: "Turn circular shaping into a closed 3D form using increases, straight rounds and decreases.", xp: 350,
        sticker: { icon: "⚪", title: "Volume Unlocked", description: "Your crochet has officially left the flat plane." },
        tasks: [
            { id: "sphere", type: "checkbox", text: "Crochet one small sphere" },
            { id: "stuff", type: "checkbox", text: "Stuff the sphere before closing it" },
            { id: "close", type: "checkbox", text: "Decrease and close the opening neatly" },
            { id: "count", type: "number", text: "Complete one sphere", goal: 1, label: "Spheres completed", statKey: "spheres" }
        ],
        mastery: [
            { id: "bronze", icon: "🥉", title: "Bronze", goal: 2, label: "Extra spheres", xp: 75, statKey: "spheres" },
            { id: "silver", icon: "🥈", title: "Silver", goal: 4, label: "Extra spheres", xp: 150, statKey: "spheres" },
            { id: "gold", icon: "🥇", title: "Gold", goal: 8, label: "Extra spheres", xp: 300, statKey: "spheres" }
        ],
        freestyle: { label: "Extra spheres", xpEvery: 1, xpAmount: 1, statKey: "spheres" }
    },
    {
        id: "elongated-form", kind: "Lesson", number: "11", category: "3D / Amigurumi",
        title: "Elongated Form", description: "Stretch the same shaping logic into a longer capsule or body form.", xp: 350,
        sticker: { icon: "🥚", title: "Shape Stretcher", description: "You can control length without losing the 3D structure." },
        tasks: [
            { id: "form", type: "checkbox", text: "Make one larger elongated or capsule-shaped form" },
            { id: "straight", type: "checkbox", text: "Use straight rounds to control the length before decreasing" },
            { id: "compare", type: "checkbox", text: "Compare how the sphere and elongated form were constructed" }
        ],
        mastery: [
            { id: "bronze", icon: "🥉", title: "Bronze", goal: 2, label: "Extra elongated forms", xp: 75 },
            { id: "silver", icon: "🥈", title: "Silver", goal: 4, label: "Extra elongated forms", xp: 150 },
            { id: "gold", icon: "🥇", title: "Gold", goal: 8, label: "Extra elongated forms", xp: 300 }
        ],
        freestyle: { label: "Extra elongated forms", xpEvery: 1, xpAmount: 1 }
    },
    {
        id: "stuffing-shape", kind: "Lesson", number: "12", category: "3D / Amigurumi",
        title: "Stuffing & Shape Control", description: "Learn how stuffing amount and distribution change the final form.", xp: 250,
        sticker: { icon: "☁️", title: "Stuffing Sense", description: "Soft forms are now shaped from the inside as well as the stitches." },
        tasks: [
            { id: "light", type: "checkbox", text: "Stuff one practice form lightly and observe the shape" },
            { id: "firm", type: "checkbox", text: "Add more stuffing and compare the result" },
            { id: "even", type: "checkbox", text: "Redistribute stuffing until the form looks even" }
        ],
        mastery: [
            { id: "bronze", icon: "🥉", title: "Bronze", goal: 2, label: "Extra stuffing practice", xp: 50 },
            { id: "silver", icon: "🥈", title: "Silver", goal: 4, label: "Extra stuffing practice", xp: 100 },
            { id: "gold", icon: "🥇", title: "Gold", goal: 8, label: "Extra stuffing practice", xp: 200 }
        ],
        freestyle: { label: "Extra stuffing practice", xpEvery: 2, xpAmount: 1 }
    },
    {
        id: "joining-forms", kind: "Lesson", number: "13", category: "3D / Amigurumi",
        title: "Joining 3D Forms", description: "Build a tiny practice character from separate pieces and learn how placement changes the result.", xp: 400,
        sticker: { icon: "🧩", title: "Parts Assembled", description: "Separate crochet forms can now become one object." },
        tasks: [
            { id: "head", type: "checkbox", text: "Make one simple head" },
            { id: "body", type: "checkbox", text: "Make one simple body" },
            { id: "arms", type: "checkbox", text: "Make two simple arms" },
            { id: "join", type: "checkbox", text: "Join the head, body and both arms into one practice figure" }
        ],
        mastery: [
            { id: "bronze", icon: "🥉", title: "Bronze", goal: 4, label: "Extra joined parts", xp: 75 },
            { id: "silver", icon: "🥈", title: "Silver", goal: 8, label: "Extra joined parts", xp: 150 },
            { id: "gold", icon: "🥇", title: "Gold", goal: 16, label: "Extra joined parts", xp: 300 }
        ],
        freestyle: { label: "Extra joined parts", xpEvery: 4, xpAmount: 1 }
    },
    {
        id: "amigurumi-project", kind: "Project", number: "03", category: "3D / Amigurumi",
        title: "Build an Amigurumi", description: "Choose a simple design and combine the 3D skills into one finished character or object.", xp: 650, boss: true,
        sticker: { icon: "🧸", title: "Form Builder", description: "A multi-part 3D crochet project is complete." },
        tasks: [
            { id: "choose", type: "checkbox", text: "Choose a simple amigurumi design you want to make" },
            { id: "parts", type: "checkbox", text: "Crochet at least 4 separate parts for the project" },
            { id: "stuff", type: "checkbox", text: "Stuff and shape the pieces that need volume" },
            { id: "join", type: "checkbox", text: "Join the parts securely and finish the project" },
            { id: "count", type: "number", text: "Complete one amigurumi project", goal: 1, label: "Amigurumi completed", statKey: "amigurumi" }
        ],
        mastery: [
            { id: "bronze", icon: "🥉", title: "Bronze", goal: 1, label: "More amigurumi", xp: 100, statKey: "amigurumi" },
            { id: "silver", icon: "🥈", title: "Silver", goal: 2, label: "More amigurumi", xp: 200, statKey: "amigurumi" },
            { id: "gold", icon: "🥇", title: "Gold", goal: 4, label: "More amigurumi", xp: 400, statKey: "amigurumi" }
        ],
        freestyle: { label: "Extra amigurumi", xpEvery: 1, xpAmount: 1, statKey: "amigurumi" }
    },
    { id: "lace-openwork", kind: "Lesson", number: "14", category: "Lace & Openwork", title: "Lace & Openwork", description: "", xp: 0, placeholder: true, tasks: [], mastery: [] },
    { id: "tapestry-colorwork", kind: "Lesson", number: "15", category: "Tapestry & Colorwork", title: "Tapestry & Colorwork", description: "", xp: 0, placeholder: true, tasks: [], mastery: [] },
    { id: "garments", kind: "Lesson", number: "16", category: "Garments", title: "Garments", description: "", xp: 0, placeholder: true, tasks: [], mastery: [] }
];

const STAT_META = [
    { key: "slipKnots", label: "Slip Knots", group: "Techniques", unlockLesson: "slip-knot" },
    { key: "chains", label: "Chains", group: "Stitches", unlockLesson: "chain" },
    { key: "sc", label: "Single Crochet", group: "Stitches", unlockLesson: "single-crochet" },
    { key: "slst", label: "Slip Stitches", group: "Stitches", unlockLesson: "slip-stitch" },
    { key: "hdc", label: "Half Double Crochet", group: "Stitches", unlockLesson: "tall-stitches" },
    { key: "dc", label: "Double Crochet", group: "Stitches", unlockLesson: "tall-stitches" },
    { key: "tr", label: "Treble Crochet", group: "Stitches", unlockLesson: "tall-stitches" },
    { key: "tall", label: "Extra Tall-Stitch Grind", group: "Training", unlockLesson: "tall-stitches" },
    { key: "scrunchies", label: "Scrunchies", group: "Projects", unlockLesson: "scrunchie" },
    { key: "magicRings", label: "Magic Rings", group: "Techniques", unlockLesson: "magic-ring" },
    { key: "coasters", label: "Coasters", group: "Projects", unlockLesson: "coaster" },
    { key: "spheres", label: "Spheres", group: "Forms", unlockLesson: "sphere" },
    { key: "amigurumi", label: "Amigurumi Projects", group: "Projects", unlockLesson: "amigurumi-project" }
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

        (lesson.mastery || []).forEach(tier => {
            mastery[tier.id] = 0;
        });

        lessonStates[lesson.id] = {
            tasks,
            counters,
            mastery,
            freestyle: 0,
            personalTutorial: "",
            started: false
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
    const defaults = createDefaultState();
    const raw = localStorage.getItem(SAVE_KEY);

    if (!raw) {
        return defaults;
    }

    try {
        const parsed = JSON.parse(raw);
        const merged = {
            ...defaults,
            ...parsed,
            version: SAVE_VERSION,
            lessons: { ...defaults.lessons }
        };

        lessons.forEach(lesson => {
            const oldLesson = parsed.lessons?.[lesson.id];
            const freshLesson = defaults.lessons[lesson.id];

            if (!oldLesson) {
                merged.lessons[lesson.id] = freshLesson;
                return;
            }

            merged.lessons[lesson.id] = {
                ...freshLesson,
                ...oldLesson,
                tasks: { ...freshLesson.tasks, ...(oldLesson.tasks || {}) },
                counters: { ...freshLesson.counters, ...(oldLesson.counters || {}) },
                mastery: { ...freshLesson.mastery, ...(oldLesson.mastery || {}) }
            };
        });

        return merged;
    }
    catch {
        return defaults;
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
    if (lesson.placeholder) return false;
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
    if (lesson.placeholder || !lesson.mastery?.length) return false;
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

    (lesson.mastery || []).forEach((tier, index) => {
        if (masteryTierIsComplete(lesson, index)) {
            rank = index;
        }
    });

    return rank;
}

function allMasteriesComplete(lesson) {
    if (lesson.placeholder || !lesson.mastery?.length) return false;
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
        if (lesson.freestyle) {
            const units = Math.floor(freestyle / lesson.freestyle.xpEvery);
            xp += units * lesson.freestyle.xpAmount;
        }
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
    if (lesson.placeholder) {
        return { label: "Planned", icon: "◇", className: "planned" };
    }

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
   CHARACTER STATS
======================================== */

function statIsUnlocked(meta) {
    const lesson = lessons.find(item => item.id === meta.unlockLesson);
    return lesson ? lessonHasStarted(lesson) || coreIsComplete(lesson) : false;
}

function getStatValue(statKey) {
    let total = 0;

    lessons.forEach(lesson => {
        const lessonState = state.lessons[lesson.id];
        if (!lessonState) return;

        lesson.tasks.forEach(task => {
            if (task.type === "number" && task.statKey === statKey) {
                total += Number(lessonState.counters[task.id] || 0);
            }
        });

        (lesson.mastery || []).forEach(tier => {
            if (tier.statKey === statKey) {
                total += Number(lessonState.mastery[tier.id] || 0);
            }
        });

        if (lesson.freestyle?.statKey === statKey) {
            total += Number(lessonState.freestyle || 0);
        }
    });

    return total;
}

function renderCharacterStats() {
    const container = document.querySelector("#stats-content");
    if (!container) return;

    const unlocked = STAT_META.filter(statIsUnlocked);
    const groups = [...new Set(unlocked.map(item => item.group))];

    if (!unlocked.length) {
        container.innerHTML = `<p class="stats-empty">Start your first lesson to unlock character stats.</p>`;
        return;
    }

    container.innerHTML = groups.map(group => {
        const rows = unlocked
            .filter(item => item.group === group)
            .map(item => `
                <div class="stat-row">
                    <span>${item.label}</span>
                    <strong>${getStatValue(item.key).toLocaleString()}</strong>
                </div>
            `).join("");

        return `
            <section class="stats-group">
                <p class="eyebrow">${group}</p>
                <div class="stats-list">${rows}</div>
            </section>
        `;
    }).join("");
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

const CATEGORY_META = {
    "Foundations": "Arc 01",
    "Rounds & Shaping": "Arc 02",
    "3D / Amigurumi": "Arc 03",
    "Lace & Openwork": "Arc 04",
    "Tapestry & Colorwork": "Arc 05",
    "Garments": "Arc 06"
};

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
                    <p class="eyebrow">${CATEGORY_META[category] || "Course"}</p>
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
                    ${lesson.placeholder
                        ? `<span>Structure coming later</span>`
                        : `<span>${completedTasks} / ${lesson.tasks.length} core tasks</span><span>+${lesson.xp} core XP</span>`
                    }
                </div>

                <button class="card-button" type="button">
                    ${lesson.placeholder ? "View roadmap" : `View ${lesson.kind.toLowerCase()}`}
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

    if (lesson.placeholder) {
        container.innerHTML = `
            <p class="eyebrow">${lesson.category} · Roadmap</p>
            <h2>${lesson.title}</h2>
            <p class="placeholder-copy">This chapter is saved in the roadmap. Its lesson structure will be designed later.</p>
        `;
        return;
    }

    const coreComplete = coreIsComplete(lesson);
    const fullMastery = allMasteriesComplete(lesson);

    container.innerHTML = `
        <p class="eyebrow">${lesson.category} · ${lesson.kind}</p>
        <h2>${lesson.title}</h2>
        <p>${lesson.description}</p>

        <section class="detail-block">
            <h3>Core Grind</h3>
            <div id="lesson-task-list"></div>
        </section>

        <section class="detail-block">
            <h3>Core Reward</h3>
            <div class="reward-box ${coreComplete ? "complete" : "locked"}">
                <strong>${coreComplete ? "✓ " : ""}+${lesson.xp} XP</strong>
                <p>
                    ${coreComplete
                        ? `${lesson.sticker.icon} ${lesson.sticker.title}`
                        : "🔒 Achievement locked"
                    }
                </p>
            </div>
        </section>

        <section class="detail-block">
            <h3>My Tutorial</h3>
            <div class="tutorial-box">
                <strong>Save for myself</strong>
                <p class="mastery-note">Keep one tutorial or reference that works well for you. Replace it anytime.</p>
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
            <h3>Mastery</h3>
            <p>Core completion proves you can do it. Mastery is optional extra practice you can grind now or build naturally through future projects.</p>
            <div id="mastery-list" class="mastery-stack"></div>
        </section>

        ${fullMastery && lesson.freestyle
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

    if (fullMastery && lesson.freestyle) {
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

    if (!input || !saveButton || !output) return;

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

    if (!container || !lesson.mastery?.length) return;

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

    lessons.filter(lesson => !lesson.placeholder).forEach(lesson => {
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

document.querySelector("#stats-button").addEventListener("click", () => {
    renderCharacterStats();
    showView("stats-view");
});

document.querySelector("#stats-back").addEventListener("click", closeViews);

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
    const confirmed = confirm("Delete all Crochet Grind Tracker v0.3 progress?");

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
    renderCharacterStats();
}

renderEverything();
