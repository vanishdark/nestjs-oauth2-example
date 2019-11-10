import {Module} from '@nestjs/common';
import {AuthorizationModule} from './module/authorization.module';
import {AppService} from './app.service';
import {AppController} from './app.controller';
import {ConfigModule} from './config/config.module';

@Module({
    imports: [ConfigModule, AuthorizationModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
