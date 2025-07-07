import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DataSource } from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: ['http://localhost:3000', 'https://your-frontend-domain.com'],
    credentials: true,
  });

  const dataSource = app.get(DataSource);

  try {
    console.log('Attempting to truncate table...');
    await dataSource.query('TRUNCATE endpoint RESTART IDENTITY CASCADE');
    console.log('Truncate successfully');
  } catch (error) {
    console.error('Failed to truncate table:', error);
  }

  await app.listen(process.env.PORT ?? 3000);
  console.log(`Application is running on: ${process.env.PORT ?? 3000}`);
}
bootstrap();

