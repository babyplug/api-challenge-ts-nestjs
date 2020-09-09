import { Repository, EntityRepository } from "typeorm";
import { Album } from "../entity/album.entity";

@EntityRepository(Album)
export class AlbumRepository extends Repository<Album> {

}