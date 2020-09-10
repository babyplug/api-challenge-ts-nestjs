import { IsBoolean, Min, IsNotEmpty, IsNumber } from "class-validator";

export default class PhotoMetadataDto {
    @IsNumber()
    height: number;

    @IsNumber()
    width: number;

    @IsNotEmpty()
    orientation: string;

    @IsBoolean()
    compressed: boolean;

    @IsNotEmpty()
    comment: string;
    
    @IsNumber()
    @IsNotEmpty()
    photoId: number;
}