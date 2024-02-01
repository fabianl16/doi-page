import { Component, OnInit, inject } from '@angular/core';
import { CarouselItem, ResponsiveOptions } from '../../interfaces';
import { fadeAnimation } from '../../animations/fade-animations';
import { ImagesFromFolderService } from '../../services/images-from-folder.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  animations: [fadeAnimation],
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{

  public carouselItems: CarouselItem[] = [];
  public responsiveOptions: ResponsiveOptions[] = [];
  public imagesSlider:       string[] = [];


  private imagesFromFolderService: ImagesFromFolderService = inject( ImagesFromFolderService );


  ngOnInit(): void {
    this.imagesSlider = this.imagesFromFolderService.getImagesUrl('sliderHome');

    this.carouselItems = [
      {
        title_h1: "HOTEL ST REGIS",
        title_span: "Los Cabos, BCS",
        paragraph: "Desde la concepción del proyecto hasta la entrega final, nuestro equipo de expertos se compromete a transformar tus sueños en una realidad tangible. Nos enorgullece ofrecer servicios de construcción que van más allá de las expectativas, creando espacios innovadores y duraderos.",
        buttons: [{
          texto: "Servicios",
          clase: "btn-1",
          enlace: "/services"
        },
        {
          texto: "Contactanos",
          clase: "btn-2",
          enlace: "/contact"
        }
      ],
      imageUrl: this.imagesSlider[0]
      },
      {
        title_h1: "COPALA",
        title_span: "At Quivira",
        paragraph: "Somos una empresa de desarrollo integral que abraza cada proyecto con dedicación y experiencia, transformando ideas en estructuras sólidas y espacios acogedores.",
        buttons:  [{
          texto: "Servicios",
          clase: "btn-1",
          enlace: "/services"
        }
      ],
      imageUrl: this.imagesSlider[1]
      },
      {
        title_h1: "RESIDENCIAL TRAMONTI",
        title_span: "Los Cabos, BCS",
        paragraph: "Desde la concepción del proyecto hasta la entrega final, nuestro equipo de expertos se compromete a transformar tus sueños en una realidad tangible. Nos enorgullece ofrecer servicios de construcción que van más allá de las expectativas, creando espacios innovadores y duraderos.",
        buttons: [{
          texto: "Servicios",
          clase: "btn-1",
          enlace: "/services"
        },
        {
          texto: "Contactanos",
          clase: "btn-2",
          enlace: "/contact"
        }
      ],
      imageUrl: this.imagesSlider[2]
      },
      {
        title_h1: "RESIDENCIAL ALVAR",
        title_span: "At Quivira Los Cabos",
        paragraph: "Somos una empresa de desarrollo integral que abraza cada proyecto con dedicación y experiencia, transformando ideas en estructuras sólidas y espacios acogedores.",
        buttons:  [{
          texto: "Servicios",
          clase: "btn-1",
          enlace: "/services"
        }
      ],
      imageUrl: this.imagesSlider[3]
      },
      {
        title_h1: "BEACH CLUB",
        title_span: "Los Cabos, BCS",
        paragraph: "Somos una empresa de desarrollo integral que abraza cada proyecto con dedicación y experiencia, transformando ideas en estructuras sólidas y espacios acogedores.",
        buttons:  [{
          texto: "Servicios",
          clase: "btn-1",
          enlace: "/services"
        }
      ],
      imageUrl: this.imagesSlider[4]
      }
    ];
    this.responsiveOptions = [
      {
        breakpoint: '1100px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '600px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

}
