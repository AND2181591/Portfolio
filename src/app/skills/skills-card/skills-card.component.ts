import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/shared/models/Skills';

@Component({
  selector: 'app-skills-card',
  templateUrl: './skills-card.component.html',
  styleUrls: ['./skills-card.component.css']
})
export class SkillsCardComponent implements OnInit {
  @Input() name: string = '';
  @Input() skills: Skill[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
