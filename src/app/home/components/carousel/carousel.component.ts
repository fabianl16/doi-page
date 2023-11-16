import { Component, Input } from '@angular/core';
import { CarouselItem, ResponsiveOptions } from '../../interfaces';

@Component({
  selector: 'carouselComponent',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  @Input()
  public carouselItems!: CarouselItem[];

  @Input()
   public responsiveOptions?: ResponsiveOptions[];



}
