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
import { LinkService } from './link.service';

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

  constructor(private linkService: LinkService) {}

  ngOnInit() {
    this.links.set(this.linkService.getAllLinks());
  }
}
