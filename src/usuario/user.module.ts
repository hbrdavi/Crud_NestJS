import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserController } from "./user.controller";
import { unicMailValidator } from "./validators/unique-mail.validator";
import { UserService } from "./user.service";
import { UserEntity } from "./user.entity";

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    controllers: [UserController],
    providers: [UserService, unicMailValidator]    
}
)
export class UserModule {

}
