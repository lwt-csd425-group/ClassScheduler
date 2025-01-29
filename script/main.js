class Course {
    constructor(id, name, prereqs = [], completed = false) {
        this.id = id;
        this.name = name;
        this.prereqs = prereqs;
        this.completed = completed;
    }

    get canTake() {
        return this.prereqs.every(prereq => prereq.completed);
    }
}

var courses = {};

function createCourse(id, name, prereqIds = []) {
    const prereqs = prereqIds.map(prereqId => courses[prereqId]).filter(Boolean);
    return (courses[id] = new Course(id, name, prereqs));
}

function getCourse(id) {
    return courses[id] || null;
}

function initializeCSDAASTCourses() {
    createCourse("CSD110", "Computer Programming Fundamentals with Python");
    createCourse("CSD112", "HTML and CSS");
    createCourse("ENGL&101", "English Composition I");

    createCourse("CS&141", "Computer Science I Java", ["CSD110"]);
    createCourse("CSD122", "JavaScript", ["CSD110", "CSD112"]);
    createCourse("CSD138", "Structured Query Language", ["CSD110"]);

    createCourse("CS141", "Computer Science II Java", ["CS&141"]);
    createCourse("CSD268", "Quality Assurance Methodologies", ["CS&141"]);
    createCourse("MATH141", "Pre-Calculus I");

    createCourse("ART102", "Introduction to 2D Design");
    createCourse("PHYS114", "General Physics I w/Lab");
    createCourse("SOC101", "Introduction to Sociology");

    createCourse("CSD230", "Programming For Mobile Devices", ["CS141"]);
    createCourse("CSD275", "PHP Scripting", ["CSD110", "CSD112"]);
    createCourse("CSD233", "C++ Programming", ["CS141"]);
}

initializeCSDAASTCourses();
