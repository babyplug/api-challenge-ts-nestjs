import { Connection, Repository } from 'typeorm';
import { CONSTANT } from 'src/constant/constant';
import { AuthorRepository } from '../repository/author.repository';

export const authorProviders = [
  {
    provide: CONSTANT.AUTHOR_REPOSITORY,
    useFactory: (connection: Connection) => connection.getCustomRepository(AuthorRepository),
    inject: [CONSTANT.DATABASE_CONNECTION],
  },
];