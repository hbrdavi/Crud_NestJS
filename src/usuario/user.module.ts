import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserRepository } from "./user.repository";
import { unicMailValidator } from "./validators/unique-mail.validator";

@Module({
    imports: [],
    controllers: [UserController],
    providers: [UserRepository, unicMailValidator],
}
)
export class UserModule {

}
