import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { PhotoModule } from './photo/photo.module';
import { AuthorModule } from './author/author.module';
import { PhotoMetadataModule } from './photo-metadata/photo-metadata.module';
import { AlbumModule } from './album/album.module';

@Module({
  imports: [DatabaseModule, PhotoModule, AuthorModule, PhotoMetadataModule, AlbumModule],
  controllers: [AppController],
  providers: [AppService, ],
})
export class AppModule {}
