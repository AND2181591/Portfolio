import { Injectable } from '@angular/core';

import { Skills } from '../shared/models/Skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private skills: Skills = {
    htmlCss: {
      name: 'HTML/CSS', 
      skills: [
        {
          skillName: 'HTML', 
          skillLogo: 'https://i.imgur.com/7cP1EGf.png'
        }, 
        {
          skillName: 'CSS', 
          skillLogo: 'https://i.imgur.com/jnVws5i.png'
        }, 
        {
          skillName: 'SASS', 
          skillLogo: 'https://i.imgur.com/YwfnAat.png'
        }, 
        {
          skillName: 'Angular Material', 
          skillLogo: 'https://i.imgur.com/A2EnDLH.png'
        }, 
        {
          skillName: 'Bootstrap', 
          skillLogo: 'https://i.imgur.com/hISaAgs.png'
        }
      ]
    }, 
    javaScript: {
      name: 'JavaScript', 
      skills: [
        {
          skillName: 'Angular', 
          skillLogo: 'https://i.imgur.com/fcop05s.png'
        }, 
        {
          skillName: 'TypeScript', 
          skillLogo: 'https://i.imgur.com/797DPEN.png'
        }, 
        {
          skillName: 'JavaScript', 
          skillLogo: 'https://i.imgur.com/YSqoCc3.png?1'
        }, 
        {
          skillName: 'jQuery', 
          skillLogo: 'https://i.imgur.com/MdQ9hXT.png'
        }
      ]
    }, 
    other: {
      name: 'Other', 
      skills: [
        {
          skillName: 'Git', 
          skillLogo: 'https://i.imgur.com/e98BNUe.png'
        }, 
        {
          skillName: 'Firebase', 
          skillLogo: 'https://i.imgur.com/AZTnYLM.png'
        }, 
        {
          skillName: 'Agile', 
          skillLogo: 'https://i.imgur.com/PKrXJ04.png'
        }
      ]
    }, 
    minor: {
      name: 'Minor Exposure', 
      skills: [
        {
          skillName: 'React', 
          skillLogo: 'https://i.imgur.com/wxAJXZ9.png'
        }, 
        {
          skillName: 'MySQL', 
          skillLogo: 'https://i.imgur.com/O8ab3r9.png'
        }, 
        {
          skillName: 'Photoshop', 
          skillLogo: 'https://i.imgur.com/XZOjM82.png'
        }
      ]
    }
  }


  constructor() { }

  getSkills(): Skills {
    return this.skills;
  }
}
