import { Component, OnInit, inject } from '@angular/core';
import { ImagesFromFolderService } from '../../services/images-from-folder.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit{

  public imagesUs:            string[] = [];
  public imagesVisionMision:  string[] = [];
  public imagesUbication:     string[] = [];

  private imagesFromFolderService: ImagesFromFolderService = inject( ImagesFromFolderService );

  ngOnInit(): void {
    this.initImages();
  }

  initImages(){
    this.imagesUs = this.imagesFromFolderService.getImagesUrl('us');
    this.imagesVisionMision = this.imagesFromFolderService.getImagesUrl('visionMision');
    this.imagesUbication = this.imagesFromFolderService.getImagesUrl('ubication');
  }

}
