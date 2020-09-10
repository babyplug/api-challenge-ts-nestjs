import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entity/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {

    findByUsername(username: string): Promise<User[]> {
        return this.createQueryBuilder("user")
                .addSelect("user.password")
                .where("username = :username", { username })
                // .orderBy("createDate", "DESC")
                .getMany()
    }

}