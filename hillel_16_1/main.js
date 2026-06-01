'use strict';

class Student {
    constructor(firstName, lastName, birthYear, grades = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = grades;

        this.attendance = new Array(25).fill(undefined);
    }

  
    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }


    getAverageGrade() {
        if (this.grades.length === 0) return 0;
        const sum = this.grades.reduce((total, grade) => total + grade, 0);
        return sum / this.grades.length;
    }

   
    #updateAttendance(status) {
        const nextIndex = this.attendance.findIndex(item => item === undefined);
        
        if (nextIndex !== -1) {
            this.attendance[nextIndex] = status;
        } else {
            console.warn("Журнал відвідуваності заповнений! Максимум 25 записів.");
        }
    }

    present() {
        this.#updateAttendance(true);
    }

    absent() {
        this.#updateAttendance(false);
    }

    summary() {
        const avgGrade = this.getAverageGrade();
        
        const recordedClasses = this.attendance.filter(item => item !== undefined);
        const totalClasses = recordedClasses.length;
        
        if (totalClasses === 0) return "Дані про відвідуваність відсутні.";

        const presentCount = recordedClasses.filter(item => item === true).length;
        const avgAttendance = presentCount / totalClasses;

     
        if (avgGrade > 90 && avgAttendance > 0.9) {
            return "Молодець!";
        } else if (avgGrade > 90 || avgAttendance > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }
}


const student1 = new Student("Олег", "Петренко", 2003, [95, 98, 92, 100]);
for (let i = 0; i < 10; i++) student1.present(); 
console.log(`${student1.firstName} ${student1.lastName}: Вік ${student1.getAge()}, Середня оцінка ${student1.getAverageGrade()}`);
console.log(`Результат: ${student1.summary()}`);


const student2 = new Student("Анна", "Марченко", 2004, [80, 85, 75, 88]);
for (let i = 0; i < 9; i++) student2.present();
student2.absent(); 
console.log(`${student2.firstName}: Результат: ${student2.summary()}`);


const student3 = new Student("Ігор", "Сидоренко", 2002, [40, 55, 60]);
student3.absent();
student3.absent();
student3.present();
console.log(`${student3.firstName}: Результат: ${student3.summary()}`);