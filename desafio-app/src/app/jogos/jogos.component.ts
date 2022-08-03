import { Component, OnInit } from '@angular/core';
import { Jogo } from '../model/jogo';

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.css']
})
export class JogosComponent implements OnInit {

  jogos: Jogo[] = [{
    time1: 'BOT',
    imageUrl1: '/assets/images/BOT.PNG',
    time2: 'CEA',
    imageUrl2: '/assets/images/CEA.PNG',
  },{
    time1: 'JUV',
    imageUrl1: '/assets/images/JUV.PNG',
    time2: 'AME',
    imageUrl2: '/assets/images/AME.PNG',
  },{
    time1: 'ACG',
    imageUrl1: '/assets/images/ACG.PNG',
    time2: 'BGT',
    imageUrl2: '/assets/images/BGT.PNG',
  },{
    time1: 'AVA',
    imageUrl1: '/assets/images/AVA.PNG',
    time2: 'COR',
    imageUrl2: '/assets/images/COR.PNG',
  },{
    time1: 'SAO',
    imageUrl1: '/assets/images/SAO.PNG',
    time2: 'FLA',
    imageUrl2: '/assets/images/FLA.PNG',
  },{
    time1: 'FLU',
    imageUrl1: '/assets/images/FLU.PNG',
    time2: 'CUI',
    imageUrl2: '/assets/images/CUI.PNG',
  },{
    time1: 'PAL',
    imageUrl1: '/assets/images/PAL.PNG',
    time2: 'GOI',
    imageUrl2: '/assets/images/GOI.PNG',
  },{
    time1: 'FOR',
    imageUrl1: '/assets/images/FOR.PNG',
    time2: 'INT',
    imageUrl2: '/assets/images/INT.PNG',
  },{
    time1: 'CAM',
    imageUrl1: '/assets/images/CAM.PNG',
    time2: 'CAP',
    imageUrl2: '/assets/images/CAP.PNG',
  },{
    time1: 'CFC',
    imageUrl1: '/assets/images/CFC.PNG',
    time2: 'SAN',
    imageUrl2: '/assets/images/SAN.PNG',
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
