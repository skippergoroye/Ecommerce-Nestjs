import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { getAllRoutes } from './utils/app.utils';
import { Endpoint, HttpMethod } from './endpoint/entities/endpoint.entity';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: ['http://localhost:3000', 'https://your-frontend-domain.com'],
    credentials: true,
  });

  // Start the server first so the routes are available
  await app.listen(process.env.PORT ?? 3000);

  const server = app.getHttpServer();
  const router = server._events.request._router;

  const { routes } = getAllRoutes(router);

  const dataSource = app.get(DataSource);

  try {
    console.log('Attempting to truncate table...');
    await dataSource.query('TRUNCATE endpoint RESTART IDENTITY CASCADE');

    for (const route of routes) {
      const [method, url] = route.split(' ');
      await dataSource
        .createQueryBuilder()
        .insert()
        .into(Endpoint)
        .values({ url, method: method as HttpMethod })
        .execute();
    }

    console.log('Insert all routes into DB Successfully!');
  } catch (error) {
    console.error('Failed to truncate or insert routes:', error);
  }

  console.log(`Application is running on: ${process.env.PORT ?? 3000}`);
}
bootstrap();
