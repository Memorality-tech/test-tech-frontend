import {Component, OnInit, signal} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Product} from "../../core/models/product.model";
import {debounceTime} from "rxjs";
const MAX_VALUE_PRICE = 500000;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})

export class ProductsComponent implements OnInit {


  loading = false;
  productForm: FormGroup = this.fb.group({
    query : [""],
    title : [""],
    priceGte: [0],
    priceLte: [MAX_VALUE_PRICE],
    offset: 0,
    limit : 10
  });

  priceGte = 0;
  priceLte = MAX_VALUE_PRICE;

  protected readonly products = signal<Product[]>([]);
  totalElements: number;

  constructor(private fb: FormBuilder, private productsService: ProductsService) {
  }
  ngOnInit() {
    this.productsFilter()
    this.productForm.valueChanges.pipe(debounceTime(1000)).subscribe((value) => {
      this.productsFilter()
    })
  }

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return `${value}`;
  }

  productsFilter() {
    this.loading = true
    const body = this.productForm.value;
    body.priceGte = this.priceGte;
    body.priceLte = this.priceLte;
    this.productsService.productsFilter(body).subscribe({
      next: data => {
        this.products.update(oldProducts => {
          return data.results;
        });
        console.log(data)
        // this.products = data.results
        this.totalElements = data.totalElements;
        this.loading = false
      }
    })
  }

  loadProduct() {
    // this.loading = true
    this.productsService.productsFilter(this.productForm.value).subscribe({
      next: data => {
        this.products.update(oldProducts => {
          return [...oldProducts, ...data.results];
        });
        console.log(data)
        // this.products = data.results
        this.totalElements = data.totalElements;
        // this.loading = false
      }
    })
  }

  loaded(id: number) {
    if (this.products().length < this.totalElements && this.products().at(-2)?.id === id) {
      this.productForm.get('offset')?.patchValue(this.productForm.get('offset')?.value + 1)
      this.loadProduct();
    }
  }

  protected readonly MAX_VALUE_PRICE = MAX_VALUE_PRICE;
}
