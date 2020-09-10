import { Connection, Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import { CONSTANT } from 'src/constant/constant';
import { UserRepository } from '../repository/user.repository';

export const userProviders = [
    {
        provide: CONSTANT.USER_REPOSITORY,
        useFactory: (connection: Connection) => connection.getCustomRepository(UserRepository),
        inject: [CONSTANT.DATABASE_CONNECTION],
    },
];