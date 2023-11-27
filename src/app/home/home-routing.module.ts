import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { CondosPageComponent } from './pages/condos-page/condos-page.component';
import { HotelPageComponent } from './pages/hotel-page/hotel-page.component';
import { MarketPageComponent } from './pages/market-page/market-page.component';
import { ResidencesPageComponent } from './pages/residences-page/residences-page.component';
import { UrbanizationPageComponent } from './pages/urbanization-page/urbanization-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'home', component: HomePageComponent},
      { path: 'about', component: AboutPageComponent},
      { path: 'contact', component: ContactPageComponent},
      { path: 'services', component: ServicesPageComponent},
      { path: 'services/condos', component: CondosPageComponent},
      { path: 'services/hotel', component: HotelPageComponent},
      { path: 'services/market', component: MarketPageComponent},
      { path: 'services/residence', component: ResidencesPageComponent},
      { path: 'services/urbanization', component: UrbanizationPageComponent},
      { path: '**', redirectTo: 'home'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
