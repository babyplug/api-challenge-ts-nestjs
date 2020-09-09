import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Photo } from './entity/photo.entity';
import { PhotoRepository } from './repository/photo.repository';
import { PhotoDto } from './dto/photo.dto';

@Injectable()
export class PhotoService {
    constructor(
        // @Inject('PHOTO_REPOSITORY') private photoRepository: Repository<Photo>,
        @Inject('PHOTO_REPOSITORY') private photoRepository: PhotoRepository,
    ){}

    findAll(): Promise<Photo[]> {
        return this.photoRepository.find();
    }

    findById(id: number): Promise<Photo> {
        return this.photoRepository.findByIdAndDeleted(id);
    }

    create(photoDto: PhotoDto): Promise<Photo> {
        const dto = this.photoRepository.create();
        dto.name = photoDto.name
        dto.description = photoDto.description
        dto.filename = photoDto.filename
        dto.views = photoDto.views
        dto.isPublished = photoDto.isPublished
        
        return this.photoRepository.save(dto);
    }

    async updateById(id: number, photoDto: PhotoDto): Promise<Photo> {
        const dto = await this.findById(id);
        
        dto.name = photoDto.name
        dto.description = photoDto.description
        dto.filename = photoDto.filename
        dto.views = photoDto.views
        dto.isPublished = photoDto.isPublished

        return this.photoRepository.save(dto);
    }

    
}
