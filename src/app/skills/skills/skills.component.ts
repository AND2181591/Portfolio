import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

import { Skills } from 'src/app/shared/models/Skills';
import { SkillsService } from '../skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skills = {} as Skills;

  constructor(private skillsService: SkillsService) { }

  ngOnInit(): void {
    AOS.init();
    this.skills = this.skillsService.getSkills();
  }

}
