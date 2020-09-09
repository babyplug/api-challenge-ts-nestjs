import { Module } from '@nestjs/common';
import { AlbumService } from './album.service';
import { AlbumController } from './album.controller';
import { albumProviders } from './providers/album.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [
    ...albumProviders,
    AlbumService,
  ],
  controllers: [
    AlbumController
  ],
  imports: [
    DatabaseModule,
  ],
  exports: [
    AlbumService,
  ]
})
export class AlbumModule {}
