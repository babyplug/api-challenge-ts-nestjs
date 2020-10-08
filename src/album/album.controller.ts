import { Controller, Get, Post, Body, Param, Put, UseGuards, Delete } from '@nestjs/common';
import { AlbumService } from './album.service';
import AlbumDto from './dto/album.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Album')
@ApiBearerAuth()
@Controller('album')
@UseGuards(JwtAuthGuard)
export class AlbumController {
    constructor(private albumService: AlbumService){}

    @Get()
    async findAll() {
        return await this.albumService.findAll();
    }

    @Post()
    async createPhoto(@Body() form: AlbumDto) {
        return await this.albumService.create(form);
    }

    @Get(':id') 
    async findById(@Param('id') id: number) {
        return await this.albumService.findById(id);
    }

    @Put(':id') 
    async updateById(@Param('id') id: number, @Body() form: AlbumDto) {
        return await this.albumService.updateById(id, form);
    }

    @Delete(':id') 
    async deleteById(@Param('id') id: number) {
        return await this.albumService.deleteById(id);
    }
}
