import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fireworks',
  templateUrl: './fireworks.component.html',
  styleUrls: ['./fireworks.component.css']
})
export class FireworksComponent implements OnInit {
  @Input() fire: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
