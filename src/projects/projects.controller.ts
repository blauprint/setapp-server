import {
  Body,
  Controller,
  Get,
  Delete,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ClerkAuthGuard } from 'src/auth/guard/index';
import { ProjectService } from './projects.services';
import { UserId } from 'src/auth/decorator';
import { ProjectDTO } from './dto/create-project.dto';

@UseGuards(ClerkAuthGuard)
@Controller('projects')
export class ProjectsController {
  constructor(private projectService: ProjectService) {}
  @Get('/')
  async getProjects(@UserId() userId: string) {
    return await this.projectService.getProjects(userId);
  }
  @Post('/')
  async createProject(@UserId() userId: string, @Body() dto: ProjectDTO) {
    return await this.projectService.createProject(userId, dto);
  }
  @Delete('/:id')
  async deleteProject(@Param('id') id: string) {
    return await this.projectService.deleteProject(id);
  }
}
