import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { sleep } from '../../shared/funcoes';
import { Router } from '@angular/router';

const animation_duration = 500

@Component({
  selector: 'app-startup',
  imports: [CommonModule],
  templateUrl: './startup.component.html',
  styleUrl: './startup.component.scss',
  animations: [
    trigger('aparecer', [
      transition(':enter', [
        style({transform: 'translate(50%, -50%)'}),
        animate(animation_duration + 'ms ease-out', style({transform: 'translate(-50%, -50%)'}))
      ]),
      transition(':leave', [
        animate(animation_duration + 'ms ease-in', style({transform: 'translate(-150%, -50%)'}))
      ])
    ])
  ]
})
export class StartupComponent implements OnInit {

  @ViewChild('audioSrc', {static: true}) audioSrc : ElementRef<HTMLAudioElement>

  showImg = 0;
  apresentacaoDebounce = false;

  constructor(
    private router : Router
  ){}

  @HostListener('document:click', ['$event'])
  async clickNaTela(evt:MouseEvent) {
    await this.rodarApresentação();
  }

  async ngOnInit(): Promise<void> {
    try {
      await this.rodarApresentação();
    } catch(reason) {

    }
  } 

  async rodarApresentação() {
    if(this.apresentacaoDebounce) return;
    const audioSrc = this.audioSrc.nativeElement;
    audioSrc.play();
    this.apresentacaoDebounce = true;

    this.showImg = 1;
    await this.playAudioPromise(audioSrc, 'logo/carneiro games apresenta.mp3');
    this.showImg = 0
    await sleep(animation_duration);
    
    this.showImg = 2;
    await this.playAudioPromise(audioSrc, 'logo/minha fazendinha.mp3');
    await sleep(300);
    await this.playAudioPromise(audioSrc, 'game/cow-moo.mp3');
    await sleep(300);
    this.router.navigate(['mainGame'])

  }

  playAudioPromise(audioElement: HTMLAudioElement, src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      audioElement.src = src;
      audioElement.load();
      audioElement.play().then(() => {
        // Quando o áudio terminar de tocar, resolve a Promise
        audioElement.onended = () => resolve();
      }).catch(error => {
        // Se houver um erro, rejeita a Promise
        reject(error);
      });
    });
  }


}
