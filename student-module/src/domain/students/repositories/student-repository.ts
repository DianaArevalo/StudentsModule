import { Student } from "src/entities/students/students";
import { StudentEmail } from "../value-objects/email.vo";
import { StudentStatus } from "../value-objects/student-status.vo";

export interface StudentRepository {
    create(student: Student): Promise<Student>;
    edit(student: Student): Promise<Student>;
    getStudentById(id: String): Promise<Student | null>;
    getAllStudent(): Promise<Student[]>;
    getStudentByEmail(email: StudentEmail): Promise<Student | null>;
    findByStatus(status: StudentStatus): Promise<Student[]>;
    softDelete(status: StudentStatus, id: string): Promise<void>;
}