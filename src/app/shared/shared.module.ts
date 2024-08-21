import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbar} from "@angular/material/toolbar";
import {MatSidenav, MatSidenavContainer, MatSidenavModule} from "@angular/material/sidenav";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {RouterLink, RouterOutlet} from "@angular/router";
import {LayoutComponent} from "./layout/layout.component";
import { ProductCardComponent } from './product-card/product-card.component';
import {MatCardModule} from "@angular/material/card";
import {CarouselComponent} from './caroussel/caroussel.component';
import {AngularSvgIconModule} from "angular-svg-icon";
import { SellerDetailComponent } from './seller-detail/seller-detail.component';
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";
import { CardLoaderComponent } from './card-loader/card-loader.component';



@NgModule({
  declarations: [LayoutComponent, ProductCardComponent, CarouselComponent, SellerDetailComponent, CardLoaderComponent],
  imports: [
    CommonModule,
    MatToolbar,
    MatSidenavContainer,
    MatNavList,
    MatIcon,
    MatIconButton,
    MatSidenav,
    MatSidenavModule,
    MatListItem,
    RouterLink,
    RouterOutlet,
    MatCardModule,
    MatButton,
    AngularSvgIconModule.forRoot(),
    NgxSkeletonLoaderModule.forRoot({ animation: 'pulse', loadingText: 'This item is actually loading...' }),
  ],
  exports: [LayoutComponent, ProductCardComponent, CardLoaderComponent],
})
export class SharedModule { }
