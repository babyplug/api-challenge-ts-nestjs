import { Module } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { PhotoController } from './photo.controller';
import { photoProviders } from './photo.providers';
import { DatabaseModule } from 'src/database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoRepository } from './repository/photo.repository';
import { AuthorModule } from 'src/author/author.module';
import { AlbumModule } from 'src/album/album.module';

@Module({
  imports: [
    DatabaseModule,
    AuthorModule,
    AlbumModule,
  ],
  providers: [
    ...photoProviders,
    PhotoService,
  ],
  controllers: [PhotoController],
  exports: [PhotoService],
})
export class PhotoModule {}
