import { IsNotEmpty } from "class-validator";

export default class AlbumDto {
    @IsNotEmpty()
    name: string;
}