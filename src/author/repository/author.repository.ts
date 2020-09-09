import { EntityRepository, Repository } from "typeorm";
import { Author } from "../entity/author.entity";

@EntityRepository(Author)
export class AuthorRepository extends Repository<Author> {

    findByIdAndDeleted(id: number): Promise<Author> {
        return this.findOne(id);
    }
}