import { Component, Input, OnInit } from '@angular/core';
import { ResponsiveOptionsGalleria } from '../../interfaces';

@Component({
  selector: 'galleria-full-screen',
  templateUrl: './galleria-full-screen.component.html',
  styleUrls: ['./galleria-full-screen.component.css']
})
export class GalleriaFullScreenComponent  implements OnInit{

  public responsiveOptions: any[] | undefined;
  public displayBasic: boolean = false;

  @Input()
  public imagesUrls: string [] = [];

  ngOnInit(): void {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];
  }


}
