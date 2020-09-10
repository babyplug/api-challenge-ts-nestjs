import { IsNotEmpty, IsNumber, IsBoolean, Min, IsArray, IsNumberString, IsBooleanString,  } from "class-validator";

export class PhotoDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    filename: string;

    @IsNumber()
    views: number;

    @IsBoolean()
    isPublished: boolean;

    @IsNumber()
    authorId: number;

    albumIds: number[];
}