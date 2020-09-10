import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { PhotoModule } from './photo/photo.module';
import { AuthorModule } from './author/author.module';
import { PhotoMetadataModule } from './photo-metadata/photo-metadata.module';
import { AlbumModule } from './album/album.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [DatabaseModule, PhotoModule, AuthorModule, PhotoMetadataModule, AlbumModule, UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, ],
})
export class AppModule {}
