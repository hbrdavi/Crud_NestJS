import { Module } from '@nestjs/common';
import { UserModule } from './usuario/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigService } from './configs/postgres.config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UserModule, //modulo de controle de usuarios 
    ConfigModule.forRoot({//modulo de configurações do Nest
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({ //modulo do banco de dados
      useClass: PostgresConfigService,
      inject: [PostgresConfigService]
    })],
})
export class AppModule { }
