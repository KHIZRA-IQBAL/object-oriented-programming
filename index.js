import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new person();
const programstart = async (persons) => {
    do {
        console.log('Welcome');
        const ans = await inquirer.prompt({
            name: 'select',
            type: 'list',
            message: 'whom would  you like to ineract with?',
            choices: ['stuff', 'student', 'exist']
        });
        if (ans.select == "stuff") {
            console.log('you approach staff room. please feel  free to ask any question');
        }
        else if (ans.select == "student") {
            const ans = await inquirer.prompt({
                name: 'student',
                type: 'input',
                message: 'enter  the student name you wish to engage  with:'
            });
            const student_meet = persons.students.find(val => val.name == ans.student);
            if (!student_meet) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`hello i am ${name.name}, nice to meet you`);
                console.log("New student added");
                console.log("Current student list:");
                console.log(persons.students);
            }
            else {
                console.log(`hello i am ${student_meet.name} nice to see you again`);
                console.log('Existing student list:');
                console.log(persons.students);
            }
        }
        else if (ans.select == "exist") {
            console.log('Existing the program');
            process.exit();
        }
    } while (true);
};
programstart(persons);
