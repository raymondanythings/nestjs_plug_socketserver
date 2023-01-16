import { Logger } from '@nestjs/common'
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets'
import { Server, Socket } from 'socket.io'

@WebSocketGateway(3001, {
  cors: { origin: '*' },
  transports: ['websocket'],
  namespace: /\ws-.+/,
})
export class SocketGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server
  private logger: Logger = new Logger('appGateway')

  @SubscribeMessage('test')
  handleTest(@MessageBody() data: { test: string | number }) {
    this.logger.log('data', data)
  }

  afterInit(server: Server) {
    this.logger.log('CONNECT INIT DONE')
  }

  handleConnection(@ConnectedSocket() socket: Socket) {
    this.logger.log('someone join ', socket.nsp.sockets.size)

    this.server.emit('users', 'OK')
  }

  handleDisconnect(@ConnectedSocket() socket: Socket) {
    this.logger.log(this.server)
    console.log(`${socket.id} disconencted`)
  }
}
