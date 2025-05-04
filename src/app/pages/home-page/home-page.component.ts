import {Component } from '@angular/core';
import {UserTableComponent } from './user-table/user-table.component';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [UserTableComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent { }
