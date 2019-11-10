import {HttpModule, Module} from '@nestjs/common';
import {AuthService} from '../service/auth/auth.service';
import {PassportModule} from '@nestjs/passport';
import {AuthController} from '../controllers/auth/auth.controller';
import {ConfigModule} from '../config/config.module';
import {oAuthStrategy} from '../strategy/o-auth.strategy';

@Module({
    imports: [HttpModule, PassportModule.register({defaultStrategy: 'oauth2', session: true}), ConfigModule],
    controllers: [AuthController],
    providers: [AuthService, oAuthStrategy],
    exports: [AuthService],
})
export class AuthorizationModule {

}
