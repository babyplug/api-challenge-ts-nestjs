import { Controller, Get, Post, Body, Param, Put, UseGuards } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorDto } from './dto/author.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Author')
@ApiBearerAuth()
@Controller('author')
@UseGuards(JwtAuthGuard)
export class AuthorController {

    constructor
    (
        private authorService:AuthorService
    ) {}

    @Get()
    async findAll() {
        return await this.authorService.findAll();
    }

    @Post()
    async createAuthor(@Body() form: AuthorDto) {
        return await this.authorService.create(form);
    }

    @Get(':id') 
    async findById(@Param('id') id: number) {
        return await this.authorService.findById(id);
    }

    @Put(':id') 
    async updateById(@Param('id') id: number, @Body() form: AuthorDto) {
        return await this.authorService.updateById(id, form);
    }

}
