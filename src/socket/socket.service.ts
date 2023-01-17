import { Injectable } from '@nestjs/common'

@Injectable()
export class SocketService {
  public getPublicRooms(
    rooms: Map<string, Set<string>>,
    sids: Map<string, Set<string>>,
  ): Map<string, Set<string>>[] {
    const publicRooms = []
    rooms.forEach((_, key) => {
      if (sids.get(key) === undefined) {
        publicRooms.push(rooms)
      }
    })
    return publicRooms
  }
}
