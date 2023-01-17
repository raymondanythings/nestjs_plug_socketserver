import { Module } from '@nestjs/common'
import { SocketGateway } from './socket.gateway'
import { SocketService } from './socket.service'

@Module({
  imports: [],
  providers: [SocketGateway, SocketService],
  exports: [SocketService],
})
export class SocketModule {}
