export class TokenDto {
    prefix: string = 'Bearer';
    accessToken: string;

    constructor(accessToken: string) {
        this.accessToken = accessToken;
    }
}