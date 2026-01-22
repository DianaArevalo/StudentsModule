import { Student } from "src/entities/students/students";
import { StudentEmail } from "../value-objects/email.vo";
import { StudentStatus } from "../value-objects/student-status.vo";

export abstract class StudentRepository {
    abstract create(student: Student): Promise<Student>;
    abstract edit(student: Student): Promise<Student>;
    abstract getStudentById(id: String): Promise<Student | null>;
    abstract getAllStudent(): Promise<Student[]>;
    abstract getStudentByEmail(email: StudentEmail): Promise<Student | null>;
    abstract findByStatus(status: StudentStatus): Promise<Student[]>;
    abstract softDelete(status: StudentStatus, id: string): Promise<void>;
}