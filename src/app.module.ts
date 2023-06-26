import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClerkModule } from './auth/clerk/clerk.module';
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [ClerkModule, ProjectsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
