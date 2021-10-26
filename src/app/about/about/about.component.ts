import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Content } from 'src/app/shared/models/Content';
import { AboutService } from '../about.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutMe: Content = {} as Content;
  education: Content = {} as Content;

  constructor(private aboutService: AboutService) { }

  ngOnInit(): void {
    AOS.init();

    this.aboutMe = this.aboutService.getAboutMe();
    this.education = this.aboutService.getEducation();
  }

}
