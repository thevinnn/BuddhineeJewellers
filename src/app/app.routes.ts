import { Routes } from '@angular/router';
import {Home} from './home/home';
import {Homepage} from './homepage/homepage';
import {ContactPage} from './contact-page/contact-page';

export const routes: Routes = [
  {path: '', component: Homepage},
  {path: 'contact', component: ContactPage},
];
