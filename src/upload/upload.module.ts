// import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
// import { UploadService } from './upload.service';
// import { UploadController } from './upload.controller';
// import { ValidateFileTypeMiddleware } from './middleware/validate-file-type.middleware';

// @Module({
//   controllers: [UploadController],
//   providers: [UploadService],
// })
// export class UploadModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer
//       .apply(ValidateFileTypeMiddleware)
//       .forRoutes('api/v1/uploads/:type');
//   }
// }



import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { ValidateFileTypeMiddleware } from './middleware/validate-file-type.middleware';

@Module({
  controllers: [UploadController],
  providers: [UploadService],
})
export class UploadModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ValidateFileTypeMiddleware)
      .forRoutes({ path: 'api/v1/uploads/:type', method: RequestMethod.POST });
  }
}
