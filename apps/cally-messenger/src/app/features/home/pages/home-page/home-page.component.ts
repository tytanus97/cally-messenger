import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeaderComponent } from '../../components/home-header/home-header.component';
import { HomeComponent } from '../../components/home/home.component';

@Component({
  selector: 'cally-messenger-home-page',
  standalone: true,
  imports: [CommonModule ,HomeHeaderComponent, HomeComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {}
