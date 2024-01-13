import {
  Component,
  OnInit,
  Signal,
  WritableSignal,
  computed,
  signal,
  effect,
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
  public readonly title = MY_APP_TITLE;
  private readonly links: WritableSignal<Array<Link>> = signal([]);
  public readonly myLinks: Signal<Array<Omit<Link, 'author'>>> = computed(() =>
    this.links().filter(({ author }) => author === A_RANDOM_DEV),
  );

  constructor(private linkService: LinkService) {
    effect(() => {
      console.log('Hey! Current links is changed', this.links());
    });
  }

  ngOnInit() {
    this.links.set(this.linkService.getAllLinks());
  }
}
