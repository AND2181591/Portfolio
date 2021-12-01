import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

import { Project } from '../../shared/models/Project';

@Component({
  selector: 'app-projects-card',
  templateUrl: './projects-card.component.html',
  styleUrls: ['./projects-card.component.css'], 
  animations: [
    trigger(
      'appear', 
      [
        transition(
          ':enter', 
          [
            style({ opacity: 0 }), 
            animate('1s ease-out', 
              style({ opacity: 1 }))
          ]
        ), 
        transition(
          ':leave', 
          [
            style({ opacity: 1 }),
            style({ opacity: 0 })
          ]
        )
      ]
    )
  ]
})
export class ProjectsCardComponent implements OnInit {
  @Input() project!: Project;
  clicked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.clicked = !this.clicked;
  }

}
