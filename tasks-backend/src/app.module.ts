import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { TasksService } from './tasks/services/tasks.service';
import { TasksController } from './tasks/controllers/tasks.controller';


@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 15432,
    username: 'postgres',
    password: 'pass',
    database: 'tasksDB',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: false,
    retryDelay: 3000,
    retryAttempts:10
  }),TasksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
