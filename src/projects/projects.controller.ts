import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ClerkAuthGuard } from 'src/auth/clerk/clerk.guard';
import { ProjectService } from './projects.services';

//@UseGuards(ClerkAuthGuard)
@Controller('projects')
export class ProjectsController {
  constructor(private projectService: ProjectService) {}
  //NOTE: To be implemented. Will need to provide the userId.
  @Get('/')
  getProjects() {
    return this.projectService.getProjects();
  }
  @Post('/')
  createPoject() {
    return this.projectService.createProject();
  }
}
