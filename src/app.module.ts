import { Module } from '@nestjs/common';
import { SentryModule } from '@ntegral/nestjs-sentry';
import { LogLevel } from '@sentry/types';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    SentryModule.forRoot({
      debug: true,
      dsn: "https://4478e5148514412897ed0389c848b25c@o4504042661150720.ingest.sentry.io/4504054567075840",
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
