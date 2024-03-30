import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {UsersModule} from './users/users.module';
import {SequelizeModule} from "@nestjs/sequelize";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {SequelizeConfigService} from "src/config/sequelizeConfig.service";
import {databaseConfig} from "src/config/configuration";
import { AuthModule } from './auth/auth.module';


@Module({
    imports: [
        SequelizeModule.forRootAsync({
            imports: [ConfigModule],
            useClass: SequelizeConfigService
        }),
        ConfigModule.forRoot({
            load: [databaseConfig]
        }),
        UsersModule,
        AuthModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
