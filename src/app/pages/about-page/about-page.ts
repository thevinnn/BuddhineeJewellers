import { Component } from '@angular/core';
import {Title} from '../../components/shared/title/title';

@Component({
  selector: 'app-about-page',
  imports: [
    Title
  ],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css',
})
export class AboutPage {
     title = 'About';
}
