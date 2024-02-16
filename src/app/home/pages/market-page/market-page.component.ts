import { Component, OnInit, inject } from '@angular/core';
import { ImagesFromFolderService } from '../../services/images-from-folder.service';
import { fadeAnimation } from '../../animations/fade-animations';

@Component({
  selector: 'app-market-page',
  templateUrl: './market-page.component.html',
  animations: [fadeAnimation],
  styleUrls: ['./market-page.component.css']
})
export class MarketPageComponent implements OnInit {

  private imagesFromFolderService: ImagesFromFolderService = inject(ImagesFromFolderService);

  public marketSantosImages: string[] = [];
  public asistenciaSocialImages: string[] = [];
  public laundryImages: string[] = [];

  ngOnInit(): void {
    this.setImages();
  }

  setImages() {
    this.marketSantosImages = this.imagesFromFolderService.getImagesUrl('marketSantos');
    this.asistenciaSocialImages = this.imagesFromFolderService.getImagesUrl('asistenciaSocial');
    this.laundryImages = this.imagesFromFolderService.getImagesUrl('laundry');

  }
}
