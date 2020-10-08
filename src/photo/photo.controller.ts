import { Controller, Get, Param, Post, Body, Put, UseGuards } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { PhotoDto } from './dto/photo.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Photo')
@ApiBearerAuth()
@Controller('photo')
@UseGuards(JwtAuthGuard)
export class PhotoController {
    constructor(private photoService: PhotoService){}

    @Get()
    async findAll() {
        return await this.photoService.findAll();
    }

    @Post()
    async createPhoto(@Body() form: PhotoDto) {
        return await this.photoService.create(form);
    }

    @Get(':id') 
    async findById(@Param('id') id: number) {
        return await this.photoService.findById(id);
    }

    @Put(':id') 
    async updateById(@Param('id') id: number, @Body() form: PhotoDto) {
        return await this.photoService.updateById(id, form);
    }

}
