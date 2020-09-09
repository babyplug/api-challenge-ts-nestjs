import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorDto } from './dto/author.dto';

@Controller('author')
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
