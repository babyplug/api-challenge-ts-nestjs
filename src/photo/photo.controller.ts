import { Controller, Get } from '@nestjs/common';
import { PhotoService } from './photo.service';

@Controller('photo')
export class PhotoController {
    constructor(private photoService: PhotoService){}

    @Get()
    async findAll() {
        return await this.photoService.findAll();
    }
}
