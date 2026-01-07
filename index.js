function combineUsers(...arrays) {
  const merged = arrays.flat();
  const users = Array.from(new Set(merged)); // preserve first occurrence, remove duplicates
  const now = new Date();
  const merge_date = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`;
  return { users, merge_date };
}

module.exports = { combineUsers };