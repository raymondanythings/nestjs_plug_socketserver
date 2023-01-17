import { Module } from '@nestjs/common'
import { LoggerModule } from './logger/logger.module'
import { SocketModule } from './socket/socket.module'

@Module({
  imports: [LoggerModule.forRoot(), SocketModule],
})
export class AppModule {}
