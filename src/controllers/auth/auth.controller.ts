import {Controller, Logger, UseGuards, Get, Req, Res} from '@nestjs/common';
import {AuthService} from '../../service/auth/auth.service';
import {AuthGuard} from '@nestjs/passport';
import {Response} from 'express';
import {ConfigService} from '../../config/config.service';

@Controller('oauth')
export class AuthController {
    config: ConfigService;

    constructor(private readonly service: AuthService, config: ConfigService) {
        this.config = config;
    }

    // Start Auth
    @Get('login')
    @UseGuards(AuthGuard('oauth2'))
    async login() {
        Logger.log('Login Started');
    }

    // Callback function
    @Get('get_token')
    @UseGuards(AuthGuard('oauth2'))
    async getToken(@Req()req, @Res() res: Response) {
        Logger.log('Controller start Authentication');
        try {
            res.cookie('oAuth2', req.user.accessToken, {domain: 'localhost'}); // set Cookie
            res.redirect('http://localhost:4200/auth/login'); // this redirect to your front end
            return res.send();
        } catch (e) {
            return res.send(e);
        }

    }
}
