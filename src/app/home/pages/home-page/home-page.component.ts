import { Component, OnInit } from '@angular/core';
import { CarouselItem, ResponsiveOptions } from '../../interfaces';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{

  public carouselItems: CarouselItem[] = [];
  public responsiveOptions: ResponsiveOptions[] = [];

  ngOnInit(): void {
    this.carouselItems = [
      {
        title_h1: "Construyendo Sueños",
        title_span: "Edificando Futuros",
        paragraph: "Desde la concepción del proyecto hasta la entrega final, nuestro equipo de expertos se compromete a transformar tus sueños en una realidad tangible. Nos enorgullece ofrecer servicios de construcción que van más allá de las expectativas, creando espacios innovadores y duraderos.",
        buttons: [{
          texto: "Nosotros",
          clase: "btn-1",
          enlace: "/about"
        },
        {
          texto: "Contactanos",
          clase: "btn-2",
          enlace: "/contact"
        }
      ]
      },
      {
        title_h1: "Sólida Construcción, Infinitas Posibilidades",
        title_span: "Tu Visión, Nuestra Realidad",
        paragraph: "Somos una empresa de desarrollo integral que abraza cada proyecto con dedicación y experiencia, transformando ideas en estructuras sólidas y espacios acogedores.",
        buttons:  [{
          texto: "Equipo",
          clase: "btn-1",
          enlace: "/team"
        }
      ]
      }
    ];
    this.responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];
  }

}
