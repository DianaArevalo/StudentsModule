import { StudentRepository } from "../../../domain/students/repositories/student-repository";
import { StudentEmail } from "../../../domain/students/value-objects/email.vo";
import { StudentStatus } from "../../../domain/students/value-objects/student-status.vo";
import { Student } from "../../../entities/students/students";
import { NotFoundError } from "../../../shared/domain/exceptions";


export class StudentInMemoryRepository implements StudentRepository {
  private students: Student[] = [];

  async create(student: Student): Promise<Student> {
    this.students.push(student);
    return student;
  }

  async edit(student: Student): Promise<Student> {
    const index = this.students.findIndex(s => s.id === student.id);
    if (index !== -1) {
      this.students[index] = student;
      return student;
    }
    throw new NotFoundError("Student not found");
  }

  async getStudentById(id: string): Promise<Student | null> {
    return this.students.find(s => s.id === id) || null;
  }

  async getAllStudent(): Promise<Student[]> {
    return this.students;
  }

  async getStudentByEmail(email: StudentEmail): Promise<Student | null> {
    return this.students.find(s => s.email.value === email.value) || null;
  }

  async findByStatus(status: StudentStatus): Promise<Student[]> {
    return this.students.filter(s => s.status.value === status.value);
  }

  async softDelete(status: StudentStatus, id: string): Promise<void> {
    const index = this.students.findIndex(s => s.id === id);
    if (index !== -1) {
      this.students[index].status = status;
    }
  }
}
