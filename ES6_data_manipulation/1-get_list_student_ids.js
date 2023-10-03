// Function to extract student IDs from a list of student objects
export default function getListStudentIds(list) {
  // Check if the provided argument is an array
  if (!Array.isArray(list)) {
    return [];
  }
  // Return an array of student IDs using the map function
  return list.map((student) => student.id);
}
