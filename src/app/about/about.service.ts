import { Injectable } from '@angular/core';
import { Content } from '../shared/models/Content';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private aboutMe: Content = {
    header: 'A Little About Me...', 
    content: `
      I'm a junior front-end (aspiring fullstack) developer currently residing in 
      Phoenix, AZ. I've been practicing Software Development since 2017 with a current 
      emphasis on the Angular framework. As a natural problem solver, I have a strong 
      passion for this field and a drive to grow within the development community. 
    `
  }

  private education: Content = {
    header: 'Education...', 
    content: `After completing the Web Development and Graphic Design program at South 
      Mountain Community College in 2019, I went on to spend my days and nights deep-diving 
      into this field. I am currently participating in a mentorship program through 
      Tech One IT.
    `
  }

  constructor() { }

  getAboutMe() {
    return this.aboutMe;
  }

  getEducation() {
    return this.education;
  }
}
