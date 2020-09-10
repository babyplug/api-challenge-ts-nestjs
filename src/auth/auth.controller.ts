import { Body, Controller, Post, UseGuards, HttpCode, HttpStatus, Get, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CredentialsDto } from './dto/credentials.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    // @UseGuards(LocalAuthGuard)
    @Post('login')
    @HttpCode(HttpStatus.OK)
    login(@Body() credentials: CredentialsDto) {
      return this.authService.login(credentials);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    profile(@Request() req) {
      return this.authService.profile(req);
    }
}
