var courses = {};

function createCourse(id, name, prereqs) {
    return (courses[id] = new Course(id, name, prereqs));
}

function getCourse(id) {
    return courses[id];
}

function initializeCSDAASTCourses() {
    var csd110 = createCourse("CSD110", "Computer Programming Fundamentals with Python");
    var csd111 = createCourse("CSD112", "HTML and CSS");
    var engl101 = createCourse("ENGL&101", "English Composition I");

    var cs141 = createCourse("CS&141", "Computer Science I Java", [csd110]);
    var csd122 = createCourse("CSD122", "JavaScript", [csd110, csd112]);
    var csd138 = createCourse("CSD138", "Structured Query Language", [csd110]);

    var cs143 = createCourse("CS141", "Computer Science II Java", [cs141]);
    var cs268 = createCourse("CSD268", "Quality Assurance Methodologies", [cs141]);
    // to-do: simulate a MATH99 graduation / MATH141 placement button mayhaps
    var math141 = createCourse("MATH141", "Pre-Calculus I");

    var art102 = createCourse("ART102", "Introduction to 2D Design");
    var phys114 = createCourse("PHYS114", "General Physics I w/Lab");
    var soc101 = createCourse("SOC101", "Introduction to Sociology");

    var csd230 = createCourse("CSD230", "Programming For Mobile Devices", [cs143]);
    var csd275 = createCourse("CSD275", "PHP Scripting", [csd110, csd112]);
    var csd233 = createCourse("CSD233", "C++ Programming", [cs143]);

    var csd228 = createCourse("CSD228", "Programming with C#", [cs141]);
    var csd298 = createCourse("CSD298", "Technical Interview/Job Search", [csd143]);
    var dsgn290 = createCourse("DSGN290", "Portfolio/Job Search", [art102]);
    var csd297 = createCourse("CSD297", "IT Project", [csd112, csd122, csd138, cs141, csd228, csd268]);
}

initializeCsdAasTCourses();