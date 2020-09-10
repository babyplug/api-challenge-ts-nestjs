import { Injectable, Inject, NotFoundException, } from '@nestjs/common';
import { CONSTANT } from 'src/constant/constant';
import { AuthorRepository } from './repository/author.repository';
import { Author } from './entity/author.entity';
import { AuthorDto } from './dto/author.dto';

@Injectable()
export class AuthorService {
    constructor(
        @Inject(CONSTANT.AUTHOR_REPOSITORY) private authorRepo: AuthorRepository
    ) {}

    findAll(): Promise<Author[]> {
        return this.authorRepo.find();
    }

    create(form: AuthorDto): Promise<Author> {
        let dto = this.authorRepo.create()
        dto.name = form.name

        return this.authorRepo.save(dto)
    }

    async findById(id: number): Promise<Author> {
        const author = await this.authorRepo.findOne(id)
        if (!author) throw new NotFoundException();
        return author;
    }

    async updateById(id: number, form: AuthorDto): Promise<Author> {
        const dto: Author = await this.findById(id)
        dto.name = form.name

        return this.authorRepo.save(dto)
    }

}
