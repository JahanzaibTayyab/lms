export class Course {
  course_id: number;
  course_name: string;
  course_description: string;
  course_duration: string;
  course_credit_hours: number;

  constructor(
    id: number,
    name: string,
    description: string,
    duration: string,
    credit_hour: number
  ) {
    this.course_id = id;
    this.course_description = description;
    this.course_name = name;
    this.course_duration = duration;
    this.course_credit_hours = credit_hour;
  }
}
