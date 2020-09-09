import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, ManyToMany, OneToOne } from 'typeorm';
import { Author } from 'src/author/entity/author.entity';
import { PhotoMetadata } from 'src/photo-metadata/entity/photo-metadata.entity';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  description: string;

  @Column()
  filename: string;

  @Column('int')
  views: number;

  @Column()
  isPublished: boolean;

  @Column()
  authorId: number;

  @ManyToOne(type => Author, author => author.photos, {
      eager: true,
  })
  @JoinColumn()
  author: Author;

  @OneToOne(type => PhotoMetadata, photoMetadata => photoMetadata.photo, {
    cascade: true,
  })
  metadata: PhotoMetadata;

  // @ManyToMany(type => Album, album => album.photos)
  // albums: Album[];
}