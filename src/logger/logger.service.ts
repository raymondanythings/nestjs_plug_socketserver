import { Injectable, LoggerService as NestLogger } from '@nestjs/common'

@Injectable()
export class LoggerService implements NestLogger {
  log(message: any, ...optionalParams: any[]) {
    console.log(`🚀 LOG : ${message}`, ...optionalParams)
  }

  error(message: any, ...optionalParams: any[]) {
    console.error(`❌ ERROR : ${message}`, ...optionalParams)
  }

  warn(message: any, ...optionalParams: any[]) {
    console.warn(`🚨 WARN : ${message}`, ...optionalParams)
  }
}
