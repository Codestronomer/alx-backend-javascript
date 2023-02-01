export default function getListStudentIds(obj) {
  const arr = [];
  obj.forEach((item) => arr.push(item.id));
  return arr;
}
