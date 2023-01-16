import { SocketAdapter } from './socket/socket.adapter';
import { Module } from '@nestjs/common';

@Module({
  imports: [SocketAdapter],
})
export class AppModule {}
