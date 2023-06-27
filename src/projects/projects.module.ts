import { Module } from '@nestjs/common';
import { ProjectsController } from './projects.controller';
import { ProjectService } from './projects.services';

@Module({
  controllers: [ProjectsController],
  providers: [ProjectService]
})
export class ProjectsModule {}
