import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TasksService } from '../services/tasks.service';

@Controller('api/tasks')
export class TasksController {

    constructor(
        private tasksService: TasksService
    ) {}

    @Get()
    getAll(): any  {
        return this.tasksService.getAll();
    }
 
    @Post()
    createTask(@Body() body:any){
        return this.tasksService.create(body);
    }

    @Delete(':id')
    deleteTask(@Param() id:number){
        return this.tasksService.remove(id);
    }

}
