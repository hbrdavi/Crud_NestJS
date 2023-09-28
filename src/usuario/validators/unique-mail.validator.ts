
import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { UserRepository } from "../user.repository";
import { Injectable } from "@nestjs/common";


@Injectable()
@ValidatorConstraint({async:true})
export class unicMailValidator implements ValidatorConstraintInterface {

    constructor(private usuarioRepository: UserRepository) { }

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        console.log(validationArguments)        
        return  await this.usuarioRepository.emailDisp(value);
    }

}

export const EmailIsUnic = (opcoesDeValidacao: ValidationOptions) => {
    return (objeto: object, propriedade: string) => {
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcoesDeValidacao,
            constraints: [],
            validator: unicMailValidator
        });
    }
}