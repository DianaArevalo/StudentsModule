import { StudentRepository } from "src/domain/students/repositories/student-repository";
import { StudentDomainService } from "src/domain/students/service/student-service-student";
import { StudentEmail } from "src/domain/students/value-objects/email.vo";
import { Student } from "src/entities/students/students";
interface CreateStudentInput {
    id: string,
    name: string,
    lastName: string,
    email: string,
    birthDate: Date,
    status: boolean,
    createdAt: Date,
    updatedAt: Date,
}
export class CreateStudentUseCase {
  constructor(
    private readonly repository: StudentRepository,
    private readonly domainService: StudentDomainService,
  ) {}

  async execute(props: CreateStudentInput){
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
    await this.repository.create(student);
  }
}
