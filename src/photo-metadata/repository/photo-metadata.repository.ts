import { EntityRepository, Repository } from "typeorm";
import { PhotoMetadata } from "../entity/photo-metadata.entity";

@EntityRepository(PhotoMetadata)
export class PhotoMetadataRepository extends Repository<PhotoMetadata> {

}