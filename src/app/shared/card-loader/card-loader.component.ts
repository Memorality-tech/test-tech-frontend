import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-loader',
  templateUrl: './card-loader.component.html',
  styleUrl: './card-loader.component.scss',
})
export class CardLoaderComponent {
  @Input() itemNumber = 10;
  @Input() height = '500px';
}
