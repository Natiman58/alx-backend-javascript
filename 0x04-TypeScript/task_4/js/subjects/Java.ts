namespace Subjects {

    // Declaration merging of Teacher
    export interface Teacher {
        experienceTeachingJava?: number,
    }


    export class Java extends Subjects.Subject {

        // Methods
        getRequirements(): string {
            return 'Here is the list of requirements for Java';
        }

        getAvailableTeacher(): string {
            if (this.teacher || this.teacher.experienceTeachingJava > 0) {
                return `Available Teacher: ${this.teacher.firstName}`;
            }
            return 'No available teacher';
        }


    }
}

console.log()