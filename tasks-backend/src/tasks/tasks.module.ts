import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { TasksController } from './controllers/tasks.controller';
import { TasksService } from './services/tasks.service';

@Module({
    imports: [TypeOrmModule.forFeature([Task])],
    providers:[TasksService],
    controllers:[TasksController]
})
export class TasksModule {}
