import { Person } from "./Person.js";

export class Instructor extends Person {
  _instructorId: number;

  constructor(personName: string, id: number) {
    super(personName);
    this._instructorId = id;
  }
}
