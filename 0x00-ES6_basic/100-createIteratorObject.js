export default function createIteratorObject(report) {
  return {
    * [Symbol.iterator]() {
      for (const department of Object.keys(report.allEmployees)) {
        const employees = report.allEmployees[department];
        for (const employee of employees) {
          yield employee;
        }
      }
    },
  };
}
