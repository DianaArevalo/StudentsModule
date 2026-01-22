import { Test, TestingModule } from '@nestjs/testing';
import { CreateStudentUseCase } from "../../../application/students/usecases/studentCreateUseCase";
import { StudentRepository } from "../../../domain/students/repositories/student-repository";
import { StudentDomainService } from "../../../domain/students/service/student-service-student";
import { StudentsController } from "./StudentController";
import { StudentInMemoryRepository } from "../schemas/StudentInMemoryRepository";

describe('StudentsController', () => {
  let controller: StudentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentsController],
      providers: [
        CreateStudentUseCase,
        StudentDomainService,
        {
          provide: StudentRepository,
          useClass: StudentInMemoryRepository,
        },
      ],
    }).compile();

    controller = module.get<StudentsController>(StudentsController);
  });

  it('should create a student successfully', async () => {
    const result = await controller.create({
      name: 'Ana',
      lastName: 'Perez',
      email: 'ana@test.com',
      birthDate: '2000-01-01',
      status: 'ACTIVE',
    });

    expect(result.success).toBe(true);
    expect(result.body).toBeDefined();
    expect(result.body.email).toBe('ana@test.com');
  });
});