import { Injectable, Inject } from '@nestjs/common';
import { AlbumRepository } from './repository/album.repository';
import { CONSTANT } from 'src/constant/constant';
import { Album } from './entity/album.entity';
import AlbumDto from './dto/album.dto';

@Injectable()
export class AlbumService {
    constructor(
        @Inject(CONSTANT.ALBUM_REPOSITORY) private albumRepository: AlbumRepository,
    ){}

    findAll(): Promise<Album[]> {
        return this.albumRepository.find();
    }

    findById(id: number): Promise<Album> {
        return this.albumRepository.findOne(id);
    }

    create(form: AlbumDto): Promise<Album> {
        const dto = this.albumRepository.create();
        dto.name = form.name
        
        return this.albumRepository.save(dto);
    }

    async updateById(id: number, form: AlbumDto): Promise<Album> {
        const dto = await this.findById(id);
        dto.name = form.name

        return this.albumRepository.save(dto);
    }
}
