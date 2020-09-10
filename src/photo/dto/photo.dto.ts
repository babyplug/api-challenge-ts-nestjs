import { IsNotEmpty, IsNumber, IsBoolean, Min,  } from "class-validator";

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
    @Min(0)
    authorId: number;
}