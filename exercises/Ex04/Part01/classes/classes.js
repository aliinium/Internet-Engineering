class Course {
    constructor(id, title, unitNo) {
        this.id = id;
        this.title = title;
        this.unitNo = unitNo;
    }
}

class Instructor {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

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
