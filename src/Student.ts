import { Course } from "./Course.js";
import { Person } from "./Person.js";
Course;

let studentIds = 0;

export class Student extends Person {
  _studentId: number;
  _student_section: string;
  _student_email?: string;
  _courses_enrolled: Course[];
  _password: string;
  _status: string;

  constructor(
    personName: string,
    studentSection: string,
    password: string,
    status: string
  ) {
    super(personName);
    this._studentId = ++studentIds;
    this._student_section = studentSection;
    this._courses_enrolled = [];
    this._password = password;
    this._status = status;
  }

  setPassword(password: string) {
    this._password = password;
  }

  setCourseEnrolled() {}
}
