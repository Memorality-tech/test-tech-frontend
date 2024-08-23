import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../core/models/product.model';
import { MatDialog } from '@angular/material/dialog';
import { SellerDetailComponent } from '../seller-detail/seller-detail.component';
import { Seller } from '../../core/models/seller.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent implements OnInit {
  sellerPoducts = [];

  @Input({ required: true }) product: Product;
  @Output() loaded = new EventEmitter<number>();
  constructor(private dialog: MatDialog, private productApi: ProductsService) {}

  ngOnInit() {
    this.loaded.emit(this.product.id);
  }

  openSellerDialog(seller: Seller) {
    this.productApi.productBySellerName({ name: seller.name }).subscribe({
      next: (res: any) => {
        console.log(res);
        const dialog = this.dialog.open(SellerDetailComponent, {
          panelClass: 'custom-detail-panel',
          width: '900px',
          height: '100vh',
          position: { right: '0' },
          backdropClass: 'bg-transparent',
          data: res.data.filter((el: any) => el.payload),
        });
        dialog.afterClosed().subscribe((value) => {
          if (value) {
            // this.fetshMission()
          }
        });
      },
      error: (err) => {},
    });
  }
}
