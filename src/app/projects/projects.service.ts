import { Injectable } from '@angular/core';

import { Project } from '../shared/models/Project';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[] = [
    {
      name: 'Record Tracker', 
      image: 'https://i.imgur.com/wtXzkHa.png', 
      description: `
        My passion project! Allows the user to keep track of vinyl records they've 
        ordered or preordered using the Spotify API as a visual aid.
      `, 
      accomplishments: [
        'Connected to the Spotify API', 
        'Full use of Angular Material', 
        'Use of Firebase for front-end authentication and data storage', 
        'Local storage keeps user logged in if they are already logged in'
      ], 
      gitHubLink: 'https://github.com/AND2181591/ng-TrackMyRecords', 
      deployLink: 'https://ng-track-my-records.vercel.app/'
    }, 
    {
      name: 'GameStoop', 
      image: 'https://i.imgur.com/C4PFvZ8.png',
      description: `
        A mock storefront. Modeled after the GameStop website.
      `, 
      accomplishments: [
        'Connected to the whatoplay API found on RapidAPI.com to display games', 
        'Mild use of Angular Material', 
        'Fully responsive UI layout. Feel free to adjust the screen width!'
      ], 
      gitHubLink: 'https://github.com/AND2181591/Game-Stoop', 
      deployLink: 'https://game-stoop.vercel.app/'
    }, 
    {
      name: 'Budget Calculator', 
      image: 'https://i.imgur.com/0S4gHt1.png',
      description: `
        A simple application to calculate income and expenses.
      `, 
      accomplishments: [
        'Drag and drop to rearrange lists',  
        'Angular Material for styling'
      ], 
      gitHubLink: 'https://github.com/AND2181591/ng-Tasks', 
      deployLink: 'https://budget-calculator-zeta.vercel.app/'
    }, 
    {
      name: 'Tasks', 
      image: 'https://i.imgur.com/5s5Mw9O.png',
      description: `
        A recreation of the Tasks (to-do list) app.
      `, 
      accomplishments: [
        'First Angular application I ever built!', 
        'Color customization for every task list created', 
        'Use of Firebase for data storage', 
        'Angular Material for styling'
      ], 
      gitHubLink: 'https://github.com/AND2181591/ng-Tasks', 
      deployLink: 'https://ng-tasks.vercel.app/welcome'
    }
  ];

  constructor() { }

  getProjects(): Project[] {
    return this.projects;
  }
}
