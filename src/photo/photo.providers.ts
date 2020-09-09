import { Connection, Repository } from 'typeorm';
import { Photo } from './entity/photo.entity';
import { CONSTANT } from 'src/constant/constant';
import { PhotoRepository } from './repository/photo.repository';

export const photoProviders = [
  {
    provide: CONSTANT.PHOTO_REPOSITORY,
    useFactory: (connection: Connection) => connection.getCustomRepository(PhotoRepository),
    inject: [CONSTANT.DATABASE_CONNECTION],
  },
];