import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CreateStudentUseCase } from 'src/application/students/usecases/studentCreateUseCase';
import { ApiResponseDto } from './dtos/request/StudentResponseDTO';
import { CreateStudentRequestDto } from '../DTOs/CreateStudentsRequest.dto';
import { Student } from 'src/entities/students/students';


@ApiTags('Students')
@Controller('students')
export class StudentsController {
  constructor(
    private readonly createStudentUseCase: CreateStudentUseCase,
  ) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Student created successfully',
    type: ApiResponseDto,
  })
  async create(
    @Body() dto: CreateStudentRequestDto,
  ): Promise<ApiResponseDto<Student>> {
    const student = await this.createStudentUseCase.execute({
      id: crypto.randomUUID(),
      name: dto.name,
      lastName: dto.lastName,
      email: dto.email,
      birthDate: new Date(dto.birthDate),
      status: dto.status === 'INACTIVE' ? 1 : 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return {
      success: true,
      title: 'Student created',
      message: 'Student was created successfully',
      body: student,
    };
  }
}
