export class Course {
    course_id;
    course_name;
    course_description;
    course_duration;
    course_credit_hours;
    constructor(id, name, description, duration, credit_hour) {
        this.course_id = id;
        this.course_description = description;
        this.course_name = name;
        this.course_duration = duration;
        this.course_credit_hours = credit_hour;
    }
}
