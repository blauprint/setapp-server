import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ClerkAuthGuard } from '../../src/auth/guard/index';
import { ProjectService } from './projects.services';
import { UserId } from '../../src/auth/decorator';
import { ProjectDTO } from './dto/create-project.dto';
import { Todo } from './dto/update-project-todolist.dto';

@UseGuards(ClerkAuthGuard)
@Controller('projects')
export class ProjectsController {
  constructor(private projectService: ProjectService) { }
  @Get('/')
  async getProjects(@UserId() userId: string) {
    return await this.projectService.getProjects(userId);
  }
  @Post('/')
  async createPoject(@UserId() userId: string, @Body() dto: ProjectDTO) {
    return await this.projectService.createProject(userId, dto);
  }
  @Get(':id')
  async getProjectById(@Param('id') id: string) {
    return await this.projectService.getProjectById(id);
  }
  @Put('/todo/:id')
  async updateTodo(@Param('id') id: string, @Body() dto: Todo) {
    return await this.projectService.updateTodoById(id, dto);
  }
  @Delete('/todo/:id')
  async deleteTodo(@Param('id') id: string) {
    return await this.projectService.deleteTodoById(id);
  }
  @Post('/frontend/:frontendId/todo')
  async createFrontendTodo(@Param('frontendId') frontendId: string, @Body() dto: Todo) {
    return await this.projectService.createFrontendTodo(frontendId, dto);
  }
  @Post('/backend/:backendId/todo')
  async createBackendTodo(@Param('backendId') backendId: string, @Body() dto: Todo) {
    return await this.projectService.createBackendTodo(backendId, dto);
  }
  @Delete('/:id')
  async deleteProject(@Param('id') id: string) {
    return await this.projectService.deleteProject(id);
  }
}


