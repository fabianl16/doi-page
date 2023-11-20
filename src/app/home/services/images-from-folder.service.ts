import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesFromFolderService {

  getImagesUrl( folderName: string ): string[]{
    const imageMap: { [key: string]: string[] } = {
      layoutBackground: [
        `assets/pictures/${ folderName }/1.png`,
      ],
      us: [
        `assets/pictures/${ folderName }/1.jpg`,
        `assets/pictures/${ folderName }/2.jpg`,
        `assets/pictures/${ folderName }/3.jpg`,
      ],
      visionMision: [
        `assets/pictures/${ folderName }/1.jpg`,
        `assets/pictures/${ folderName }/2.jpg`,
        `assets/pictures/${ folderName }/3.jpg`,
      ],
      ubication: [
        `assets/pictures/${ folderName }/1.jpg`,
      ],
      services: [
        `assets/pictures/${ folderName }/1.jpg`,
        `assets/pictures/${ folderName }/2.jpg`,
        `assets/pictures/${ folderName }/3.jpg`,
        `assets/pictures/${ folderName }/4.jpg`,
        `assets/pictures/${ folderName }/5.jpg`,
      ],
      team: [
        `assets/pictures/${ folderName }/1.jpg`,
        `assets/pictures/${ folderName }/1.jpg`,
        `assets/pictures/${ folderName }/1.jpg`,
      ],
      tresSantos: [
        `assets/pictures/${ folderName }/1.jpg`,
        `assets/pictures/${ folderName }/2.jpg`,
        `assets/pictures/${ folderName }/3.jpg`,
        `assets/pictures/${ folderName }/4.jpg`,
      ],
    };
    return imageMap[folderName] || [];
  }
}
