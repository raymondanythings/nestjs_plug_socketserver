import { Logger } from '@nestjs/common'
import { Inject } from '@nestjs/common'
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
import { Namespace, Server, Socket } from 'socket.io'
import { SocketService } from './socket.service'

@WebSocketGateway(3001, {
  cors: { origin: '*' },
  transports: ['websocket'],
  namespace: /\ws-.+/,
})
export class SocketGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private readonly socketService: SocketService) {}

  @WebSocketServer()
  server: Namespace
  private logger: Logger = new Logger('appGateway')
  public roomList = []

  @SubscribeMessage('test')
  handleTest(@MessageBody() data: { test: string | number }) {
    this.logger.log('data', data)
    console.log(this.server.server.sockets.adapter)
    // const {
    //   sockets: {
    //     adapter: { sids, rooms },
    //   },
    // } = this.server
    // this.roomList = this.socketService.getPublicRooms(rooms, sids)
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
