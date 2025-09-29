import { CommonModule } from '@angular/common';
import { Component, Signal } from '@angular/core';
import { IPlayer } from '../../shared/player.interface';
import { PlayerService } from '../../shared/service/player.service';
import { ShortNumberPipe } from '../../shared/pipe/short-number-pipe.pipe';
import { ariaLabelDinheiro } from '../../shared/funcoes';

@Component({
  selector: 'app-main-game',
  imports: [CommonModule, ShortNumberPipe],
  templateUrl: './main-game.component.html',
  styleUrl: './main-game.component.scss'
})
export class MainGameComponent {

  player : Signal<IPlayer>;

  ariaLabelDinheiro = ariaLabelDinheiro;

  constructor(
    private playerSrv : PlayerService
  ) {
    this.player = this.playerSrv.player;
  }


  

}
