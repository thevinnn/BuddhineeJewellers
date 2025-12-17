import { Component } from '@angular/core';
import {Title} from '../title/title';

@Component({
  selector: 'app-products-page',
  imports: [Title],
  templateUrl: './products-page.html',
  styleUrl: './products-page.css',
})
export class ProductsPage {
  title = 'Our Products';
}
