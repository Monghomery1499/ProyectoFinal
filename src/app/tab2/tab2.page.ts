import { Component } from '@angular/core';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
  })

  export class Tab2Page {

    constructor() { }

    instrumentos = [
      {
        nombre: 'Chelo',
        imagen: 'assets/cuerda/chelo.png',
        audio: 'assets/cuerda/chelo.mp3',
        descrip: 'El violonchelo o violoncello es un instrumento musical de cuerda frotada, perteneciente a la familia del violín. '
      },
      {
        nombre: 'Guitarra Eléctrica',
        imagen: 'assets/cuerda/guitarra-E.jpg',
        audio: 'assets/cuerda/guitarra-E.mp3',
        descrip: 'La guitarra eléctrica es un instrumento musical de seis cuerdas normalmente, que utiliza el principio de inducción electromagnética para convertir las vibraciones de sus cuerdas de metal en señales eléctricas. '
      },
      {
        nombre: 'Ukelele',
        imagen: 'assets/cuerda/Ukelele.png',
        audio: 'assets/cuerda/Ukulele.mp3',
        descrip: 'El Ukelele​ es un instrumento de cuerda pulsada utilizado como instrumento principal en la música de las islas Hawái, Tahití y la isla de Pascua que originalmente tenía cinco cuerdas. '
      },
      {
        nombre: 'Violín',
        imagen: 'assets/cuerda/violin.jpg',
        audio: 'assets/cuerda/violin.mp3',
        descrip: 'Instrumento musical de cuerda y arco formado por una caja de resonancia que se estrecha en el centro de ambos lados y con dos aberturas en forma similar a una f, y por un mástil corto con cuatro cuerdas. '
      }

    ]

    playSound(instrumento) {
      let sonido = new Audio();
      sonido.src = instrumento.audio;
      sonido.load();
      sonido.play();
    }

}
