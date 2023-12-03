import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  showAnim : boolean = false;
  file:any;
  showPopUp: boolean = false;
  uploadFile() {
    this.showAnim = true;
    setTimeout(() => {
      this.showAnim = false;
    }, 2000);
    this.file = null
    this.showPopUp = true
  }
}
