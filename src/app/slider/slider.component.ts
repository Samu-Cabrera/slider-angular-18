import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

interface Imagen {
  imgUrl: string;
  imgAlt: string  
}

@Component({
  selector: 'slider',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {

  selectIndex: number = 0;

  @Input() imagenes: Imagen[] = [];
  @Input() indicador: boolean = true;
  @Input() controles: boolean = true;
  @Input() autoplay: boolean = false;
  @Input() intervalo: number = 3000;

  ngOnInit(): void {
    if(this.autoplay) {
      setInterval(() => this.onNextClick(), this.intervalo);
    }
  }

  selectImages(index: number): void {
    this.selectIndex = index;
  }

  onPrevClick(){
    if(this.selectIndex === 0){
      this.selectIndex = this.imagenes.length - 1;
    } else {
      this.selectIndex--;
    }
  }

  onNextClick(){
    if(this.selectIndex === this.imagenes.length - 1) {
      this.selectIndex = 0;
    } else {
      this.selectIndex++;
    }
  }
}
