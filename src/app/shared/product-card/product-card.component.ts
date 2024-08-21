import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../core/models/product.model";
import {MatDialog} from "@angular/material/dialog";
import {SellerDetailComponent} from "../seller-detail/seller-detail.component";
import {Seller} from "../../core/models/seller.model";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent implements OnInit{

  @Input({required: true})  product: Product;
  @Output() loaded = new EventEmitter<number>();
  constructor(private dialog: MatDialog)  {
  }

  ngOnInit() {
    this.loaded.emit(this.product.id);
  }

  openSellerDialog(seller: Seller) {
    const dialog = this.dialog.open(SellerDetailComponent, {
      panelClass:'custom-detail-panel',
      width: '666px',
      height: '100vh',
      position: { right: '0' },
      backdropClass: 'bg-transparent',
      data: seller,
    });
    dialog.afterClosed().subscribe(value => {
      if (value) {
        // this.fetshMission()
      }
    })
  }
}
