import { Component, OnInit, signal } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../../core/models/product.model';
import { debounceTime } from 'rxjs';
import moment from 'moment';
const MAX_VALUE_PRICE = 500000;
const LIMIT = 10;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  loading = false;
  stats: any;
  moment = moment;
  productForm: FormGroup = this.fb.group({
    keyword: [''],
    title: [''],
    priceGte: [null],
    priceLte: [null],
    offset: 0,
    limit: LIMIT,
  });

  priceGte = 0;
  priceLte = MAX_VALUE_PRICE;

  protected readonly products = signal<Product[]>([]);
  totalElements: number;

  priceMessageError = ''
  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService
  ) {}
  ngOnInit() {
    this.productsFilter();
    this.productForm.get('keyword')?.valueChanges.pipe(debounceTime(1000))
      .subscribe(() => {
        this.productsFilter();
      });

    this.productForm.get('title')?.valueChanges.pipe(debounceTime(1000))
      .subscribe(() => {
        this.productsFilter();
      });

    this.productForm.get('priceGte')?.valueChanges.pipe(debounceTime(1000))
      .subscribe(() => {
        this.productsFilter();
      });

    this.productForm.get('priceLte')?.valueChanges.pipe(debounceTime(1000))
      .subscribe(() => {
        this.productsFilter();
      });
    // this.productForm.valueChanges.subscribe((value) => {
    //     console.log('f:', value)
    //   });
    this.fetchStats();
  }

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return `${value}`;
  }
  priceChange(event: any, key: string) {
    const value = event.target.value;
    if (this.priceGte > this.priceLte) {
      this.priceMessageError = 'min price can\'t be greater than ' + this.priceLte
    } else if (this.priceLte < this.priceGte) {
      this.priceMessageError = 'max price can\'t be lower than ' + this.priceGte
    } else {
    this.productForm.get(key)?.patchValue(+value)
    }
  }

  productsFilter() {
    this.productForm.get('offset')?.patchValue(0)
    this.loading = true;
    const body = this.productForm.value;
    // body.priceGte = this.priceGte;
    // body.priceLte = this.priceLte;
    this.productsService.productsFilter(body).subscribe({
      next: (data) => {
        this.products.set(data.results);
        // this.products = data.results
        this.totalElements = data.totalElements;
        this.loading = false;
      },
    });
  }
  fetchStats(): void {
    this.productsService.getStats().subscribe({
      next: (res) => {
        this.stats = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  loadProduct() {
    // this.loading = true
    this.productsService.productsFilter(this.productForm.value).subscribe({
      next: (data) => {
        this.products.update((oldProducts) => {
          return [...oldProducts, ...data.results];
        });
        // this.products = data.results
        this.totalElements = data.totalElements;
        // this.loading = false
      },
    });
  }

  loaded(id: number) {
    if (
      this.products().length < this.totalElements &&
      this.products().at(-2)?.id === id
    ) {
      this.productForm
        .get('offset')
        ?.patchValue(this.productForm.get('offset')?.value + 10);
      this.loadProduct();
    }
  }

  protected readonly MAX_VALUE_PRICE = MAX_VALUE_PRICE;
}
