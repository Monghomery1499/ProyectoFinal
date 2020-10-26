import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab6',
  templateUrl: './tab6.page.html',
  styleUrls: ['./tab6.page.scss'],
})
export class Tab6Page {

  constructor() {}
  
  instrumentos =[
    {
      nombre:'Acordeón',
      imagen:'assets/teclas/Acordion.jpeg',
      audio: 'assets/teclas/Acordion.mp3',
      descrip: ' El acordeón es un instrumento musical armónico de viento, constituido por un fuelle, un diapasón y dos cajas armónicas de madera. En sus dos extremos el fuelle está cerrado por las cajas de madera. La parte de la mano derecha del acordeón tiene además un "diapasón" con una disposición de teclas que pueden ser como el de un piano (acordeón a piano) o teclas redondas (también llamadas botones) (acordeón cromático.  '
    },
    {
      nombre:'Órgano',
      imagen:'assets/teclas/organo.png',
      audio: 'assets/teclas/organo.mp3',
      descrip: 'El órgano es un instrumento musical que produce sonido al conducir aire insuflado por medio de una turbina con un fuelle a través de unos tubos preseleccionados desde un teclado. '
    },
    {
      nombre:'Piano',
      imagen:'assets/teclas/piano.png',
      audio: 'assets/teclas/piano.mp3',
      descrip: 'El piano es un instrumento musical armónico clasificado como instrumento de percusión y de cuerdas percutidas por el sistema de clasificación tradicional, y según la clasificación de Hornbostel-Sachs es un cordófono simple.  '
    }
  ]
  playSound(instrumento) {
    let sonido = new Audio();
    sonido.src = instrumento.audio;
    sonido.load();
    sonido.play();
  }

}
