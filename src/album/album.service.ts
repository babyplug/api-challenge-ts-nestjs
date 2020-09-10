import { Injectable, Inject, NotFoundException, forwardRef } from '@nestjs/common';
import { AlbumRepository } from './repository/album.repository';
import { CONSTANT } from 'src/constant/constant';
import { Album } from './entity/album.entity';
import AlbumDto from './dto/album.dto';
import { PhotoService } from 'src/photo/photo.service';
import { Photo } from 'src/photo/entity/photo.entity';

@Injectable()
export class AlbumService {
    constructor(
        @Inject(CONSTANT.ALBUM_REPOSITORY) private albumRepository: AlbumRepository,
        @Inject(forwardRef(() => PhotoService)) private photoService: PhotoService,
    ){}

    findAll(): Promise<Album[]> {
        return this.albumRepository.find();
    }

    async findById(id: number): Promise<Album> {
        const album = await this.albumRepository.findOne(id);
        if (!album) throw new NotFoundException();
        return album;
    }

    create(form: AlbumDto): Promise<Album> {
        const dto = this.albumRepository.create();
        dto.name = form.name
        
        if (form.photoIds && form.photoIds.length > 0) {
            let photos: Photo[] = [];
            form.photoIds.forEach(async (id) => {
                photos.push( await this.photoService.findById(id) );
            })
            dto.photos = photos;
        }

        return this.albumRepository.save(dto);
    }

    async updateById(id: number, form: AlbumDto): Promise<Album> {
        const dto = await this.findById(id);
        dto.name = form.name

        if (form.photoIds && form.photoIds.length > 0) {
            let photos: Photo[] = [];
            form.photoIds.forEach(async (id) => {
                photos.push( await this.photoService.findById(id) );
            })
            dto.photos = photos;
        }

        return this.albumRepository.save(dto);
    }

    async deleteById(id: number): Promise<void> {
        const dto = await this.findById(id);

        this.albumRepository.remove(dto);
    }
}
