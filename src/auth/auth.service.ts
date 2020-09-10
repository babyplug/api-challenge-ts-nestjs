import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { CredentialsDto } from './dto/credentials.dto';
import { User } from 'src/user/entity/user.entity';
import { TokenDto } from './dto/token.dto';
import * as bcrypt from "bcryptjs";

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
    ) {}

    async login(credentials: CredentialsDto): Promise<TokenDto> {
        const { username, password } = credentials

        const users: User[] = await this.userService.findByUsernameWithPassword(username);
        if (!users || users.length <= 0) {
            return null;
        }
        const user: User = users[0];

        if (!await bcrypt.compare(credentials.password, user.password)) {
            return null;
        }

        const payload = { username: user.username, sub: user.id };
        const token = this.jwtService.sign(payload);
        
        return new TokenDto(token);
    }

    profile(req: any): Promise<User> {
        const { userId } = req.user;
        return this.userService.findById(userId);
    }
}
