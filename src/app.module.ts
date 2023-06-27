import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClerkModule } from './auth/clerk/clerk.module';
import { ProjectsModule } from './projects/projects.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ClerkModule, ProjectsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
