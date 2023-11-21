import { Component, OnInit, inject } from '@angular/core';
import { ImagesFromFolderService } from '../../services/images-from-folder.service';
import { fadeAnimation } from '../../animations/fade-animations';

@Component({
  selector: 'app-hotel-page',
  templateUrl: './hotel-page.component.html',
  animations: [fadeAnimation],
  styleUrls: ['./hotel-page.component.css']
})
export class HotelPageComponent implements OnInit{

  private imagesFromFolderService: ImagesFromFolderService = inject(ImagesFromFolderService);

  public regisImages: string[] = [];
  public emeraldBayImages: string[] = [];
  public puebloBonitoImages: string[] = [];
  public puebloPacificaImages: string[] = [];
  public novaHispaniaImages: string[] = [];
  public puebloBonitoSinaloaImages: string[] = [];
  public hotelLeblancImages: string[] = [];


  ngOnInit(): void {
    this.setImages();
  }

  setImages(){
    this.regisImages = this.imagesFromFolderService.getImagesUrl('regis');
    this.emeraldBayImages = this.imagesFromFolderService.getImagesUrl('emeraldBay');
    this.puebloBonitoImages = this.imagesFromFolderService.getImagesUrl('puebloBonito');
    this.puebloPacificaImages = this.imagesFromFolderService.getImagesUrl('puebloPacifica');
    this.novaHispaniaImages = this.imagesFromFolderService.getImagesUrl('novaHispania');
    this.puebloBonitoSinaloaImages = this.imagesFromFolderService.getImagesUrl('puebloBonitoSinaloa');
    this.hotelLeblancImages = this.imagesFromFolderService.getImagesUrl('hotelLeblanc');






  }

}
