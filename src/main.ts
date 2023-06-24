import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  if (process.env.PORT !== undefined) {
    await app.listen(process.env.PORT);
  } else {
    throw new Error(`PORT environment is not defined`);
  }
}
bootstrap();
