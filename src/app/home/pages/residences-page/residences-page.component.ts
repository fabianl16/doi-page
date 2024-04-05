import { Component, OnInit, inject } from '@angular/core';
import { ImagesFromFolderService } from '../../services/images-from-folder.service';
import { fadeAnimation } from '../../animations/fade-animations';

@Component({
  selector: 'app-residences-page',
  templateUrl: './residences-page.component.html',
  animations: [fadeAnimation],
  styleUrls: ['./residences-page.component.css']
})
export class ResidencesPageComponent implements OnInit{

  private imagesFromFolderService: ImagesFromFolderService = inject( ImagesFromFolderService );

  public tresSantosImages:    string    [] = [];
  public monteBelloImages:    string    [] = [];
  public residence315Images:  string    [] = [];
  public lightHouseImages:    string    [] = [];
  public copalaImages:        string    [] = [];
  public coronadoImages:      string    [] = [];
  public mavilaImages:        string    [] = [];
  public bechClubImages:      string    [] = [];
  public vistaMarImages:      string      [] = [];
  public alvarImages:         string      [] = [];
  public tramontiImages:      string      [] = [];
  public campGolfImages:      string      [] = [];
  public tramontiParadisoImages:      string      [] = [];



  ngOnInit(): void {
    this.setImages();
  }

  setImages(){

    this.tresSantosImages     = this.imagesFromFolderService.getImagesUrl('tresSantos');
    this.monteBelloImages     = this.imagesFromFolderService.getImagesUrl('monteBello');
    this.residence315Images   = this.imagesFromFolderService.getImagesUrl('residence315');
    this.lightHouseImages     = this.imagesFromFolderService.getImagesUrl('lightHouse');
    this.copalaImages         = this.imagesFromFolderService.getImagesUrl('copala');
    this.coronadoImages       = this.imagesFromFolderService.getImagesUrl('coronado');
    this.mavilaImages         = this.imagesFromFolderService.getImagesUrl('mavila');
    this.bechClubImages       = this.imagesFromFolderService.getImagesUrl('beachClub');
    this.vistaMarImages     = this.imagesFromFolderService.getImagesUrl('vistaMar');
    this.alvarImages        = this.imagesFromFolderService.getImagesUrl('alvar');
    this.tramontiImages     = this.imagesFromFolderService.getImagesUrl('tramonti');
    this.campGolfImages     = this.imagesFromFolderService.getImagesUrl('golfCamp');
    this.tramontiParadisoImages = this.imagesFromFolderService.getImagesUrl('tramontiParadiso');

  }

}
