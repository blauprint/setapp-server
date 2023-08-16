import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import dotenv from 'dotenv';
import path from 'path';

// const NODE_ENV = process.env.NODE_ENV ? "." + process.env.NODE_ENV : "";

// dotenv.config({
//   path: path.resolve(__dirname, `../${NODE_ENV}.env`)
// });

declare const module: any
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  if (process.env.PORT !== undefined) {
    await app.listen(process.env.PORT);
  } else {
    throw new Error(`PORT environment is not defined`);
  }
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
