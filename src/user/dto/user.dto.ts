import { IsNotEmpty, IsNumber } from "class-validator";

export class UserDto {
    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsNotEmpty()
    @IsNumber()
    age: number;

    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    password: string;

}