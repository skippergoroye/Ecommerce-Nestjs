import { Injectable } from '@nestjs/common';
import { CreateEndpointDto } from './dto/create-endpoint.dto';
import { UpdateEndpointDto } from './dto/update-endpoint.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Endpoint } from './entities/endpoint.entity';

@Injectable()
export class EndpointService {
  constructor(
    @InjectRepository(Endpoint)
    private roleRepository: Repository<Endpoint>,
  ) {}
  create(createEndpointDto: CreateEndpointDto) {
    const endpoint = new Endpoint();

    Object.assign(endpoint, createEndpointDto);

    return this.roleRepository.save(endpoint);
  }

  findAll() {
    return `This action returns all endpoint`;
  }

  findOne(id: number) {
    return `This action returns a #${id} endpoint`;
  }

  update(id: number, updateEndpointDto: UpdateEndpointDto) {
    return `This action updates a #${id} endpoint`;
  }

  remove(id: number) {
    return `This action removes a #${id} endpoint`;
  }
}
