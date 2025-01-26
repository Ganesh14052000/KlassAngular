import { Component, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  imports: [ MatCardModule,     // For <mat-card>
    MatFormFieldModule, 
    FormsModule , 
    ReactiveFormsModule,   // For <mat-form-field>
    MatInputModule,       // For <mat-input>
    MatButtonModule,      // For <mat-button>
    MatIconModule, 
  MatSnackBarModule,
],
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  @ViewChild('myForm') myForm: NgForm | undefined;
  constructor(){}
  Login(value:any){
   console.log('Form Values',this.myForm?.value)
  }
}
