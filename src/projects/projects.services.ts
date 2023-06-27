
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService) {}
  //NOTE: this is an example of service call that needs to be implemented.
  async getProjects() {
    return await this.prisma.project.findMany({
    });
  }  
}
