
import { BadRequestException, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ValidateFileTypeMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const allowedFileTypes = ['products', 'users'];

        const { type } = req.params

        if (!allowedFileTypes.includes(type)) {
            throw new BadRequestException(`Type ${type} is not in ${allowedFileTypes.join(', ')}`);
        }
        next();
    }
}
