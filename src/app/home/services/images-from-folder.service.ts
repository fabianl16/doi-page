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
      monteBello: [
        `assets/pictures/${ folderName }/1.jpg`,
        `assets/pictures/${ folderName }/2.jpg`,
        `assets/pictures/${ folderName }/3.jpg`,
        `assets/pictures/${ folderName }/4.jpg`,
        `assets/pictures/${ folderName }/5.jpg`,
        `assets/pictures/${ folderName }/6.jpg`,
        `assets/pictures/${ folderName }/7.jpg`,
        `assets/pictures/${ folderName }/8.jpg`,
        `assets/pictures/${ folderName }/9.jpg`,
      ],
      residence315: [
        `assets/pictures/${ folderName }/1.jpg`,
        `assets/pictures/${ folderName }/2.jpg`,
        `assets/pictures/${ folderName }/3.jpg`,
        `assets/pictures/${ folderName }/4.jpg`,
        `assets/pictures/${ folderName }/5.jpg`,
        `assets/pictures/${ folderName }/6.jpg`,
        `assets/pictures/${ folderName }/7.jpg`,
      ],
      lightHouse: [
        `assets/pictures/${ folderName }/1.jpg`,
        `assets/pictures/${ folderName }/2.jpg`,
        `assets/pictures/${ folderName }/3.jpg`,
        `assets/pictures/${ folderName }/4.jpg`,
        `assets/pictures/${ folderName }/5.jpg`,
        `assets/pictures/${ folderName }/6.jpg`,
        `assets/pictures/${ folderName }/7.jpg`,
        `assets/pictures/${ folderName }/8.jpg`,
        `assets/pictures/${ folderName }/9.jpg`,
      ],
      copala: [
        `assets/pictures/${ folderName }/1.jpeg`,
        `assets/pictures/${ folderName }/2.jpg`,
        `assets/pictures/${ folderName }/3.jpg`,
        `assets/pictures/${ folderName }/4.jpg`,
        `assets/pictures/${ folderName }/5.gif`,
        `assets/pictures/${ folderName }/6.jpg`,
        `assets/pictures/${ folderName }/7.gif`,
        `assets/pictures/${ folderName }/8.gif`,
        `assets/pictures/${ folderName }/9.gif`,
        `assets/pictures/${ folderName }/10.gif`,
      ],
      coronado: [
        `assets/pictures/${ folderName }/1.jpg`,
        `assets/pictures/${ folderName }/2.jpg`,
        `assets/pictures/${ folderName }/3.jpg`,
        `assets/pictures/${ folderName }/4.jpg`,
        `assets/pictures/${ folderName }/5.jpg`,
      ],
      mavila: [
        `assets/pictures/${ folderName }/1.jpg`,
        `assets/pictures/${ folderName }/2.jpg`,
        `assets/pictures/${ folderName }/3.jpg`,
        `assets/pictures/${ folderName }/4.jpg`,
        `assets/pictures/${ folderName }/5.jpg`,
        `assets/pictures/${ folderName }/6.jpg`,
        `assets/pictures/${ folderName }/7.gif`,
        `assets/pictures/${ folderName }/8.gif`,
      ],
      beachClub: [
        `assets/pictures/${ folderName }/1.jpg`,
        `assets/pictures/${ folderName }/2.jpg`,
        `assets/pictures/${ folderName }/3.jpg`,
        `assets/pictures/${ folderName }/4.jpg`,
        `assets/pictures/${ folderName }/5.jpg`,
        `assets/pictures/${ folderName }/6.jpg`,
        `assets/pictures/${ folderName }/7.jpg`,
        `assets/pictures/${ folderName }/8.jpg`,
        `assets/pictures/${ folderName }/9.gif`,
        `assets/pictures/${ folderName }/10.gif`,
        `assets/pictures/${ folderName }/11.gif`,
        `assets/pictures/${ folderName }/12.gif`,
        `assets/pictures/${ folderName }/13.gif`,
        `assets/pictures/${ folderName }/14.gif`,
        `assets/pictures/${ folderName }/15.gif`,
        `assets/pictures/${ folderName }/16.gif`,
        `assets/pictures/${ folderName }/17.gif`,
        `assets/pictures/${ folderName }/18.gif`,
        `assets/pictures/${ folderName }/19.gif`,
        `assets/pictures/${ folderName }/20.gif`,
        `assets/pictures/${ folderName }/21.gif`,
        `assets/pictures/${ folderName }/22.gif`,
      ]
    };
    return imageMap[folderName] || [];
  }
}
