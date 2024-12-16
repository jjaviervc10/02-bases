import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importa CommonModule
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';


@NgModule({

   exports: [
    HeroComponent,
    ListComponent,
   ],
   declarations: [
    HeroComponent,
    ListComponent,
   ],
   imports: [
    CommonModule  // Asegúrate de incluir CommonModule
  ]

})

export class HeroesModule{}
