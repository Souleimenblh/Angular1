import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit {
  user = new User();
  err: number = 0;
  message: string = "mot de passe ou login incorrecte";

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.loadToken(); // Load the token when the app initializes
  }
  

  // onLoggedin() {
  //   this.authService.login(this.user).subscribe(
  //     (data) => {
  //       let jwToken = data.headers.get('Authorization')!;
  //       this.authService.saveToken(jwToken);
  //       this.router.navigate(['/']);
  //     },
  //     (erreur) => {
  //       this.err = 1;
  //     }
  //   );
  // }
  onLoggedin() {
    this.authService.login(this.user).subscribe({
      next: (data) => {
        let jwToken = data.headers.get('Authorization')!; // Make sure the backend sends the token in the Authorization header
        this.authService.saveToken(jwToken);
        console.log("Token saved successfully:", jwToken); // Log the token itself
        this.router.navigate(['/']); 
      },
      error: (err: any) => {
        this.err = 1; 
        if (err.error.errorCause == "disabled") {
          this.message = "L'utilisateur est désactivé !";
        }
      }
    });
  }
  
        
    }
// In auth.service.ts


