// Function to filter students based on their location
export default function getListStudentsByLocation(listOfStudents, city) {
  // Use the filter function to return students from the specified city
  return listOfStudents.filter((student) => student.location === city);
}
