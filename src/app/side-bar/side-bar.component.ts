import { Component } from '@angular/core';
import {AppStateService} from "../Service/app-state.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  constructor(private appState:AppStateService,private route:Router) {
  }

  showLogOutAnim() {
        this.route.navigateByUrl("/");
  }

}
