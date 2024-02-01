import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { ImagesFromFolderService } from '../../services/images-from-folder.service';
import { MenuItem } from '../../interfaces';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent implements OnInit{

  private imageUrlService:ImagesFromFolderService = inject( ImagesFromFolderService );

  public backgroundSource: string = '';
  public menuItems: MenuItem[] = [];
  public clickOnMenu:         boolean = true;
  public logos:        string[] = [];


  @ViewChild('navbarTogglerButton') navbarTogglerButton!: ElementRef<HTMLElement>;
  public contentOpacity: number = 1;
  ngOnInit(): void {
    this.setEnvireonment();
  }

  setEnvireonment(){
    const url = this.imageUrlService.getImagesUrl('layoutBackground');
    this.logos = this.imageUrlService.getImagesUrl('logos');
    this.backgroundSource = url[0];
    this.menuItems = [
      {
        label:'Nosotros',
        icon: 'pi pi-home',
        route:'home'
      },
      {
        label:'Servicios',
        icon:'pi pi-microsoft',
        route:'services'
      },
      {
        label:'Contactanos',
        icon: 'pi pi-users',
        route:'contact'
      }
    ]
  }

  closeNavbar(){
    if( !this.navbarTogglerButton )return;
    if (window.innerWidth <= 768) {
      this.navbarTogglerButton.nativeElement.click();
    }
  }

  toggleOpacity(){
    this.contentOpacity = (this.contentOpacity === 1) ? 0 : 1;
  }

}
