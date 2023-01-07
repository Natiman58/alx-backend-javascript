
interface DirectorInterface {
    // methods return strings
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;

}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }
    
    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }
    
    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }

    workTeacherTasks(): string {
        return 'Getting to work';
    }

}

// A function that returns a Teacher or Director instance and accepts one arg 'salary'
function createEmployee(salary: string | number): Teacher | Director {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    };
    return new Director();

}
console.log(createEmployee(200));
console.log(createEmployee(1000));



// A booloean function that accepts employee class as an argument
// use employee as a predicate
// and returns the instance of the emplyoee as Director
function isDirector(employee: (Director | Teacher)): employee is Director {

    return (employee instanceof Director);
}


// A function that accepts employee as argument
// if employee is Director call workDirectorTasks class method
// else call workTeacherTasks class method
function executeWork(employee: (Director | Teacher)) {
    if (isDirector(employee)) {
        return (employee as Director).workDirectorTasks();
    }
    return (employee as Teacher).workTeacherTasks();
}

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)))

// A tring literal type named Subjects that can be Math or History
type Subjects = ( 'Math' | 'History' );

// A function named teachClass
function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    }
    return 'Teaching History'
}

console.log(teachClass('Math'))
console.log(teachClass('History'))