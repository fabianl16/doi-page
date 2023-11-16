import { Component, Input } from '@angular/core';
import { ResponsiveOptions } from '../../interfaces/carousel-items.interface';

@Component({
  selector: 'galleria',
  templateUrl: './galleria.component.html',
  styleUrls: ['./galleria.component.css']
})
export class GalleriaComponent {
  @Input()
  public images!: string[];

  @Input()
  public responsiveOptions!: ResponsiveOptions[];

}
