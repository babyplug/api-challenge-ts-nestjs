import { Module } from '@nestjs/common';
import { PhotoMetadataController } from './photo-metadata.controller';
import { PhotoMetadataService } from './photo-metadata.service';
import { photoMetadataProviders } from './providers/photo-metadata.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [
    DatabaseModule,
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
