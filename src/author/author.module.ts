import { Module } from '@nestjs/common';
import { AuthorController } from './author.controller';
import { AuthorService } from './author.service';
import { authorProviders } from './providers/author.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({  
  controllers: [
    AuthorController
  ],
  providers: [
    AuthorService,
    ...authorProviders
  ],
  imports: [
    DatabaseModule,
  ],
  exports: [
    AuthorService,
  ]
})
export class AuthorModule {}
