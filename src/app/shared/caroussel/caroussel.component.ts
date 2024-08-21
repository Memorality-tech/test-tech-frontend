import {AfterViewInit, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrl: './caroussel.component.scss'
})
export class CarouselComponent implements OnInit, AfterViewInit {
  @Input() images: string[] =[]
  selectedIndex = 0;
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }

  next() {
    if (this.selectedIndex + 1 < this.images.length) {
      this.selectedIndex++;
    }
  }
  previous() {
    if (this.selectedIndex !== 0) {
      this.selectedIndex--;
    }
  }
}
