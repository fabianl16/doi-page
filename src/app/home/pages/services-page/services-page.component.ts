import { Component, OnInit, inject } from '@angular/core';
import { ImagesFromFolderService } from '../../services/images-from-folder.service';
import { fadeAnimation } from '../../animations/fade-animations';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  animations: [fadeAnimation],
  styleUrls: ['./services-page.component.css']
})
export class ServicesPageComponent implements OnInit{

  private imagesFromFolderService: ImagesFromFolderService = inject( ImagesFromFolderService );

  public servicesImages: string[] = [];

  ngOnInit(): void {
    this.servicesImages = this.imagesFromFolderService.getImagesUrl('services');
  }


}
