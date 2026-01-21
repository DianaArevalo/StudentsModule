import { ApiProperty } from '@nestjs/swagger';

export class ApiResponseDto<T> {
  @ApiProperty({ example: true })
  success: boolean;

  @ApiProperty({ example: 'Operation successful' })
  title: string;

  @ApiProperty({ example: 'The operation was completed successfully' })
  message: string;

  body: T;
}
