import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { FireworksComponent } from './fireworks/fireworks.component';


@NgModule({
  declarations: [
    CardComponent,
    FireworksComponent
  ],
  imports: [
    CommonModule, 
  ], 
  exports: [
    CardComponent, 
    FireworksComponent
  ]
})
export class SharedModule { }
