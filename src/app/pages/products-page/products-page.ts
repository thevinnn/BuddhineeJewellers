import { Component, signal } from '@angular/core';
import { ProductGallery } from '../../components/products/product-gallery/product-gallery';
import { Title } from '../../components/shared/title/title';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [ProductGallery, Title],
  templateUrl: './products-page.html',
})
export class ProductsPage {
  categories = ['All', 'Rings', 'Pendants', 'Necklaces', 'Bangles'];
  selectedCategory = signal('All');
  title = 'Products';

  selectCategory(cat: string) {
    this.selectedCategory.set(cat);
  }
}
