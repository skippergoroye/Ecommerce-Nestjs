import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { getAllRoutes } from './utils/app.utils';
import { Endpoint, HttpMethod } from './endpoint/entities/endpoint.entity';
import { Role } from './role/entities/role.entity';
import { Permission } from './permissions/entities/permission.entity';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: ['http://localhost:3000', 'https://your-frontend-domain.com'],
    credentials: true,
  });


    const config = new DocumentBuilder()
    .setTitle('eCommerce Api')
    .setDescription('The Ecommerce API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  // Start the server first so routes are registered
  await app.listen(process.env.PORT ?? 3000);



  const server = app.getHttpServer();
  const router = server._events.request._router;
  const { routes } = getAllRoutes(router);

  const dataSource = app.get(DataSource);
  const queryRunner = dataSource.createQueryRunner();

  try {
    await queryRunner.connect();
    await queryRunner.startTransaction();

    console.log('Truncating tables...');
    await queryRunner.query('TRUNCATE endpoint RESTART IDENTITY CASCADE');
    await queryRunner.query('TRUNCATE permission RESTART IDENTITY CASCADE');

    // Insert all routes into the endpoint table
    for (const route of routes) {
      const [method, url] = route.split(' ');
      await queryRunner.manager
        .createQueryBuilder()
        .insert()
        .into(Endpoint)
        .values({ url, method: method as HttpMethod })
        .execute();
    }

    const roles = await queryRunner.manager
      .getRepository(Role)
      .createQueryBuilder('role')
      .where('role.isActive = :isActive', { isActive: true })
      .getMany();

    const endpoints = await queryRunner.manager
      .getRepository(Endpoint)
      .createQueryBuilder('endpoint')
      .getMany();

    for (const role of roles) {
      for (const endpoint of endpoints) {
        await queryRunner.manager
          .createQueryBuilder()
          .insert()
          .into(Permission)
          .values({
            endpointId: endpoint.id.toString(),
            roleName: role.name,

            isAllow: role.name === 'admin' ? true : false
          })
          .execute();
      }
    }

    await queryRunner.commitTransaction();
    console.log('Insert all routes into DB Successfully!');
  } catch (error) {
    await queryRunner.rollbackTransaction();
    console.error('Failed to truncate or insert routes:', error);
  } finally {
    await queryRunner.release();
  }

  console.log(`Application is running on: ${process.env.PORT ?? 3000}`);
}
bootstrap()