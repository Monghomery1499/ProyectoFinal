import { Component, OnInit } from '@angular/core';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { title } from 'process';
@Component({
  selector: 'app-tab7',
  templateUrl: './tab7.page.html',
  styleUrls: ['./tab7.page.scss'],
})
export class Tab7Page implements OnInit {

  constructor(private youtube: YoutubeVideoPlayer) { }

  music = [
    {
      title :'Musica Clasica',
      video : '<iframe width="560" height="315" src="https://www.youtube.com/embed/6wLti06X_Bc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      title: 'Musica',
      video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/imOd3hwgnrE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }
  
  ]



  ngOnInit() {
  }

}
