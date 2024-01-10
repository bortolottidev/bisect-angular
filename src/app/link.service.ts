import { Injectable } from '@angular/core';
import { Link } from './link';

@Injectable({
  providedIn: 'root',
})
export class LinkService {
  private links: Link[] = [
    {
      title: 'Explore the Docs',
      link: 'https://angular.dev',
      author: 'angular devs',
    },
    {
      title: 'Learn with Tutorials',
      link: 'https://angular.dev/tutorials',
      author: 'angular devs',
    },
    {
      title: 'CLI Docs',
      link: 'https://angular.dev/tools/cli',
      author: 'angular devs',
    },
    {
      title: 'Bisect Easy',
      link: 'https://github.com/bortolottidev/bisect-easy',
      author: 'daniele',
    },
    {
      title: 'Bisect Angular',
      link: 'https://github.com/bortolottidev/bisect-angular',
      author: 'daniele',
    },
    {
      title: 'Angular DevTest',
      link: 'https://angular.dev/tools/devtools',
      author: 'angular devs',
    },
  ];

  public getAllLinks(): Link[] {
    return this.links;
  }
}
