import { Module } from '@nestjs/common';
import { StudentRepository } from "src/domain/students/repositories/student-repository";
import { CreateStudentUseCase } from 'src/application/students/usecases/studentCreateUseCase';
import { StudentDomainService } from 'src/domain/students/service/student-service-student';
import { StudentsController } from '../controllers/StudentController';
import { StudentInMemoryRepository } from '../schemas/StudentInMemoryRepository';
@Module({
  controllers: [StudentsController],
  providers: [
    CreateStudentUseCase,
    StudentDomainService,
    {
      provide: StudentRepository,
      useClass: StudentInMemoryRepository,
    },
  ],
})
export class StudentsModule {}
