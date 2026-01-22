import { Module } from '@nestjs/common';

import { StudentsController } from '../controllers/StudentController';
import { StudentInMemoryRepository } from '../schemas/StudentInMemoryRepository';
import { CreateStudentUseCase } from '../../../application/students/usecases/studentCreateUseCase';
import { StudentDomainService } from '../../../domain/students/service/student-service-student';
import { StudentRepository } from '../../../domain/students/repositories/student-repository';
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
