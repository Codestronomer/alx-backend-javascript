export default function getListStudentIds(obj) {
  if (!Array.isArray(obj)) return [];

  const arr = obj.map((item) => item.id);
  return arr;
}
