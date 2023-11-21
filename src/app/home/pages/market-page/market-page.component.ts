import { Component, OnInit, inject } from '@angular/core';
import { ImagesFromFolderService } from '../../services/images-from-folder.service';

@Component({
  selector: 'app-market-page',
  templateUrl: './market-page.component.html',
  styleUrls: ['./market-page.component.css']
})
export class MarketPageComponent implements OnInit {

  private imagesFromFolderService: ImagesFromFolderService = inject(ImagesFromFolderService);

  public arenalImages: string[] = [];
  public campoRiveraImages: string[] = [];
  public marketSantosImages: string[] = [];
  public palmasImages: string[] = [];

  ngOnInit(): void {
    this.setImages();
  }

  setImages() {
    this.arenalImages = this.imagesFromFolderService.getImagesUrl('arenal');
    this.campoRiveraImages = this.imagesFromFolderService.getImagesUrl('campoRivera');
    this.marketSantosImages = this.imagesFromFolderService.getImagesUrl('marketSantos');
    this.palmasImages = this.imagesFromFolderService.getImagesUrl('palmas');
  }
}
