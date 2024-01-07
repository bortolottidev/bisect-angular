import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Bisect Angular Test App';
  links = [
    { title: 'Explore the Docs', link: 'https://angular.dev' },
    {
      title: 'Learn with Tutorials',
      link: 'https://angular.dev/tutorials',
    },
    { title: 'CLI Docs', link: 'https://angular.dev/tools/cli' },
    {
      title: 'Bisect Easy',
      link: 'https://github.com/bortolottidev/bisect-easy',
    },
    {
      title: 'Bisect Angular',
      link: 'https://github.com/bortolottidev/bisect-angular',
    },
    {
      title: 'Angular DevTest',
      link: 'https://angular.dev/tools/devtools',
    },
  ];
}
