import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Photo } from "src/photo/entity/photo.entity";

@Entity()
export class Author {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => Photo, photo => photo.author)
    photos: Photo[];
}