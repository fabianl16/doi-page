import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ScrollDirective } from './directives/scroll.directive';


@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    ServicesPageComponent,
    TeamPageComponent,
    ContactPageComponent,
    LayoutPageComponent,
    ScrollDirective
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
