function sumSalary(salaries) {
  let res = 0;

  for (let val in salaries) {
    if (isFinite(salaries[val])) {
      res += salaries[val];
    }
  }

  return res;
}
