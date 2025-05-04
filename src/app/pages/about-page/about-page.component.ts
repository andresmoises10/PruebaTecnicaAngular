import {Component } from '@angular/core';
import { PresentationCardComponent } from './presentation-card/presentation-card.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [PresentationCardComponent],
  templateUrl: './about-page.component.html',
})
export class AboutPageComponent { }
