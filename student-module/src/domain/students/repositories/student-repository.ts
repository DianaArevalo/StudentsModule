import { Student } from "src/entities/students/students";
import { StudentEmail } from "../value-objects/email.vo";
import { StudentStatus } from "../value-objects/student-status.vo";

export interface StudentRepository {
    create(student: Student): Promise<Student>;
    edit(student: Student): Student;
    getStudentById(id: String): Student;
    getAllStudent(): Student[];
    getStudentByEmail(email: StudentEmail): Student;
    findByStatus(status: StudentStatus): Student[];
    softdelete(status: StudentStatus): void;
}