import { Module } from '@nestjs/common';
import { PhotoMetadataController } from './photo-metadata.controller';
import { PhotoMetadataService } from './photo-metadata.service';
import { photoMetadataProviders } from './providers/photo-metadata.providers';
import { DatabaseModule } from 'src/database/database.module';
import { PhotoModule } from 'src/photo/photo.module';

@Module({
  imports: [
    DatabaseModule,
    PhotoModule,
  ],
  exports: [
    PhotoMetadataService,
  ],
  providers: [
    ...photoMetadataProviders,
    PhotoMetadataService,
  ],
  controllers: [
    PhotoMetadataController
  ],
})
export class PhotoMetadataModule {}
