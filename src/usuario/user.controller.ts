import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserEntity } from './user.entity';
import {CreateUserDTO } from './dto/create.user.dto';
import { ListUserDTO } from './dto/list.user.dto';
import { AttUserDTO } from './dto/att.user.dto';
@Controller('/usuarios')
export class UserController {

  constructor(private userRepository: UserRepository) {

  }

  @Post()
  async criaUsuario(@Body() dadosUsuario: CreateUserDTO) {

    const usuarioEntity = new UserEntity();
    usuarioEntity.email = dadosUsuario.email;
    usuarioEntity.senha = dadosUsuario.senha;
    usuarioEntity.nome = dadosUsuario.nome;
    usuarioEntity.id = Math.random().toString(36).substring(2)

    this.userRepository.salvar(usuarioEntity)
    return { Usuario: new ListUserDTO(usuarioEntity.id, usuarioEntity.nome), message: "Usuário criado com sucesso" };
  }

  @Get()
  async listaUsuarios() {
    const usuariosSalvos = await this.userRepository.listarUsuarios();
    return usuariosSalvos.map(
      usuario => new ListUserDTO(
        usuario.id,
        usuario.nome
      )
    );
  }

  @Put('/:id')
  async atualizaUsuario(@Param('id') id: string, @Body() novosDados: AttUserDTO) {
    const usuarioAtualizado = await this.userRepository.atualizar(id, novosDados);

    return {
      usuario: usuarioAtualizado,
      mensagem: 'Usuário atualizado com sucesso',
    }
  }
  @Delete('/:id')
  async removeUsuario(@Param('id') id: string) {
    const usuarioRemovido = await this.userRepository.remover(id);

    return {
      usuario: usuarioRemovido,
      mensagem: 'usuário removido com sucesso'
    }
  }
}
