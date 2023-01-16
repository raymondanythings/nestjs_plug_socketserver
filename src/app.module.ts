import { Module } from '@nestjs/common'
import { LoggerModule } from './logger/logger.module'
import { SocketModule } from './socket/socket.module'

@Module({
  imports: [SocketModule, LoggerModule.forRoot()],
})
export class AppModule {}
