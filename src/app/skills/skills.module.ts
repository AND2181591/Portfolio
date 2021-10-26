import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsComponent } from './skills/skills.component';
import { SharedModule } from '../shared/shared.module';
import { SkillsCardComponent } from './skills-card/skills-card.component';


@NgModule({
  declarations: [
    SkillsComponent, 
    SkillsCardComponent
  ],
  imports: [
    CommonModule,
    SkillsRoutingModule, 
    SharedModule
  ]
})
export class SkillsModule { }
