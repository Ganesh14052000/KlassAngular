import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  imports: [ MatCardModule, 
    ReactiveFormsModule,   
    FormsModule,    // For <mat-card>
    MatFormFieldModule,   // For <mat-form-field>
    MatInputModule,       // For <mat-input>
    MatButtonModule,      // For <mat-button>
    MatIconModule, 
  MatSnackBarModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private snackBar: MatSnackBar){}
  Login(){
    this.snackBar.open('SuccessFully Logged in');
    console.log('Button Working')
  }
}
