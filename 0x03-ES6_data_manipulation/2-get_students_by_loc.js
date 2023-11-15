/**
 * Function getStudentsByLocation that returns an array of
 * objects who are located in a specific city.
 *
 * @param {Array} students - The list of students to filter
 * @param {string} city - The city to filter students by
 * @return {Array} The list of students from the specified city
 */
export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    // Filter the students by city and return the result
    return students.filter((student) => student.location === city);
  }
  // If students is not an array, return an empty array
  return [];
}
