import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  constructor() { }

  inicio = [
    {
      imagen: 'assets/imagenes/vln.png',
      nombre: 'Instrumentos de de Cuerda',
      descrip: 'Los instrumentos de cuerda o cordófonos son instrumentos musicales que producen sonidos por medio de las vibraciones de una o más cuerdas, usualmente amplificadas por medio de una caja de resonancia.',
      direccion: '/tab2',
    },
    {
      imagen: 'assets/imagenes/bombo1.png',
      nombre: 'Instrumentos de Percusión',
      descrip: ' Un instrumento de percusión es un tipo de instrumento musical cuyo sonido se origina al ser golpeado o agitado. ',
      direccion: '/tab4',
    },
    {
      imagen: 'assets/imagenes/vientos.png',
      nombre: 'Instrumentos de Viento',
      descrip: 'Los instrumentos de viento son una familia de instrumentos musicales los cuales producen el sonido por la vibración del contenido de aire en su interior, sin necesidad de cuerdas o membranas porque solo requiere de la vibración del aire.  ',
      direccion: '/tab5',
    },
    {
      imagen: 'assets/imagenes/piano.png',
      nombre: 'Instrumentos de Teclas',
      descrip: ' Un instrumento de teclado es un tipo de instrumento musical que usa un teclado para interpretarlo. El teclado es la parte o sección frontal, que está provista de teclas y destinada a ser accionada por medio de los dedos de las manos. ',
      direccion: '/tab6',
    },
  ]

}



