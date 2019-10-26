class Person {
  constructor(attrs) {
    this.name = attrs.name;
    this.age = attrs.age;
    this.location = attrs.location;
  }

  speak() {
    console.log(`Hello, my name is ${this.name}, I am from ${this.location}`);
  }
}

class Instructor extends Person {
  constructor(attrs) {
    super(attrs);
    this.speciality = attrs.speciality;
    this.favLanguage = attrs.favLanguage;
    this.catchPhrase = attrs.catchPhrase;
  }

  demo(subject) {
    console.log(
      `Hello my name is ${this.name} and today we are learning about ${subject} where subject is the param passed in.`
    );
  }

  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }

  changeGrade(student) {
    const randomPoint = Math.ceil((Math.random() * 100) / 5); // Random number between 0 to 20
    const randomOperation = Math.round(Math.random()) ? true : false;
    student.grade = randomOperation
      ? student.grade + randomPoint // add if true
      : student.grade - randomPoint; // subtract if false
    const message = randomOperation
      ? `${this.name} added ${randomPoint} points to ${student.name}'s grade. Final grade is ${student.grade}` // addition message
      : `${this.name} subtracted ${randomPoint} points from ${student.name}'s grade. Final grade is ${student.grade}`; // subtraction message
    console.log(message);
  }
}

class Student extends Person {
  constructor(attrs) {
    super(attrs);
    this.previousBackground = attrs.previousBackground;
    this.className = attrs.className;
    this.favSubjects = attrs.favSubjects;
    this.grade = attrs.grade;
  }

  listSubjects() {
    console.log(`${this.name}'s favorite topics are:`);
    return this.favSubjects.map((item, index) =>
      console.log(`${index + 1}.`, item)
    );
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}.`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }

  graduate() {
    const gradMessage =
      this.grade < 70
        ? `${this.name}'s grade is ${this.grade}, ergo not ready for graduation.`
        : `Congratulations, ${this.name}! Your grade ${this.grade} helps you graduate this year!`;
    console.log(gradMessage);
  }
}

class TeamLead extends Instructor {
  constructor(attrs) {
    super(attrs);
    this.gradClassName = attrs.gradClassName;
    this.favInstructor = attrs.favInstructor;
  }

  standUp(channel) {
    console.log(
      `${this.name} announces to ${channel}, @channel standy times!​​​​​`
    );
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

const pace = new Instructor({
  name: "Pace Ellsworth",
  age: "33",
  location: "Somewhere",
  speciality: "HTML, CSS, and JS",
  favLanguage: "CSS",
  catchPhrase: "Allright guys"
});

const king = new Instructor({
  name: "David",
  age: "66",
  location: "His Kingdom",
  speciality: "C#",
  favLanguage: "Assembly",
  catchPhrase: "My reign begins"
});

const jeffrey = new TeamLead({
  name: "Jeffrey Whitaker",
  age: "27",
  location: "Seattle",
  speciality: "Redux",
  favLanguage: "React",
  catchPhrase: "How is everybody doing",
  gradClassName: "WEB100",
  favInstructor: "Pace Ellsworth"
});

const isla = new TeamLead({
  name: "Isla McNail",
  age: "23",
  location: "USA",
  speciality: "LESS",
  favLanguage: "Java",
  catchPhrase: "Hello everyone",
  gradClassName: "WEB101",
  favInstructor: "Pace Ellsworth"
});

const samet = new Student({
  name: "Samet Mutevelli",
  age: "29",
  location: "Los Angeles",
  previousBackground: "Academia",
  className: "WEBPT11",
  favSubjects: ["Javascript", "React", "Redux"],
  grade: 70
});

const zaza = new Student({
  name: "Batuhan Balta",
  age: "25",
  location: "Culver City",
  previousBackground: "Electrical Engineer",
  className: "WEBPT11",
  favSubjects: ["HTML", "CSS", "LESS", "Javascript"],
  grade: 75
});

pace.demo("HTML");
pace.grade(samet, "Javascript");
king.demo("Java");
king.grade(zaza, "LESS");

zaza.listSubjects();
samet.listSubjects();
zaza.PRAssignment("React");
samet.PRAssignment("Javascript");
zaza.sprintChallenge("HTML");
samet.sprintChallenge("CSS");

jeffrey.standUp("#afterhours");
isla.debugsCode(zaza, "Javascript");

pace.changeGrade(samet);

samet.graduate();
