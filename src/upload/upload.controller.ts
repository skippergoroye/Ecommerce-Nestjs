import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator,
} from '@nestjs/common';
import { UploadService } from './upload.service';
import { CreateUploadDto } from './dto/create-upload.dto';
import { UpdateUploadDto } from './dto/update-upload.dto';
import { API_VERSION } from 'src/cores/constants/app.constants';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller(`${API_VERSION}/uploads`)
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post(':type')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 9048576 }),
          new FileTypeValidator({
            fileType: /(pdf|jpeg|jpg|png)$/,
          }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    const result = await this.uploadService.uploadImage(file);
    return { 
      message: 'success',
      url: result.secure_url
    };
  }

  
}
