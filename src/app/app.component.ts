import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SliderComponent } from './slider/slider.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SliderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Slider-app';

  imagenes = [
    {
      imgUrl: 'https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?cs=srgb&dl=pexels-pixabay-33109.jpg&fm=jpg',
      imgAlt: 'naturaleza1'
    },
    {
      imgUrl: 'https://png.pngtree.com/background/20230522/original/pngtree-wallpaper-hd-nature-forest-lake-lake-in-autumn-picture-image_2696860.jpg',
      imgAlt: 'naturaleza2'
    },
    {
      imgUrl: 'https://png.pngtree.com/background/20230612/original/pngtree-landscape-wallpapers-picture-image_3174030.jpg',
      imgAlt: 'naturaleza3'
    }
  ]
}
