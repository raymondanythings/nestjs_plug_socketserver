import { DynamicModule, Global, Module } from '@nestjs/common'
import { LOGGER_OPTION } from 'common/common.constant'
import { LoggerService } from './logger.service'

@Module({})
@Global()
export class LoggerModule {
  static async forRoot(): Promise<DynamicModule> {
    return {
      module: LoggerModule,
      providers: [
        {
          provide: LOGGER_OPTION,
          useValue: null,
        },
        LoggerService,
      ],
      exports: [LoggerService],
    }
  }
}
