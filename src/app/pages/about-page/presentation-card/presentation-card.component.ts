import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-presentation-card',
  standalone: true,
  imports: [],
  templateUrl: './presentation-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PresentationCardComponent { }
