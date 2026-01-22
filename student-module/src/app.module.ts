import { Module } from '@nestjs/common';
import { StudentsModule } from './infraestructure/students/modules/StudentModule';


@Module({
  imports: [
    StudentsModule,
  ],
})
export class AppModule {}
