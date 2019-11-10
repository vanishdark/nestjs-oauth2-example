import { Injectable} from '@nestjs/common';
import {ConfigService} from '../../config/config.service';

@Injectable()
export class AuthService {
    config: ConfigService;

    constructor(config: ConfigService) {
        this.config = config;
    }

    // Use for dataabase access or wathever your need

}
