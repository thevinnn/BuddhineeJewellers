import { Component, input, computed, inject } from '@angular/core';
import { ProductsService } from '../../../services/products';
import {ProductCard} from '../product-card/product-card';

@Component({
  selector: 'app-product-gallery',
  standalone: true,
  imports: [ProductCard],
  templateUrl: './product-gallery.html',
})
export class ProductGallery {
  category = input<string>('All');
  private productsService = inject(ProductsService);

  filteredProducts = computed(() => {
    const cat = this.category();
    const all = this.productsService.products();
    return cat === 'All' ? all : all.filter(p => p.category === cat);
  });
}
