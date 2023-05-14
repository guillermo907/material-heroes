import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
  @Input() selectedHero?: Hero;
  @Input() selected?: boolean;
  @Output() toggleHero = new EventEmitter();
  @Output() selectHero = new EventEmitter();

  onToggleHeroDetails($event?: Event) {
    $event?.preventDefault();
    console.log($event);
    this.toggleHero.emit();
  }
}
