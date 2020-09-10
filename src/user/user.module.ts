import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DatabaseModule } from 'src/database/database.module';
import { userProviders } from './providers/user.providers';

@Module({
  providers: [
    ...userProviders,
    UserService,
  ],
  controllers: [UserController],
  imports: [
    DatabaseModule,
  ],
  exports: [
    UserService,
  ]
})
export class UserModule {}
