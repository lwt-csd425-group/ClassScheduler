// to-do: create sets of classes of which only one is required for prereqs
class Course {
    constructor(id, name, prereqs = [], completed = false) {
        this.id = id
        this.name = name
        this.prereqs = prereqs
        this.completed = completed
    }

    get canTake() {
        for (course of this.prereqs) {
            if (!course.completed) return false;
        }
        return true;
    }
}