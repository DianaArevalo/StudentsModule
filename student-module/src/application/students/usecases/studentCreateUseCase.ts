import { StudentRepository } from "../../../domain/students/repositories/student-repository";
import { StudentDomainService } from "../../../domain/students/service/student-service-student";
import { StudentEmail } from "../../../domain/students/value-objects/email.vo";
import { StudentStatusPrimitiveT } from "../../../domain/students/value-objects/student-status.vo";
import { Student } from "../../../entities/students/students";

interface CreateStudentInput {
    id: string,
    name: string,
    lastName: string,
    email: string,
    birthDate: Date,
    status: StudentStatusPrimitiveT,
    createdAt: Date,
    updatedAt: Date,
}
export class CreateStudentUseCase {
  constructor(
    private readonly repository: StudentRepository,
    private readonly domainService: StudentDomainService,
  ) {}

  async execute(props: CreateStudentInput): Promise<Student> {
    const emailVO = StudentEmail.create(props.email);

    // 1️⃣ regla de negocio
    await this.domainService.ensureEmailIsUnique(emailVO);

    // 2️⃣ crear entidad
    const student = new Student(
        props.id,
        props.name,
        props.lastName,
        emailVO.value,
        props.birthDate,
        props.status,
        props.createdAt,
        props.updatedAt,
    );

    // 3️⃣ persistir
    return this.repository.create(student);
  }
}
