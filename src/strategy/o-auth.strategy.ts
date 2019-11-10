import {Injectable} from '@nestjs/common';
import {AuthService} from '../service/auth/auth.service';
import {PassportStrategy} from '@nestjs/passport';
import {OAuth2Strategy} from 'passport-oauth';
import {ConfigService} from '../config/config.service';

@Injectable()
export class oAuthStrategy extends PassportStrategy(OAuth2Strategy, 'oauth') {
    constructor(private readonly authService: AuthService, private config: ConfigService) {
        super({
            authorizationURL: config.get('AUTH_AUTH_ENDPOINT'),
            tokenURL: config.get('AUTH_TOKEN_ENDPOINT'),
            clientID: config.get('AUTH_CLIENT_ID'),
            clientSecret: config.get('AUTH_CLIENT_SECRET'),
            callbackURL: config.get('AUTH_CALLBACK_URL'),
            passReqToCallback: true,
            scope: config.get('AUTH_SCOPE'),
        });
    }

    async validate(request: any, accessToken: string, refreshToken: string, profile, done: (err, user) => void) {
        try {
            const user = {accessToken};
            done(null, user);
        } catch (err) {
            done(err, false);
        }
    }
}
