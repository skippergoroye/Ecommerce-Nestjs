import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
} from '@nestjs/common';
import { EndpointService } from './endpoint.service';
import { CreateEndpointDto } from './dto/create-endpoint.dto';
import { UpdateEndpointDto } from './dto/update-endpoint.dto';
import { Request as ExpressRequest, Router } from 'express';
import { getAllRoutes } from 'src/utils/app.utils';

@Controller('api/v1/endpoints')
export class EndpointController {
  constructor(private readonly endpointService: EndpointService) {}

  @Get('/all')
  root(@Request() req: ExpressRequest) {
    const router = req.app._router as Router;


    return getAllRoutes(router)
  
  }

  @Post()
  create(@Body() createEndpointDto: CreateEndpointDto) {
    return this.endpointService.create(createEndpointDto);
  }

  
}
