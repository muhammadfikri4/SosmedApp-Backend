import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  dotenv.config();
  await app.listen(5000);
}
bootstrap();
// mongodb://localhost:27017/FullStack
// mongodb+srv://muhfikri04:muhfikri04@cluster0.won67pc.mongodb.net/
