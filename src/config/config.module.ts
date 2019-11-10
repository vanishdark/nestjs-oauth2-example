import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';

@Module({
    providers: [
        {
            provide: ConfigService,
            useValue: new ConfigService(`src/environments/${process.env.NODE_ENV || 'development' || 'production'}.env`),
        },
    ],
    exports: [ConfigService],
})
export class ConfigModule {}
