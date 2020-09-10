export class TokenDto {
    prefix: string;
    accessToken: string;

    constructor(accessToken: string) {
        this.accessToken = accessToken;
    }
}