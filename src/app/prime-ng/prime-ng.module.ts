import { NgModule } from '@angular/core';


import { ButtonModule }       from 'primeng/button';
import { CardModule }         from 'primeng/card';
import { CarouselModule }     from 'primeng/carousel';
import { DividerModule }      from 'primeng/divider';
import { FieldsetModule }     from 'primeng/fieldset';
import { GalleriaModule }     from 'primeng/galleria';
import { MenubarModule }      from 'primeng/menubar';
import { PanelModule }        from "primeng/panel";
import { RadioButtonModule }  from 'primeng/radiobutton';
import { ScrollTopModule }    from 'primeng/scrolltop';
import { TableModule }        from 'primeng/table';
import { TabMenuModule }      from 'primeng/tabmenu';
import { ToolbarModule }      from 'primeng/toolbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';



@NgModule({
  declarations: [],
  exports:[
    MenubarModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    PanelModule,
    ToolbarModule,
    TableModule,
    TabMenuModule,
    CarouselModule,
    GalleriaModule,
    RadioButtonModule,
    DividerModule,
    ScrollTopModule,
    ProgressSpinnerModule,
    ProgressBarModule,
    InputTextModule,
    InputTextareaModule
  ]
})
export class PrimeNgModule { }
