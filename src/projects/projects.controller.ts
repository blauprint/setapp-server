import { Controller, Get, UseGuards } from '@nestjs/common';
import { ClerkAuthGuard } from 'src/auth/clerk/clerk.guard';

@Controller('projects')
export class ProjectsController {
  @Get('/')
  @UseGuards(ClerkAuthGuard)
  getMe() {
    return { serverSays: 'Hello, projects controller!'}
  }
}
