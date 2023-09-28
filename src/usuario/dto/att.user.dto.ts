import { IsEmail, IsNotEmpty, IsOptional, MinLength } from "class-validator";
import { EmailIsUnic } from "../validators/unique-mail.validator";


export class AttUserDTO {
    @IsNotEmpty({ message: "o nome não pode ser vazio" })
    @IsOptional()
    nome: string

    @IsEmail(undefined, { message: "Email inválido" })
    @EmailIsUnic({ message: 'Já existe um usuário com este e-mail' })
    @IsOptional()
    email: string

    @MinLength(4, { message: "a senha precisa ter mais de 4 caracteres" })
    @IsOptional()
    senha: string

    id: string
}