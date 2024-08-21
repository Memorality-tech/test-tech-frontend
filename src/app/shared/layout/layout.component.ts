import {ChangeDetectorRef, Component, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MediaMatcher} from "@angular/cdk/layout";
import {MatSidenav} from "@angular/material/sidenav";
import {fillerNav} from "../../data/routing";

@Component({
  selector: 'app-layout',
  standalone: false,

  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit, OnDestroy{
  @ViewChild('sidenav') sidenav!: MatSidenav;
  onMobile = false;
  protected readonly fillerNav = fillerNav;




  ngOnInit() {

    this.testOnMobile();
  }

  // event on resize
  @HostListener('window:resize', ['$event'])
  onResize() {
   this.testOnMobile();
  }

  // test if we are on mobile display or not and update the variable
  testOnMobile() {
    this.onMobile = window.innerWidth <= 1120;
  }


  ngOnDestroy(): void {
  }

}
