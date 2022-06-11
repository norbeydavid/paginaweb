import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'paginaweb';

  constructor(private router:Router){}

  Acerca() {
    this.router.navigate(['acerca']);
  }
  Contacto() {
    this.router.navigate(['contacto']);
  }
  Inicio() {
    this.router.navigate(['inicio']);
  }
  Menu() {
    this.router.navigate(['menu']);
  }



}


