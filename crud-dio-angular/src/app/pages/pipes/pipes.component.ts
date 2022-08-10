import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  number = 0;
  text = 'hello world';
  date = new Date;
  pessoa = {
    nome: 'Ivonaldo',
    idade: 26,
    profissao: 'Instrutor'
  }
  nomes = ['Ivonaldo','ana','maria'];

  constructor(private uppercasePipe: UpperCasePipe) { }

  ngOnInit(): void {
  }

  mudaValor(){
    this.number = 1233214;
  }

  add(text: string){
    this.nomes.push(text);
  }

}
