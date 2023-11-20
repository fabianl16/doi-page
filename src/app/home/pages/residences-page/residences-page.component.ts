import { Component, OnInit, inject } from '@angular/core';
import { ImagesFromFolderService } from '../../services/images-from-folder.service';

@Component({
  selector: 'app-residences-page',
  templateUrl: './residences-page.component.html',
  styleUrls: ['./residences-page.component.css']
})
export class ResidencesPageComponent implements OnInit{

  private imagesFromFolderService: ImagesFromFolderService = inject( ImagesFromFolderService );
  
  public tresSantosImages: string [] = [];

  public responsiveOptions: any[] | undefined;
  public displayBasic: boolean | undefined;

  ngOnInit(): void {
    this.setImages();
  }

  setImages(){
    this.tresSantosImages = this.imagesFromFolderService.getImagesUrl('tresSantos');

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
