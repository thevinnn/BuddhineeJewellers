import { Routes } from '@angular/router';
import {Home} from './home/home';
import {Homepage} from './homepage/homepage';
import {ContactPage} from './contact-page/contact-page';
import {AboutPage} from './about-page/about-page';

export const routes: Routes = [
  {path: '', component: Homepage},
  {path: 'contact', component: ContactPage},
  {path: 'about', component: AboutPage},
];
