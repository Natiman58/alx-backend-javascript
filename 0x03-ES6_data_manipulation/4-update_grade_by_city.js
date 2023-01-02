export default function updateStudentGradeByCity(arr, city, newGrades) {
  return arr.filter((array) => array.location === city).map((o) => ({ ...o, grade: newGrades.filter((newg) => newg.studentId === o.id).map((p) => p.grade)[0] || 'N/A' }));
}
