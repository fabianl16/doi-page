import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as mapboxgl from 'mapbox-gl';
(mapboxgl as any).accessToken = 'pk.eyJ1IjoiZHJlYWQ5ODc3IiwiYSI6ImNscDJ3ZjN1cTByMHAyaW9iMjZneWFwbTYifQ.x-tFzb9jbpyZFHDDhDPHqA';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ScrollDirective } from './directives/scroll.directive';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { GalleriaComponent } from './components/galleria/galleria.component';
import { environment } from 'src/environments/environments';
import { ResidencesPageComponent } from './pages/residences-page/residences-page.component';
import { HotelPageComponent } from './pages/hotel-page/hotel-page.component';
import { CondosPageComponent } from './pages/condos-page/condos-page.component';
import { UrbanizationPageComponent } from './pages/urbanization-page/urbanization-page.component';
import { MarketPageComponent } from './pages/market-page/market-page.component';
import { FlipImageComponent } from './components/flip-image/flip-image.component';
import { GalleriaFullScreenComponent } from './components/galleria-full-screen/galleria-full-screen.component';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';


@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    ServicesPageComponent,
    TeamPageComponent,
    ContactPageComponent,
    LayoutPageComponent,
    ScrollDirective,
    FooterComponent,
    CarouselComponent,
    GalleriaComponent,
    ResidencesPageComponent,
    HotelPageComponent,
    CondosPageComponent,
    UrbanizationPageComponent,
    MarketPageComponent,
    FlipImageComponent,
    GalleriaFullScreenComponent,
    ScrollTopComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PrimeNgModule
  ]
})
export class HomeModule { }
