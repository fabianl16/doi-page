import { Component, OnInit, inject } from '@angular/core';
import { ImagesFromFolderService } from '../../services/images-from-folder.service';
import { fadeAnimation } from '../../animations/fade-animations';

@Component({
  selector: 'app-condos-page',
  templateUrl: './condos-page.component.html',
  animations: [fadeAnimation],
  styleUrls: ['./condos-page.component.css']
})
export class CondosPageComponent implements OnInit{

  private imagesFromFolderService: ImagesFromFolderService = inject( ImagesFromFolderService );

  public residence315Images:  string    [] = [];
  public alvarImages:         string      [] = [];
  public tramontiImages:      string      [] = [];
  public tramontiParadisoImages:      string      [] = [];




  ngOnInit(): void {
    this.setImages();
  }

  setImages(){
    this.residence315Images   = this.imagesFromFolderService.getImagesUrl('residence315');
    this.alvarImages        = this.imagesFromFolderService.getImagesUrl('alvar');
    this.tramontiImages     = this.imagesFromFolderService.getImagesUrl('tramonti');
    this.tramontiParadisoImages = this.imagesFromFolderService.getImagesUrl('tramontiParadiso');


  }
}
