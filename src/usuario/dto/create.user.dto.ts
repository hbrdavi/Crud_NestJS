import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { EmailIsUnic } from "../validators/unique-mail.validator";


export class CreateUserDTO {
    @IsNotEmpty({message:"o nome não pode ser vazio"})
    nome: string

    @IsEmail(undefined, {message: "Email inválido"})
    @EmailIsUnic({ message: 'Já existe um usuário com este e-mail' })
    email: string

    @MinLength(4,{message: "a senha precisa ter mais de 4 caracteres"})
    senha: string

    id:string
}