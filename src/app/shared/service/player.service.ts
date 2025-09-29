import { Injectable, signal } from '@angular/core';
import { IPlayer } from '../player.interface';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  readonly player = signal<IPlayer>({dinheiro: 54321} as IPlayer)

  constructor() { }
}
