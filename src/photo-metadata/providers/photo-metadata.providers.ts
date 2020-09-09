import { Connection, Repository } from 'typeorm';
import { CONSTANT } from 'src/constant/constant';
import { PhotoMetadataRepository } from '../repository/photo-metadata.repository';

export const photoMetadataProviders = [
  {
    provide: CONSTANT.PHOTO_METADATA_REPOSITORY,
    useFactory: (connection: Connection) => connection.getCustomRepository(PhotoMetadataRepository),
    inject: [CONSTANT.DATABASE_CONNECTION],
  },
];