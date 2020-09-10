import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Photo } from './entity/photo.entity';
import { PhotoRepository } from './repository/photo.repository';
import { PhotoDto } from './dto/photo.dto';
import { CONSTANT } from 'src/constant/constant';

@Injectable()
export class PhotoService {
    constructor(
        // @Inject('PHOTO_REPOSITORY') private photoRepository: Repository<Photo>,
        @Inject(CONSTANT.PHOTO_REPOSITORY) private photoRepository: PhotoRepository,
    ){}

    findAll(): Promise<Photo[]> {
        return this.photoRepository.find();
    }

    async findById(id: number): Promise<Photo> {
        const photo = await this.photoRepository.findByIdAndDeleted(id);
        if (!photo) throw new NotFoundException();
        return photo;
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
