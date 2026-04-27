import { Component, Input} from '@angular/core';
import {AboutPage} from '../../../pages/about-page/about-page';
import {ContactPage} from '../../../pages/contact-page/contact-page';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.html',
  styleUrl: './title.css',
})

export class Title {
  @Input() title: string = '';
}
