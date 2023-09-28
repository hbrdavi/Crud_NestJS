import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ListUserDTO } from './dto/list.user.dto';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { AttUserDTO } from './dto/att.user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) { }

    async ListUsers() {
        const usuariosSalvos = await this.userRepository.find()
        return usuariosSalvos.map((user) => new ListUserDTO(user.id, user.nome, user.email))
    }
    async CreateUser(userEntity: UserEntity) {
        return await this.userRepository.save(userEntity)
    }
    async UpdateUser(id: string, userEntity: AttUserDTO) {
        return await this.userRepository.update(id, userEntity)
    }
    async DeleteUser(id: string) {
        return await this.userRepository.delete(id)
    }
}