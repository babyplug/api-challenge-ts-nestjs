import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { CONSTANT } from 'src/constant/constant';
import { PhotoMetadataRepository } from './repository/photo-metadata.repository';
import { PhotoMetadata } from './entity/photo-metadata.entity';
import PhotoMetadataDto from './dto/photo-metadata.dto';
import { PhotoService } from 'src/photo/photo.service';
import { Photo } from 'src/photo/entity/photo.entity';

@Injectable()
export class PhotoMetadataService {
    constructor(
        // @Inject('PHOTO_REPOSITORY') private photoRepository: Repository<Photo>,
        @Inject(CONSTANT.PHOTO_METADATA_REPOSITORY) private photoMetadataRepository: PhotoMetadataRepository,
        private photoService: PhotoService,
    ){}

    findAll(): Promise<PhotoMetadata[]> {
        return this.photoMetadataRepository.find();
    }

    async findById(id: number): Promise<PhotoMetadata> {
        const photoMetadata = await this.photoMetadataRepository.findOne(id);
        if (!photoMetadata) throw new NotFoundException();
        return photoMetadata;
    }

    async create(form: PhotoMetadataDto): Promise<PhotoMetadata> {
        const dto = this.photoMetadataRepository.create();
        dto.height = form.height
        dto.width = form.width
        dto.orientation = form.orientation
        dto.compressed = form.compressed
        dto.comment = form.comment

        const photo: Photo = await this.photoService.findById(form.photoId);
        dto.photo = photo

        return this.photoMetadataRepository.save(dto);
    }

    async updateById(id: number, form: PhotoMetadataDto): Promise<PhotoMetadata> {
        const dto = await this.findById(id);
        dto.height = form.height
        dto.width = form.width
        dto.orientation = form.orientation
        dto.compressed = form.compressed
        dto.comment = form.comment

        if (dto.photoId !== form.photoId) {
            const photo: Photo = await this.photoService.findById(form.photoId);
            dto.photo = photo
        }

        return this.photoMetadataRepository.save(dto);
    }
}
