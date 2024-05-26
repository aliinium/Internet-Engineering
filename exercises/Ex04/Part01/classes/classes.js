



class CoursePres {
    constructor(id, course, instructor) {
        this.id = id;
        this.course = course;
        this.instructor = instructor;
    }
}

class SelectedCourse {
    constructor(student, coursePres, grade) {
        this.student = student;
        this.coursePres = coursePres;
        this.grade = grade;
    }
}
