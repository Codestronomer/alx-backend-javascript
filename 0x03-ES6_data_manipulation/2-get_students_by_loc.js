export default function getStudentsByLocation(students, location) {
  if (!Array.isArray(students)) return [];

  const arr = students.filter((student) => student.location === location);
  return arr;
}
