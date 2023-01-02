export default function getListStudentIds(object) {
  if (Array.isArray(object)) {
    return object.map((obj) => obj.firstName);
  }
  return [];
}
