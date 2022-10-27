import { SentryService } from '@ntegral/nestjs-sentry';
import { AppService } from './app.service';
export declare class AppController {
    private readonly client;
    private readonly appService;
    constructor(client: SentryService, appService: AppService);
    getHello(): string;
}
