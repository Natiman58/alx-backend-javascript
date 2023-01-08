namespace Subjects {
    
    export class Subject {
        teacher: Subjects.Teacher;

        //setter method for setting the class instance
        // attribute 'this.teacher' to teacher
        setTeacher(teacher: Subjects.Teacher) {
            this.teacher = teacher;
        }
    }
}