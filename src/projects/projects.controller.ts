import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ClerkAuthGuard } from 'src/auth/guard/index';
import { ProjectService } from './projects.services';
import { GetUserId } from 'src/auth/decorator';
import { ProjectDTO } from './dto/create-project.dto';

@UseGuards(ClerkAuthGuard)
@Controller('projects')
export class ProjectsController {
  constructor(private projectService: ProjectService) {}
  @Get('/') 
  getProjects(@GetUserId() userId: string) {
    return this.projectService.getProjects(userId);
  }
 @Post('/')
 createPoject(@GetUserId() userId: string, @Body() dto: ProjectDTO) {
   return this.projectService.createProject(userId, dto);
 }
}
