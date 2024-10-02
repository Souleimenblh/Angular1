import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { JwtHelperService } from '@auth0/angular-jwt';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

/*  users: User[] = [{"username":"admin","password":"123","roles":['ADMIN']},
                   {"username":"yousef","password":"123","roles":['USER']} ]; */

 private helper = new JwtHelperService();

apiURL: string = 'http://localhost:8081/users';
private token: string | null = null;
public loggedUser!:string;
public isloggedIn: Boolean = false;
public roles!:string[];

public regitredUser : User = new User();

  constructor(private router : Router,
              private http : HttpClient
) { }



setRegistredUser(user : User){
this.regitredUser=user;
}
getRegistredUser(){
return this.regitredUser;
}

  login(user : User)
  {
  return this.http.post<User>(this.apiURL+'/login', user , {observe:'response'});
  }
 


 
  decodeJWT()
  {   if (this.token == undefined)
            return;
            console.log(this.token,"decode f from service")

    const decodedToken = this.helper.decodeToken(this.token);
    this.roles = decodedToken.roles;
    this.loggedUser = decodedToken.sub;
  }

 



  isAdmin():Boolean{
    if (!this.roles) //this.roles== undefiened
    return false;
    return (this.roles.indexOf('ADMIN') >-1) ;
    ;
  }  


  logout() {
  this.loggedUser = undefined!;
  this.roles = undefined!;
  this.token= undefined!;
  this.isloggedIn = false;
  localStorage.removeItem('jwt');
  this.router.navigate(['/login']);
  }

  setLoggedUserFromLocalStorage(login: string) {
    this.loggedUser = login;
    this.isloggedIn = true;
   // this.getUserRoles(login);
  }

  

  isTokenExpired(): Boolean
  {
    return  this.helper.isTokenExpired(this.token);   
  }

  saveToken(token: string) {
    this.token = token;
    localStorage.setItem('jwt', token); // or session storage based on your needs
  }

  loadToken() {
    this.token = localStorage.getItem('jwt');
  }

  getToken() {
    return this.token;
  }


}
