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
      ],
      vistaMar: [
        `assets/pictures/${ folderName }/1.jpg`,
        `assets/pictures/${ folderName }/2.jpg`,
        `assets/pictures/${ folderName }/3.jpg`,
        `assets/pictures/${ folderName }/4.jpg`,
        `assets/pictures/${ folderName }/5.jpg`,
        `assets/pictures/${ folderName }/6.jpg`,
      ],
      alvar: [
        `assets/pictures/${ folderName }/1.gif`,
        `assets/pictures/${ folderName }/2.gif`,
        `assets/pictures/${ folderName }/3.gif`,
        `assets/pictures/${ folderName }/4.gif`,
        `assets/pictures/${ folderName }/5.gif`,
        `assets/pictures/${ folderName }/6.gif`,
        `assets/pictures/${ folderName }/7.gif`,
        `assets/pictures/${ folderName }/8.gif`,
      ],
      tramonti: [
        `assets/pictures/${ folderName }/1.jpg`,
        `assets/pictures/${ folderName }/2.gif`,
        `assets/pictures/${ folderName }/3.jpg`,
        `assets/pictures/${ folderName }/4.jpg`,
        `assets/pictures/${ folderName }/5.jpg`,
        `assets/pictures/${ folderName }/6.jpg`,
        `assets/pictures/${ folderName }/7.gif`,
        `assets/pictures/${ folderName }/8.gif`,
      ],
      golfCamp: [
        `assets/pictures/${ folderName }/1.jpg`,
        `assets/pictures/${ folderName }/2.jpg`,
        `assets/pictures/${ folderName }/3.jpg`,
        `assets/pictures/${ folderName }/4.jpg`,
        `assets/pictures/${ folderName }/5.jpg`,
        `assets/pictures/${ folderName }/6.jpg`,
      ],
      arenal: [
        `assets/pictures/${ folderName }/1.jpg`,
        `assets/pictures/${ folderName }/2.jpg`,
        `assets/pictures/${ folderName }/3.jpg`,
        `assets/pictures/${ folderName }/4.jpg`,
      ],
      campoRivera: [
        `assets/pictures/${ folderName }/1.jpg`,
        `assets/pictures/${ folderName }/2.jpg`,
        `assets/pictures/${ folderName }/3.jpg`,
        `assets/pictures/${ folderName }/4.jpg`,
      ],
      marketSantos: [
        `assets/pictures/${ folderName }/1.gif`,
        `assets/pictures/${ folderName }/2.gif`,
        `assets/pictures/${ folderName }/3.gif`,
        `assets/pictures/${ folderName }/4.jpeg`,
        `assets/pictures/${ folderName }/5.jpeg`,
        `assets/pictures/${ folderName }/6.jpeg`,
        `assets/pictures/${ folderName }/7.jpeg`,
        `assets/pictures/${ folderName }/8.jpeg`,
      ],
      palmas: [
        `assets/pictures/${ folderName }/1.jpg`,
        `assets/pictures/${ folderName }/2.jpg`,
        `assets/pictures/${ folderName }/3.jpg`,
        `assets/pictures/${ folderName }/4.jpg`,
      ],
      regis: [
        `assets/pictures/${ folderName }/1.jpg`,
        `assets/pictures/${ folderName }/2.jpg`,
        `assets/pictures/${ folderName }/3.jpg`,
        `assets/pictures/${ folderName }/4.jpg`,
        `assets/pictures/${ folderName }/5.jpg`,
        `assets/pictures/${ folderName }/6.jpg`,
        `assets/pictures/${ folderName }/7.gif`,
        `assets/pictures/${ folderName }/8.gif`,
      ],
      emeraldBay: [
        `assets/pictures/${ folderName }/1.jpg`,
        `assets/pictures/${ folderName }/2.jpg`,
        `assets/pictures/${ folderName }/3.jpg`,
        `assets/pictures/${ folderName }/4.jpg`,
        `assets/pictures/${ folderName }/5.jpg`,
      ],
      puebloBonito: [
        `assets/pictures/${ folderName }/1.jpg`,
        `assets/pictures/${ folderName }/2.jpg`,
        `assets/pictures/${ folderName }/3.jpg`,
        `assets/pictures/${ folderName }/4.jpg`,
      ],
      puebloPacifica: [
        `assets/pictures/${ folderName }/1.jpg`,
        `assets/pictures/${ folderName }/2.jpg`,
        `assets/pictures/${ folderName }/3.jpg`,
        `assets/pictures/${ folderName }/4.jpg`,
        `assets/pictures/${ folderName }/5.jpg`,
        `assets/pictures/${ folderName }/6.jpg`,
      ],
      novaHispania: [
        `assets/pictures/${ folderName }/1.jpg`,
        `assets/pictures/${ folderName }/2.jpg`,
        `assets/pictures/${ folderName }/3.jpg`,
        `assets/pictures/${ folderName }/4.jpg`,
        `assets/pictures/${ folderName }/5.jpg`,
        `assets/pictures/${ folderName }/6.jpg`,
        `assets/pictures/${ folderName }/7.jpg`,

      ],
      puebloBonitoSinaloa:[
        `assets/pictures/${ folderName }/1.jpg`,
        `assets/pictures/${ folderName }/2.jpg`,
        `assets/pictures/${ folderName }/3.jpg`,
        `assets/pictures/${ folderName }/4.jpg`,
        `assets/pictures/${ folderName }/5.jpg`,
        `assets/pictures/${ folderName }/6.jpg`,
        `assets/pictures/${ folderName }/7.jpg`,
        `assets/pictures/${ folderName }/8.jpg`,
      ],
      hotelLeblanc:[
        `assets/pictures/${ folderName }/1.jpg`,
        `assets/pictures/${ folderName }/2.jpg`,
      ],
      pinos:[
        `assets/pictures/${ folderName }/1.jpg`,
        `assets/pictures/${ folderName }/2.jpg`,
        `assets/pictures/${ folderName }/3.jpg`,
        `assets/pictures/${ folderName }/4.jpg`,
        `assets/pictures/${ folderName }/5.jpg`,
      ],
      centroHistorico:[
        `assets/pictures/${ folderName }/1.jpg`,
        `assets/pictures/${ folderName }/2.jpg`,
        `assets/pictures/${ folderName }/3.jpg`,
        `assets/pictures/${ folderName }/4.jpg`,
      ],
      hidalgo:[
        `assets/pictures/${ folderName }/1.jpg`,
        `assets/pictures/${ folderName }/2.jpg`,
        `assets/pictures/${ folderName }/3.jpg`,
      ],
      leonaVicario:[
        `assets/pictures/${ folderName }/1.jpg`,
        `assets/pictures/${ folderName }/2.jpg`,
        `assets/pictures/${ folderName }/3.jpg`,
        `assets/pictures/${ folderName }/4.jpg`,
        `assets/pictures/${ folderName }/5.jpg`,
      ],
    };
    return imageMap[folderName] || [];
  }
}
