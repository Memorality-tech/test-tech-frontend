import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Seller} from "../../core/models/seller.model";

@Component({
  selector: 'app-seller-detail',
  templateUrl: './seller-detail.component.html',
  styleUrl: './seller-detail.component.scss'
})
export class SellerDetailComponent {

  constructor(public dialogRef: MatDialogRef<SellerDetailComponent>,
              @Inject(MAT_DIALOG_DATA) public seller: Seller) {

  }
}
