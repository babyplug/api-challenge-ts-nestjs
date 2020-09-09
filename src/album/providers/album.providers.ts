import { Connection, Repository } from 'typeorm';
import { CONSTANT } from 'src/constant/constant';
import { AlbumRepository } from '../repository/album.repository';

export const albumProviders = [
  {
    provide: CONSTANT.ALBUM_REPOSITORY,
    useFactory: (connection: Connection) => connection.getCustomRepository(AlbumRepository),
    inject: [CONSTANT.DATABASE_CONNECTION],
  },
];