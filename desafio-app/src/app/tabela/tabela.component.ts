import { Component, OnInit } from '@angular/core';
import { Time } from '../model/time';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'P', 'J', 'V', 'E', 'D', 'GP', 'GC', 'SG', 'PORC'];

  times: Time[] = [{
    nome: 'Palmeiras',
    P: 42,
    J: 20,
    V: 12,
    E: 6,
    D: 2,
    GP: 33,
    GC: 14,
    SG: 19,
    PORC: 70
  },{
    nome: 'Corinthians',
    P: 38,
    J: 20,
    V: 11,
    E: 5,
    D: 4,
    GP: 25,
    GC: 19,
    SG: 6,
    PORC: 63.3
  },{
    nome: 'Fluminense',
    P: 35,
    J: 20,
    V: 10,
    E: 5,
    D: 5,
    GP: 31,
    GC: 22,
    SG: 9,
    PORC: 58.3
  },{
    nome: 'Athletico-PR',
    P: 34,
    J: 20,
    V: 10,
    E: 4,
    D: 6,
    GP: 25,
    GC: 20,
    SG: 5,
    PORC: 56.7
  },{
    nome: 'Flamengo',
    P: 33,
    J: 20,
    V: 10,
    E: 3,
    D: 7,
    GP: 30,
    GC: 19,
    SG: 11,
    PORC: 55,
  },{
    nome: 'Internacional',
    P: 33,
    J: 20,
    V: 8,
    E: 9,
    D: 3,
    GP: 30,
    GC: 20,
    SG: 10,
    PORC: 55,
  },{
    nome: 'Atlético-MG',
    P: 32,
    J: 20,
    V: 8,
    E: 8,
    D: 4,
    GP: 27,
    GC: 23,
    SG: 4,
    PORC: 53.3,
  },{
    nome: 'Bragantino',
    P: 30,
    J: 20,
    V: 8,
    E: 6,
    D: 6,
    GP: 31,
    GC: 23,
    SG: 8,
    PORC: 50,
  },{
    nome: 'Santos',
    P: 27,
    J: 20,
    V: 6,
    E: 9,
    D: 5,
    GP: 24,
    GC: 18,
    SG: 6,
    PORC: 45,
  },{
    nome: 'São Paulo',
    P: 26,
    J: 20,
    V: 5,
    E: 11,
    D: 4,
    GP: 28,
    GC: 25,
    SG: 3,
    PORC: 43.3,
  },{
    nome: 'Goiás',
    P: 25,
    J: 20,
    V: 6,
    E: 7,
    D: 7,
    GP: 22,
    GC: 25,
    SG: -3,
    PORC: 41.7,
  },{
    nome: 'Botafogo',
    P: 24,
    J: 20,
    V: 7,
    E: 3,
    D: 10,
    GP: 19,
    GC: 25,
    SG: -6,
    PORC: 40,
  },{
    nome: 'América-MG',
    P: 24,
    J: 20,
    V: 7,
    E: 3,
    D: 10,
    GP: 16,
    GC: 23,
    SG: -7,
    PORC: 40,
  },{
    nome: 'Ceará',
    P: 24,
    J: 20,
    V: 5,
    E: 9,
    D: 6,
    GP: 21,
    GC: 21,
    SG: 0,
    PORC: 40,
  },{
    nome: 'Coritiba',
    P: 22,
    J: 20,
    V: 6,
    E: 4,
    D: 10,
    GP: 22,
    GC: 31,
    SG: -9,
    PORC: 36.7,
  },{
    nome: 'Avaí',
    P: 21,
    J: 20,
    V: 6,
    E: 3,
    D: 11,
    GP: 21,
    GC: 33,
    SG: -12,
    PORC: 35,
  },{
    nome: 'Cuiabá',
    P: 20,
    J: 20,
    V: 5,
    E: 5,
    D: 10,
    GP: 14,
    GC: 21,
    SG: -7,
    PORC: 33.3,
  },{
    nome: 'Fortaleza',
    P: 18,
    J: 20,
    V: 4,
    E: 6,
    D: 10,
    GP: 16,
    GC: 23,
    SG: -7,
    PORC: 30,
  },{
    nome: 'Atlético-GO',
    P: 17,
    J: 20,
    V: 4,
    E: 5,
    D: 11,
    GP: 19,
    GC: 32,
    SG: -13,
    PORC: 28.3,
  },{
    nome: 'Juventude',
    P: 16,
    J: 20,
    V: 3,
    E: 7,
    D: 10,
    GP: 16,
    GC: 33,
    SG: -17,
    PORC: 26.7,
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
