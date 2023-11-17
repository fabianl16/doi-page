import { Component, OnInit, inject } from '@angular/core';
import { ImagesFromFolderService } from '../../services/images-from-folder.service';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.css']
})
export class TeamPageComponent implements OnInit{
  private imagesFromServerService: ImagesFromFolderService = inject( ImagesFromFolderService );

  public imagesTeam: string[] = [];

  ngOnInit(): void {
    this.imagesTeam = this.imagesFromServerService.getImagesUrl('team');
  }


}
