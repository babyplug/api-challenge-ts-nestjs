import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Photo } from './entity/photo.entity';
import { PhotoRepository } from './repository/photo.repository';
import { PhotoDto } from './dto/photo.dto';
import { CONSTANT } from 'src/constant/constant';
import { AuthorService } from 'src/author/author.service';
import { Author } from 'src/author/entity/author.entity';
import { AlbumService } from 'src/album/album.service';
import { Album } from 'src/album/entity/album.entity';

@Injectable()
export class PhotoService {
    constructor(
        // @Inject('PHOTO_REPOSITORY') private photoRepository: Repository<Photo>,
        @Inject(CONSTANT.PHOTO_REPOSITORY) private photoRepository: PhotoRepository,
        private authorService: AuthorService,
        private albumService: AlbumService,
    ){}

    findAll(): Promise<Photo[]> {
        return this.photoRepository.find();
    }

    async findById(id: number): Promise<Photo> {
        const photo = await this.photoRepository.findByIdAndDeleted(id);
        if (!photo) throw new NotFoundException();
        return photo;
    }

    async create(photoDto: PhotoDto): Promise<Photo> {
        const dto = this.photoRepository.create();
        dto.name = photoDto.name
        dto.description = photoDto.description
        dto.filename = photoDto.filename
        dto.views = photoDto.views
        dto.isPublished = photoDto.isPublished

        const author: Author = await this.authorService.findById(photoDto.authorId);
        dto.author = author;

        if (photoDto.albumIds && photoDto.albumIds.length > 0) {
            let albums: Album[] = [];
            photoDto.albumIds.forEach(async (id) => {
                albums.push( await this.albumService.findById(id) );
            })
            dto.albums = albums;
        }
        
        return this.photoRepository.save(dto);
    }

    async updateById(id: number, photoDto: PhotoDto): Promise<Photo> {
        const dto = await this.findById(id);
        
        dto.name = photoDto.name
        dto.description = photoDto.description
        dto.filename = photoDto.filename
        dto.views = photoDto.views
        dto.isPublished = photoDto.isPublished

        if (dto.authorId !== photoDto.authorId) {
            const author: Author = await this.authorService.findById(photoDto.authorId);
            dto.author = author;
        }

        if (photoDto.albumIds && photoDto.albumIds.length > 0) {
            let albums: Album[] = [];
            photoDto.albumIds.forEach(async (id) => {
                albums.push( await this.albumService.findById(id) );
            })
            dto.albums = albums;
        }

        return this.photoRepository.save(dto);
    }

    
}
