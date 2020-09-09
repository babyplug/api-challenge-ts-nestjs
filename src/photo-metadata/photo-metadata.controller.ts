import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { PhotoMetadataService } from './photo-metadata.service';
import PhotoMetadataDto from './dto/photo-metadata.dto';

@Controller('photo-metadata')
export class PhotoMetadataController {
    constructor(private photoMetadataService: PhotoMetadataService){}

    @Get()
    async findAll() {
        return await this.photoMetadataService.findAll();
    }

    @Post()
    async createPhoto(@Body() form: PhotoMetadataDto) {
        return await this.photoMetadataService.create(form);
    }

    @Get(':id') 
    async findById(@Param('id') id: number) {
        return await this.photoMetadataService.findById(id);
    }

    @Put(':id') 
    async updateById(@Param('id') id: number, @Body() form: PhotoMetadataDto) {
        return await this.photoMetadataService.updateById(id, form);
    }
}
