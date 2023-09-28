
import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { Injectable } from "@nestjs/common";
import { UserService } from "../user.service";


@Injectable()
@ValidatorConstraint({ async: true })
export class unicMailValidator implements ValidatorConstraintInterface {

    constructor(private userService: UserService) { }
    
    async validate(email: string, validationArguments?: ValidationArguments): Promise<boolean> {
        console.log(validationArguments)
        const userList = await this.userService.ListUsers();
        const userDisp = userList.find((user) => user.email == email)
        return userDisp == undefined
    }

}
// registro de custom decorator 
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