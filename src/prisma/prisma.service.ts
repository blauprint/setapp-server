import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import config from '../../config';
console.log(process.env.NODE_ENV, '=======================')

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: config.DATABASE.URL
        }
      }
    })
  }
}
