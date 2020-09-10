import { Module, forwardRef } from '@nestjs/common';
import { AlbumService } from './album.service';
import { AlbumController } from './album.controller';
import { albumProviders } from './providers/album.providers';
import { DatabaseModule } from 'src/database/database.module';
import { PhotoModule } from 'src/photo/photo.module';

@Module({
  imports: [
    DatabaseModule,
    forwardRef(() => PhotoModule),
  ],
  providers: [
    ...albumProviders,
    AlbumService,
  ],
  controllers: [
    AlbumController
  ],
  exports: [
    AlbumService,
  ]
})
export class AlbumModule {}
