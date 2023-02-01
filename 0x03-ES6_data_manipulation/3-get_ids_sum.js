export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) return [];

  const initialVal = 0;
  const sum = students.reduce((accumulator, student) => student.id + accumulator, initialVal);
  return sum;
}
