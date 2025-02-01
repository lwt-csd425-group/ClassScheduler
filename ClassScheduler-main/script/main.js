class Course {
    constructor(id, name, prereqs = [], completed = false) {
        this.id = id;
        this.name = name;
        this.prereqs = prereqs;
        this.completed = completed;
    }

    get canTake() {
        return this.prereqs.every(prereq => {
            // arrays nested inside prereq array will be considered completed
            // if at least one class inside is complete (essentially an OR rule)
            if (Array.isArray(prereq)) {
                return prereq.some((prereqOption) => prereqOption?.completed);
            }
            // courses inside prereqs array must be completed
            else {
                return prereq.completed;
            }
        }
        );
    }
};

var courses = {};

function createCourse(id, name, prereqs) {
    return (courses[id] = new Course(id, name, prereqs));
}

/*function getCourse(id) {
    return courses[id] || null;
}*/

document.addEventListener("DOMContentLoaded", function () {
    const beginButton = document.getElementById("beginBtn");
    if (beginButton) {
        beginButton.addEventListener("click", function () {
            alert("Course Started!");
        });
    }
});
