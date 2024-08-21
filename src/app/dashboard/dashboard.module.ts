import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {MatTableModule} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import { MatSortModule} from "@angular/material/sort";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {MatTooltip} from "@angular/material/tooltip";
import { MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormField} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatIcon} from "@angular/material/icon";
import { ProductsComponent } from './products/products.component';
import {SharedModule} from "../shared/shared.module";
import { MatSliderModule} from "@angular/material/slider";
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";


@NgModule({
  declarations: [  ProductsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatTableModule,
    MatPaginator,
    MatSortModule,
    MatProgressSpinner,
    MatTooltip,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatFormField,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatDatepicker,
    MatIcon,
    SharedModule,
    MatSliderModule,
    NgxSkeletonLoaderModule,
  ]
})
export class DashboardModule { }
