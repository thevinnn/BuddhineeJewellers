import { Component, input } from '@angular/core';
import { Product } from '../../../services/products';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.html',
})
export class ProductCard{
  product = input.required<Product>();
}
