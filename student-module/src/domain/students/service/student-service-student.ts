import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { StudentAlreadyExistsException } from "../exceptions/StudentAlreadyExistsException";
import { StudentRepository } from "../repositories/student-repository";
import { StudentEmail } from "../value-objects/email.vo";

@Injectable()
export class StudentDomainService {
  constructor(
    private readonly studentRepository: StudentRepository,
  ) {}

  async ensureEmailIsUnique(email: StudentEmail): Promise<void> {
    const student = await this.studentRepository.getStudentByEmail(email);

    if (student) {
      throw new StudentAlreadyExistsException();
    }
  }
}