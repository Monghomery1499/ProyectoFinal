import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page {

  constructor() {}
  instrumentos =[
    {
      nombre:'Flauta Dulce',
      imagen:'assets/viento/flautadulce.jpeg',
      audio: 'assets/viento/flautadulce.mp3',
      descrip: 'Es un instrumento de viento muy antiguo. Popular desde la Edad Media hasta finales del Barroco, fue quedando relegado su uso al desarrollarse la orquesta clásica, poblada de instrumentos más sonoros. '
    },
    {
      nombre:'Clarinete',
      imagen:'assets/viento/clarinete.png',
      audio: 'assets/viento/clarinete.mp3',
      descrip: 'El clarinete es un instrumento musical clasificado dentro de la familia viento madera formado por un tubo cilíndrico con una sola lengüeta que se fija sobre una abertura en la boquilla en el extremo superior del tubo. Por el inferior termina en un pabellón acampanado. '
    },
    {
      nombre:'Trompa',
      imagen:'assets/viento/contrabass.jpg',
      audio: 'assets/viento/contrabass.mp3',
      descrip: 'La trompa es un instrumento de viento-metal que tiene un carácter muy versátil y abarca una tesitura muy amplia con pocos cilindros. Además este instrumento puede emitir tanto sonidos suaves y dulces como ásperos y duros. '
    },
    {
      nombre:'Tombon',
      imagen:'assets/viento/trombon.jpeg',
      audio: 'assets/viento/trombon.mp3',
      descrip: 'El trombón es un instrumento de viento metal. Su sonido se produce gracias a la vibración de los labios del intérprete en la parte denominada boquilla a partir de la columna del aire. '
    },
    {
      nombre:'Flauta de Pan',
      imagen:'assets/viento/flautapan.png',
      audio: 'assets/viento/flautapan.mp3',
      descrip: 'La Flauta de Pan es el nombre genérico de un instrumento de viento compuesto basado en el principio de la resonancia acústica del tubo cerrado. Está formado por cañas huecas, pero existen versiones en madera, marfil, metal y plástico.1​ Se trata de un instrumento musical presente en diferentes culturas y, por ende, con distintos nombres. En griego se llamó siringa (en griego σΰριγγος, síringos) y toma su nombre actual por su asociación con el dios Pan. '
    }
  ]
  playSound(instrumento) {
    let viento = new Audio();
    viento.src = instrumento.audio;
    viento.load();
    viento.play();
  }
}
