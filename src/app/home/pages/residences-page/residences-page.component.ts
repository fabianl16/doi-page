import { Component, OnInit, inject } from '@angular/core';
import { ImagesFromFolderService } from '../../services/images-from-folder.service';

@Component({
  selector: 'app-residences-page',
  templateUrl: './residences-page.component.html',
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

  }

}
