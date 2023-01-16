import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway(8080, {
  cors: { origin: '*' },
  transports: ['websocket'],
  namespace: 'chat',
})
export class SocketAdapter implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  async handleConnection(client: any, ...args: any[]) {
    console.log(client);
    this.server.emit('users', 'OK');
  }

  handleDisconnect(client: any) {
    console.log(this.server);
  }
}
