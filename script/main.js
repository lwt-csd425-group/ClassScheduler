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

function createCourse(id, name, prereqs) {
    return (courses[id] = new Course(id, name, prereqs));
}

/*function getCourse(id) {
    return courses[id] || null;
}*/

