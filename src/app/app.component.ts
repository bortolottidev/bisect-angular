import {
  Component,
  OnInit,
  Signal,
  WritableSignal,
  computed,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Link } from './link';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Bisect Angular Test App';
  links: WritableSignal<Array<Link>> = signal([]);
  myLinks: Signal<Array<Omit<Link, 'author'>>> = computed(() =>
    this.links().filter(({ author }) => author === 'daniele'),
  );

  ngOnInit() {
    this.links.set([
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
    ]);
  }
}
