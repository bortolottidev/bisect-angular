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
import { A_RANDOM_DEV, MY_APP_TITLE } from './app.constants';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = MY_APP_TITLE;
  links: WritableSignal<Array<Link>> = signal([]);
  myLinks: Signal<Array<Omit<Link, 'author'>>> = computed(() =>
    this.links().filter(({ author }) => author === A_RANDOM_DEV),
  );

  constructor(private linkService: LinkService) {}

  ngOnInit() {
    this.links.set(this.linkService.getAllLinks());
  }
}
