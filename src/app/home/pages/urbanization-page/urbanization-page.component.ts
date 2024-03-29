import { Component, OnInit, inject } from '@angular/core';
import { ImagesFromFolderService } from '../../services/images-from-folder.service';
import { fadeAnimation } from '../../animations/fade-animations';

@Component({
  selector: 'app-urbanization-page',
  templateUrl: './urbanization-page.component.html',
  animations: [fadeAnimation],
  styleUrls: ['./urbanization-page.component.css']
})
export class UrbanizationPageComponent implements OnInit{

  private imagesFromFolderService: ImagesFromFolderService = inject(ImagesFromFolderService);

  public pinosImages: string[] = [];
  public centroHistoricoImages: string[] = [];
  public hidalgoImages: string[] = [];
  public leonaVicarioImages: string[] = [];
  public palmasImages: string[] = [];
  public arenalImages: string[] = [];
  public campoRiveraImages: string[] = [];
  public contituyentesImages: string[] = [];




  ngOnInit(): void {
    this.setImages();
  }

  setImages(){
    this.pinosImages = this.imagesFromFolderService.getImagesUrl('pinos');
    this.centroHistoricoImages = this.imagesFromFolderService.getImagesUrl('centroHistorico');
    this.hidalgoImages = this.imagesFromFolderService.getImagesUrl('hidalgo');
    this.leonaVicarioImages = this.imagesFromFolderService.getImagesUrl('leonaVicario');
    this.palmasImages = this.imagesFromFolderService.getImagesUrl('palmas');
    this.arenalImages = this.imagesFromFolderService.getImagesUrl('arenal');
    this.campoRiveraImages = this.imagesFromFolderService.getImagesUrl('campoRivera');
    this.contituyentesImages = this.imagesFromFolderService.getImagesUrl('constituyentes');

  }


}
