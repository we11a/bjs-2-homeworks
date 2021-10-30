function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) { 
    this.marks = [];
    this.marks.push(mark);
    } else {
      this.marks.push(mark);
    }
}

Student.prototype.addMarks = function (...mark) {
  this.marks = mark;
}

Student.prototype.getAverage = function() {
  return this.marks.reduce((sum, item, idx, arr) => {
    sum += item;
    if (idx === arr.length - 1) {
      return sum / arr.length;
    } else {
      return sum;
    }
  })
}


Student.prototype.exclude = function(reason) {
  this.excluded = reason;
  delete this.marks;
  delete this.subject;
}