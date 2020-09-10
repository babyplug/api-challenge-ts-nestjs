import { Get, Post, Put, Delete, Controller, Body, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('user')
@UseGuards(JwtAuthGuard)
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    getAll(){
        return this.userService.findAll();
    }

    @Post()
    create(@Body() form: UserDto){
        return this.userService.createUser(form)
    }

    @Get(':id')
    getById(@Param('id') id: number){
        return this.userService.findById(id);
    }

    @Put(':id')
    updateById(@Param('id') id: number, @Body() form: UserDto){
        return this.userService.updateById(id, form);
    }

    @Put(':id')
    deleteById(@Param('id') id: number){
        return 'flskdjf';
    }
}
