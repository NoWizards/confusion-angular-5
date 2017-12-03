import { Component,ViewEncapsulation, OnInit, Inject } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {LoginComponent } from '../login/login.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }
  openLoginForm():void{
    this.dialog.open(LoginComponent, { width: '400px', height: '350px'})
  }

}
