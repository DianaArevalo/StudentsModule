import { StudentEmail } from "src/domain/students/value-objects/email.vo";
import { StudentStatus, StudentStatusPrimitiveT } from "src/domain/students/value-objects/student-status.vo";

export class Student {
  id: string;
  name: string;
  lastName: string;
  email: StudentEmail;
  birthDate: Date;
  status: StudentStatus;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    id: string,
    name: string,
    lastName: string,
    email: string,
    birthDate: Date,
    status: StudentStatusPrimitiveT,
    createdAt: Date,
    updatedAt: Date,

  ) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.email = StudentEmail.create(email);
    this.birthDate = birthDate;
    this.status = StudentStatus.fromPrimitives(status);
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}