import { Injectable } from "@nestjs/common"
import { UserEntity } from './user.entity';

@Injectable()
export class UserRepository {
    private usuarios: UserEntity[] = [];

    private buscaPorId(id: string) {
        const usuario = this.usuarios.find(
            usuarioSalvo => usuarioSalvo.id === id
        );

        if(!usuario) {
            throw new Error('Usuário não existe');
        }
        return usuario
    }


    async salvar(usuario: UserEntity) {
        this.usuarios.push(usuario)
    }

    async atualizar(id: string, dadosAtt: Partial<UserEntity>) {
        const usuario  = this.buscaPorId(id)
        Object.entries(dadosAtt).forEach(([chave, valor]) => {
            if (chave === 'id') {
                return;
            }
            usuario[chave] = valor;
        });
        return usuario
    }
    
    async remover(id: string){
        const usuario = this.buscaPorId(id);
        this.usuarios = this.usuarios.filter(
            usuarioSalvo => usuarioSalvo.id !== id
        );
    
        return usuario;
    }

    async listarUsuarios() {
        return this.usuarios
    }

    async emailDisp(email: string) {
        const possivelUsuario = this.usuarios.find(
            usuario => usuario.email === email
        );
        return possivelUsuario === undefined;
    }
}