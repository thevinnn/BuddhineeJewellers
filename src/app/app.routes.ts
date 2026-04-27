import { Routes } from '@angular/router';
import {Home} from './pages/home/home';
import {Homepage} from './pages/homepage/homepage';
import {ContactPage} from './pages/contact-page/contact-page';
import {AboutPage} from './pages/about-page/about-page';
import {ProductsPage} from './pages/products-page/products-page';

export const routes: Routes = [
  {path: '', component: Homepage},
  {path: 'contact', component: ContactPage},
  {path: 'about', component: AboutPage},
  {path: 'products', component: ProductsPage},
];
