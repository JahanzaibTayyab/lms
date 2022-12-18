import { Course } from "./Course.js";
import { Instructor } from "./Instructor.js";
import { Student } from "./Student.js";

export class LMS {
  _students: Student[] = [];
  _instructors: Instructor[] = [];
  _courses: Course[] = [];

  signIn(id: number, password: string) {
    const student = this._students.find((student) => {
      student._id === id;
    });
    if (student) {
      if (student._password === password) {
      }
    } else {
    }
  }
}
