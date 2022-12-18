import { Course } from "./Course.js";
import { Person } from "./Person.js";
Course;
let studentIds = 0;
export class Student extends Person {
    _studentId;
    _student_section;
    _student_email;
    _courses_enrolled;
    constructor(personName, studentSection) {
        super(personName);
        this._studentId = ++studentIds;
        this._student_section = studentSection;
        this._courses_enrolled = [];
    }
}
