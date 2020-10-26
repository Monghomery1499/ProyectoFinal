import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {

  constructor() {}
  
  instrumentos =[
    {
      nombre:'Bateria',
      imagen:'assets/percusion/bateria.jpg',
      audio: 'assets/percusion/bateria.mp3',
      descrip: 'La batería es un instrumento musical que pertenece a la familia de percusión. Este equipo estándar se usa en la música pop, el blues, el jazz, el rock, el heavy metal (en casi todos los géneros musicales), convirtiéndose, por tanto, en un instrumento indispensable para muchas agrupaciones musicales. '
    },
    {
      nombre:'Bongos',
      imagen:'assets/percusion/bongo.jpeg',
      audio: 'assets/percusion/bongo.mp3',
      descrip: 'El bongó es un instrumento membranófono conformado por un juego de dos tambores pequeños hechos de madera ligeramente troncocónicos, uno más pequeño que el otro, unidos por una pieza de madera. '
    },
    {
      nombre:'Congas',
      imagen:'assets/percusion/congas.jpeg',
      audio: 'assets/percusion/congas.mp3',
      descrip: 'La congal​ o tumbadora es un instrumento membranófono de percusión de raíces africanas, que fue desarrollado en Cuba. Además de su importancia dentro de la percusión en la música afrocubana, la conga se convirtió en un instrumento fundamental en la interpretación de otros ritmos «latinos» como la salsa, el merengue y la timba cubana.. '
    }   
  ]
  playSound(instrumento) {
    let sonido = new Audio();
    sonido.src = instrumento.audio;
    sonido.load();
    sonido.play();
  }

}
