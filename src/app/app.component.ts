import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {
  MatDrawer,
  MatDrawerContainer,
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent
} from "@angular/material/sidenav";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatButton, MatIconButton} from "@angular/material/button";
import {SharedModule} from "./shared/shared.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSidenavContent, MatSidenavContainer, MatToolbar, MatIcon, MatNavList, MatIconButton, MatListItem, RouterLink, MatSidenav, MatDrawerContainer, MatButton, MatDrawer
    , SharedModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test-technique-datahorizon';
  showFiller = false;

}
