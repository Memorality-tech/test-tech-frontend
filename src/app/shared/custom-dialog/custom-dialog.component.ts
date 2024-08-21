import {Component, inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogRef} from "@angular/material/dialog";
import {Employee} from "../../core/models/employee.model";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-custom-dialog',
  standalone: true,
  imports: [
    MatDialogActions,
    MatButton,
    MatDialogContent
  ],
  templateUrl: './custom-dialog.component.html',
  styleUrl: './custom-dialog.component.scss'
})
export class CustomDialogComponent {
  readonly dialogRef = inject(MatDialogRef<CustomDialogComponent>);
  readonly data = inject<any>(MAT_DIALOG_DATA);

  close(param: boolean) {
    this.dialogRef.close(param);
  }
}
