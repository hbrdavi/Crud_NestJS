import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { CreateUserDTO } from './dto/create.user.dto';
import { AttUserDTO } from './dto/att.user.dto';
import { UserService } from './user.service';

@Controller('/usuarios')
export class UserController {

  constructor(
    private userService: UserService
  ) { }

  @Post()
  async criaUsuario(@Body() dadosUsuario: CreateUserDTO) {

    const usuarioEntity = new UserEntity();
    usuarioEntity.email = dadosUsuario.email;
    usuarioEntity.senha = dadosUsuario.senha;
    usuarioEntity.nome = dadosUsuario.nome;
    const usuarioCriado = this.userService.CreateUser(usuarioEntity)
    return {
      usuario: usuarioCriado,
      mensagem: 'Usuário criado com sucesso',
    }
  }

  @Get()
  async listaUsuarios() {
    return await this.userService.ListUsers();
  }

  @Put('/:id')
  async atualizaUsuario(@Param('id') id: string, @Body() novosDados: AttUserDTO) {
    const usuarioAtualizado = await this.userService.UpdateUser(id, novosDados);
    return {
      usuario: usuarioAtualizado,
      mensagem: 'Usuário atualizado com sucesso',
    }
  }

  @Delete('/:id')
  async removeUsuario(@Param('id') id: string) {
    const usuarioRemovido = await this.userService.DeleteUser(id);
    return {
      usuario: usuarioRemovido,
      mensagem: 'usuário removido com sucesso'
    }
  }
}
