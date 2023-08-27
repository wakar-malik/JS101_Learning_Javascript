// Create an object with the following functionality
// Ability to add 3 students details and their marks in 3 subjects
// Method to find the student with the least total.
// Method to find the student with the highest total.

const obj = {
  students: {},
  totalMarks: [],
  addStudents(studentName, engMarks, hindiMarks, mathMarks) {
    this[studentName] = {
      english: engMarks,
      hindi: hindiMarks,
      math: mathMarks,
    };
  },
  total(name) {
    let grandTotal = 0;
    for (const sub in this[name]) {
      grandTotal += this[name][sub];
    }

    this.totalMarks.push({ name, grandTotal });
  },

  leastTotal() {
    let lowest = Infinity;
    let name = "";

    for (let i = 0; i < this.totalMarks.length; i++) {
      if (this.totalMarks[i].grandTotal < lowest) {
        lowest = this.totalMarks[i].grandTotal;
        name = this.totalMarks[i].name;
      }
    }

    console.log("Lowest Total ---- ", name, lowest);
  },

  highestTotal() {
    let highest = -Infinity;
    let name = "";

    for (let i = 0; i < this.totalMarks.length; i++) {
      if (this.totalMarks[i].grandTotal > highest) {
        highest = this.totalMarks[i].grandTotal;
        name = this.totalMarks[i].name;
      }
    }

    console.log("Highest Total ---- ", name, highest);
  },
};

obj.addStudents("shawn", 70, 80, 90);
obj.addStudents("peter", 85, 70, 92);
obj.addStudents("mark", 10, 20, 30);

obj.total("shawn");
obj.total("peter");
obj.total("mark");

obj.leastTotal();
obj.highestTotal();
