import { Module } from '@nestjs/common';
import { SentryModule } from '@ntegral/nestjs-sentry';
import { LogLevel } from '@sentry/types';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    SentryModule.forRoot({
      debug: true,
      dsn:
        'https://fd6f65bf46a8413a8dfeaaedf8202c60@o4504042661150720.ingest.sentry.io/4504047937257472',
      logLevel: LogLevel.Debug,
      environment: 'development',
      tracesSampleRate: 1.0,
      release: "release-1.0.0"
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
