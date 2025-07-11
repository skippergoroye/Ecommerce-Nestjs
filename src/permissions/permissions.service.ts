import { Injectable, NotFoundException } from '@nestjs/common';
import { AllowPermissionDto } from './dto/allow-permission.dto';
import { permission } from 'process';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Permission } from './entities/permission.entity';

@Injectable()
export class PermissionsService {
  constructor(
    @InjectRepository(Permission)
    private permissionRepository: Repository<Permission>,
  ) {}

  async allow(allowPermissionDto: AllowPermissionDto) {
    const permission = await this.permissionRepository.findOne({
      where: {
        roleName: allowPermissionDto.roleName,
        endpointId: String(allowPermissionDto.endpointId),
      },
    });

    if (!permission) throw new NotFoundException(`Not found permission`);

    permission.isAllow = allowPermissionDto.isAllow;

    return this.permissionRepository.save(permission);
  }
}
