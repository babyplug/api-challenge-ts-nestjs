import { Injectable, Inject } from '@nestjs/common';
import { CONSTANT } from 'src/constant/constant';
import { PhotoMetadataRepository } from './repository/photo-metadata.repository';
import { PhotoMetadata } from './entity/photo-metadata.entity';
import PhotoMetadataDto from './dto/photo-metadata.dto';

@Injectable()
export class PhotoMetadataService {
    constructor(
        // @Inject('PHOTO_REPOSITORY') private photoRepository: Repository<Photo>,
        @Inject(CONSTANT.PHOTO_METADATA_REPOSITORY) private photoMetadataRepository: PhotoMetadataRepository,
    ){}

    findAll(): Promise<PhotoMetadata[]> {
        return this.photoMetadataRepository.find();
    }

    findById(id: number): Promise<PhotoMetadata> {
        return this.photoMetadataRepository.findOne(id);
    }

    create(form: PhotoMetadataDto): Promise<PhotoMetadata> {
        const dto = this.photoMetadataRepository.create();
        dto.height = form.height
        dto.width = form.width
        dto.orientation = form.orientation
        dto.compressed = form.compressed
        dto.comment = form.comment
        dto.photoId = form.photoId
        
        return this.photoMetadataRepository.save(dto);
    }

    async updateById(id: number, form: PhotoMetadataDto): Promise<PhotoMetadata> {
        const dto = await this.findById(id);
        dto.height = form.height
        dto.width = form.width
        dto.orientation = form.orientation
        dto.compressed = form.compressed
        dto.comment = form.comment
        dto.photoId = form.photoId

        return this.photoMetadataRepository.save(dto);
    }
}
