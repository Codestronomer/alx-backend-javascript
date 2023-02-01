export default function getListStudentIds(obj) {
  const arr = obj.map((item) => item.id);
  return arr;
}
