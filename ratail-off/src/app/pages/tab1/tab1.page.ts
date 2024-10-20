import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  items = [
    { title: 'Projecto 1', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ullam similique tempora cum quaerat at quisquam blanditiis quo veniam soluta?', image: 'https://ionicframework.com/docs/img/demos/card-media.png' },
    { title: 'Projecto 2', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ullam similique tempora cum quaerat at quisquam blanditiis quo veniam soluta?', image: 'https://ionicframework.com/docs/img/demos/card-media.png' },
    { title: 'Projecto 3', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ullam similique tempora cum quaerat at quisquam blanditiis quo veniam soluta?', image: 'https://ionicframework.com/docs/img/demos/card-media.png' },
  ]


  constructor() { }

  ngOnInit() {
  }

}
