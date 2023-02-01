export default function updateStudentGradeByCity(students, location, newgrade) {
  return students.filter((student) => student.location === location).map((stud) => {
    const grade = newgrade.find((grade) => stud.id === grade.studentId);
    return { ...stud, grade: grade ? grade.grade : 'N/A' };
  });
}
