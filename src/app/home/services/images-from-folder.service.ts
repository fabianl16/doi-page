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
        // `assets/pictures/${ folderName }/2.jpg`,
        // `assets/pictures/${ folderName }/3.jpg`,
        // `assets/pictures/${ folderName }/4.jpg`,
        // `assets/pictures/${ folderName }/5.jpg`,
        // `assets/pictures/${ folderName }/6.jpg`,
        `assets/pictures/${ folderName }/7.jpg`,
      ],
      lightHouse: [
        `assets/pictures/${ folderName }/1.jpg`,
        `assets/pictures/${ folderName }/2.jpg`,
        `assets/pictures/${ folderName }/3.jpg`,
        `assets/pictures/${ folderName }/4.jpg`,
      ],
      copala: [
        `assets/pictures/${ folderName }/1.jpg`,
        `assets/pictures/${ folderName }/2.JPG`,
        `assets/pictures/${ folderName }/3.JPG`,
        `assets/pictures/${ folderName }/4.JPG`,
        `assets/pictures/${ folderName }/5.gif`,
        `assets/pictures/${ folderName }/6.jpg`,
        `assets/pictures/${ folderName }/7.gif`,
        `assets/pictures/${ folderName }/8.gif`,
        // `assets/pictures/${ folderName }/9.jpg`,
        // `assets/pictures/${ folderName }/10.JPG`,
        // `assets/pictures/${ folderName }/11.JPG`,
      ],
      coronado: [
        `assets/pictures/${ folderName }/1.JPG`,
        `assets/pictures/${ folderName }/2.JPG`,
        `assets/pictures/${ folderName }/3.JPG`,
        `assets/pictures/${ folderName }/4.JPG`,
      ],
      mavila: [
        `assets/pictures/${ folderName }/1.jpg`,
        `assets/pictures/${ folderName }/3.jpg`,
        `assets/pictures/${ folderName }/7.JPG`,
        `assets/pictures/${ folderName }/8.jpg`,
        `assets/pictures/${ folderName }/9.JPG`,
        `assets/pictures/${ folderName }/10.JPG`,
        `assets/pictures/${ folderName }/11.jpg`,
      ],
      beachClub: [
        `assets/pictures/${ folderName }/1.JPG`,
        `assets/pictures/${ folderName }/3.JPG`,
        `assets/pictures/${ folderName }/9.gif`,
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
        // `assets/pictures/${ folderName }/1.png`,
        // `assets/pictures/${ folderName }/2.png`,
        // `assets/pictures/${ folderName }/3.png`,
        `assets/pictures/${ folderName }/4.png`,
        `assets/pictures/${ folderName }/5.png`,
        `assets/pictures/${ folderName }/6.gif`,
        `assets/pictures/${ folderName }/7.gif`,
        `assets/pictures/${ folderName }/8.gif`,
        `assets/pictures/${ folderName }/9.png`,
        `assets/pictures/${ folderName }/10.png`,
        `assets/pictures/${ folderName }/11.png`,
        `assets/pictures/${ folderName }/12.png`,
      ],
      tramonti: [
        `assets/pictures/${ folderName }/10.png`,
        `assets/pictures/${ folderName }/11.png`,
        `assets/pictures/${ folderName }/12.gif`,
        `assets/pictures/${ folderName }/13.jpg`,
      ],
      tramontiParadiso: [
        `assets/pictures/${ folderName }/1.jpg`,
        `assets/pictures/${ folderName }/2.jpg`,
        `assets/pictures/${ folderName }/3.png`,
        `assets/pictures/${ folderName }/4.png`,
      ],
      golfCamp: [
        `assets/pictures/${ folderName }/1.JPG`,
        `assets/pictures/${ folderName }/2.jpg`,
        `assets/pictures/${ folderName }/3.png`,
        `assets/pictures/${ folderName }/4.png`,
        `assets/pictures/${ folderName }/5.jpg`,
        `assets/pictures/${ folderName }/6.jpg`,
        // `assets/pictures/${ folderName }/7.JPG`,
        // `assets/pictures/${ folderName }/8.jpg`,
        // `assets/pictures/${ folderName }/9.png`,
        // `assets/pictures/${ folderName }/10.png`,
      ],
      arenal: [
        `assets/pictures/${ folderName }/3.jpg`,
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
        `assets/pictures/${ folderName }/1.JPG`,
        `assets/pictures/${ folderName }/2.png`,
        `assets/pictures/${ folderName }/3.png`,
      ],
      emeraldBay: [
        `assets/pictures/${ folderName }/1.jpg`,
        `assets/pictures/${ folderName }/3.jpg`,
        `assets/pictures/${ folderName }/5.jpg`,
      ],
      puebloBonito: [
        // `assets/pictures/${ folderName }/1.jpg`,
        `assets/pictures/${ folderName }/2.jpg`,
        // `assets/pictures/${ folderName }/3.jpg`,
        `assets/pictures/${ folderName }/4.jpg`,
        `assets/pictures/${ folderName }/5.JPG`,
      ],
      puebloPacifica: [
        `assets/pictures/${ folderName }/1.JPG`,
        `assets/pictures/${ folderName }/2.jpg`,
        `assets/pictures/${ folderName }/3.jpg`,
        `assets/pictures/${ folderName }/5.jpg`,
      ],
      novaHispania: [
        `assets/pictures/${ folderName }/4.jpg`,
        `assets/pictures/${ folderName }/8.JPG`,
        `assets/pictures/${ folderName }/9.JPG`,
        `assets/pictures/${ folderName }/10.jpg`,
        `assets/pictures/${ folderName }/11.jpg`,
      ],
      puebloBonitoSinaloa:[
        `assets/pictures/${ folderName }/3.jpg`,
        `assets/pictures/${ folderName }/4.jpg`,
      ],
      hotelLeblanc:[
        `assets/pictures/${ folderName }/1.jpg`,
        `assets/pictures/${ folderName }/2.jpg`,
      ],
      pinos:[
        `assets/pictures/${ folderName }/1.jpg`,
        `assets/pictures/${ folderName }/2.jpg`,
      ],
      centroHistorico:[
        `assets/pictures/${ folderName }/1.jpg`,
        `assets/pictures/${ folderName }/2.jpg`,
        `assets/pictures/${ folderName }/3.jpg`,
      ],
      hidalgo:[
        `assets/pictures/${ folderName }/1.jpg`,
        `assets/pictures/${ folderName }/3.jpg`,
      ],
      leonaVicario:[
        `assets/pictures/${ folderName }/1.jpg`,
        `assets/pictures/${ folderName }/3.jpg`,
      ],
      valores:[
        `assets/pictures/${ folderName }/compromiso.png`,
        `assets/pictures/${ folderName }/excelencia.png`,
        `assets/pictures/${ folderName }/integridad.png`,
        `assets/pictures/${ folderName }/lealtad.png`,
        `assets/pictures/${ folderName }/respeto.png`,
        `assets/pictures/${ folderName }/trabajoduro.png`,
      ],
      sliderHome:[
        `assets/pictures/${ folderName }/1.png`,
        `assets/pictures/${ folderName }/2.jpg`,
        `assets/pictures/${ folderName }/3.png`,
        `assets/pictures/${ folderName }/4.gif`,
        `assets/pictures/${ folderName }/5.jpg`,
      ],
      logos:[
        `assets/pictures/${ folderName }/1.png`,
      ],
      laundry:[
        `assets/pictures/${ folderName }/1.jpg`,
        `assets/pictures/${ folderName }/2.jpg`,
        `assets/pictures/${ folderName }/3.jpg`,
        `assets/pictures/${ folderName }/4.jpg`,
      ],
      asistenciaSocial:[
        `assets/pictures/${ folderName }/1.jpg`,
      ],
      constituyentes:[
        `assets/pictures/${ folderName }/1.jpg`,
        `assets/pictures/${ folderName }/2.jpg`,
      ],

    };
    return imageMap[folderName] || [];
  }
}
