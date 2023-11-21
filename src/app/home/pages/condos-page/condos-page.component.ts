import { Component, OnInit, inject } from '@angular/core';
import { ImagesFromFolderService } from '../../services/images-from-folder.service';

@Component({
  selector: 'app-condos-page',
  templateUrl: './condos-page.component.html',
  styleUrls: ['./condos-page.component.css']
})
export class CondosPageComponent implements OnInit{

  private imagesFromFolderService: ImagesFromFolderService = inject( ImagesFromFolderService );

  public vistaMarImages:      string      [] = [];
  public alvarImages:         string      [] = [];
  public tramontiImages:      string      [] = [];
  public campGolfImages:      string      [] = [];

  ngOnInit(): void {
    this.setImages();
  }

  setImages(){
    this.vistaMarImages     = this.imagesFromFolderService.getImagesUrl('vistaMar');
    this.alvarImages        = this.imagesFromFolderService.getImagesUrl('alvar');
    this.tramontiImages     = this.imagesFromFolderService.getImagesUrl('tramonti');
    this.campGolfImages     = this.imagesFromFolderService.getImagesUrl('golfCamp');
  }
}
