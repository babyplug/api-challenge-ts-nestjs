import { Injectable, Inject } from '@nestjs/common';
import { CONSTANT } from 'src/constant/constant';
import { UserRepository } from './repository/user.repository';
import { User } from './entity/user.entity';
import { UserDto } from './dto/user.dto';
import * as bcrypt from "bcryptjs";

@Injectable()
export class UserService {
    constructor(
        @Inject(CONSTANT.PHOTO_REPOSITORY) private userRepository: UserRepository,
    ){}

    findAll(): Promise<User[]> {
        return this.userRepository.find({ });
    }

    createUser(form: UserDto): Promise<User> {
        let dto = this.userRepository.create()
        // dto.deleted = false
        dto.firstName = form.firstName
        dto.lastName = form.lastName
        dto.age = form.age
        dto.username = form.username
        dto.password = this.hashPassword(form.password);

        return this.userRepository.save(dto)
    }

    async findById(userId: number): Promise<User> {
        const user: User = await this.userRepository.findOne(userId)
        return user
    }

    async updateById(userId: number, form: UserDto): Promise<User> {
        const dto: User = await this.findById(userId)
        dto.firstName = form.firstName
        dto.lastName = form.lastName
        dto.age = form.age

        return await this.userRepository.save(dto)
    }

    // async deleteById(userId: number): Promise<void> {
    //     const dto: User = await this.findById(userId)

    //     await this.userRepository.save(dto)
    // }

    register(form: UserDto): Promise<void> {
        let dto = this.userRepository.create()

        dto.firstName = form.firstName
        dto.lastName = form.lastName
        dto.age = form.age
        dto.username = form.username
        dto.password = this.hashPassword(form.password);

        this.userRepository.save(dto)
    }

    private async hashPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, 10)
    }

    findByUsernameWithPassword(username: string): Promise<User[]> {
        return this.userRepository.findByUsername(username.trim());
    }

}
