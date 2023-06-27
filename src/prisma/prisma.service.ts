import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: "mongodb+srv://tawfeeq:hellomongo@cluster0.keowhzz.mongodb.net/setapp?retryWrites=true&w=majority"
        }
      }
    })
  }
}
