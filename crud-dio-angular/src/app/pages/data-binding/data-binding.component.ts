import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  text = 'Ivonaldo Soares';
  imageUrl = 'https://picsum.photos/300/300';
  alt = 'Essa é uma imagem';
  buttonText = 'Cliqui aqui';
  textRed = false;
  className = 'teste';
  bgColor = 'green';
  fontSize = '20px';
  widthImg = 100;
  textInput = '';
  number = 0;
  destroy = false;

  constructor() { }

  ngOnInit(): void {
  }

  retornaNome(){
    return this.text;
  }

  clicou(value: any){
    this.text = 'Ivo Soares';
    console.log('clicou aqui', value);
    this.textRed = true;
  }

  clicouNoFilho(text: string){
    console.log(text);
  }

  incrementa(){
    this.number++;
  }

  destroiComponente(){
    this.destroy = true;
  }

}
