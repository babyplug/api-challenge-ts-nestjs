import { Module, forwardRef } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { PhotoController } from './photo.controller';
import { photoProviders } from './photo.providers';
import { DatabaseModule } from 'src/database/database.module';
import { AuthorModule } from 'src/author/author.module';
import { AlbumModule } from 'src/album/album.module';

@Module({
  imports: [
    DatabaseModule,
    AuthorModule,
    // AlbumModule,
    forwardRef(() => AlbumModule),
  ],
  providers: [
    ...photoProviders,
    PhotoService,
  ],
  controllers: [PhotoController],
  exports: [PhotoService],
})
export class PhotoModule {}
