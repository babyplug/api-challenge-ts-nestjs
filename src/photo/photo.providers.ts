import { Connection, Repository } from 'typeorm';
import { Photo } from './entity/photo.entity';
import { CONSTANT } from 'src/constant/constant';

export const photoProviders = [
  {
    provide: CONSTANT.PHOTO_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(Photo),
    inject: [CONSTANT.DATABASE_CONNECTION],
  },
];