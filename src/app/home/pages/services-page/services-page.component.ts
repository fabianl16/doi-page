import { Component, ElementRef, OnInit, inject } from '@angular/core';
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
  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.servicesImages = this.imagesFromFolderService.getImagesUrl('services');
  }

  scrollTo(id: string) {
    const element = this.elRef.nativeElement.querySelector('#' + id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }

}
