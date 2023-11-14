/* eslint-disable no-underscore-dangle */
export default class HolbertonCourse {
  /**
   * Creates a new HolbertonCourse class
   *
   * @param {String} name - The name of the course.
   * @param {Number} length - How long the course is (in months).
   * @param {String[]} students - The names of students in the course.
   *
   * Implement getters and setters for each attribute
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }
